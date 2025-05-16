# Common AWS Architectures

## Overview

This document provides detailed reference architectures for common AWS application patterns. Each architecture includes component diagrams, implementation details, and best practices aligned with the AWS Well-Architected Framework.

## 1. Three-Tier Web Application

### Architecture Overview

A classic three-tier architecture separating presentation, application, and data layers for scalability and maintainability.

```
┌─────────────────────────────────────────────────────────┐
│                    CloudFront                           │
└─────────────────┬───────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────┐
│              Application Load Balancer                  │
└─────────────────┬───────────────────────────────────────┘
                  │
    ┌─────────────┴──────────────┐
    │                            │
┌───▼────────┐          ┌────────▼───────┐
│   Web      │          │     Web        │
│   Server   │          │     Server     │
│   (EC2)    │          │     (EC2)      │
└───┬────────┘          └────────┬───────┘
    │                            │
    └─────────────┬──────────────┘
                  │
┌─────────────────▼───────────────────────────────────────┐
│              Application Load Balancer                  │
└─────────────────┬───────────────────────────────────────┘
                  │
    ┌─────────────┴──────────────┐
    │                            │
┌───▼────────┐          ┌────────▼───────┐
│   App      │          │     App        │
│   Server   │          │     Server     │
│   (EC2)    │          │     (EC2)      │
└───┬────────┘          └────────┬───────┘
    │                            │
    └─────────────┬──────────────┘
                  │
┌─────────────────▼───────────────────────────────────────┐
│                   RDS Multi-AZ                          │
│                 (Primary + Standby)                     │
└─────────────────────────────────────────────────────────┘
```

### Components

1. **CloudFront CDN**
   - Global content delivery
   - Static asset caching
   - SSL/TLS termination
   - DDoS protection

2. **Application Load Balancer**
   - Layer 7 load balancing
   - Path-based routing
   - SSL termination
   - Health checks

3. **Web Tier (EC2)**
   - Auto-scaling groups
   - Multiple availability zones
   - Stateless design
   - Session management via ElastiCache

4. **Application Tier (EC2)**
   - Business logic
   - API endpoints
   - Background job processing
   - Container-ready (ECS/EKS optional)

5. **Database Tier (RDS)**
   - Multi-AZ deployment
   - Read replicas
   - Automated backups
   - Encryption at rest

### Implementation Details

```typescript
// CDK Implementation Example
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export class ThreeTierWebStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC
    const vpc = new ec2.Vpc(this, 'AppVPC', {
      maxAzs: 2,
      natGateways: 2,
      subnetConfiguration: [
        {
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24,
        },
        {
          name: 'Database',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 24,
        },
      ],
    });

    // Database
    const database = new rds.DatabaseInstance(this, 'Database', {
      engine: rds.DatabaseInstanceEngine.mysql({
        version: rds.MysqlEngineVersion.VER_8_0,
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T3,
        ec2.InstanceSize.LARGE
      ),
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
      multiAz: true,
      allocatedStorage: 100,
      storageEncrypted: true,
    });

    // Application deployment code continues...
  }
}
```

### Best Practices

1. **Security**
   - Use security groups as virtual firewalls
   - Enable VPC Flow Logs
   - Implement WAF rules
   - Use Systems Manager for patch management
   - Enable AWS Shield for DDoS protection

2. **Performance**
   - Use CloudFront for static content
   - Implement database connection pooling
   - Use ElastiCache for session storage
   - Monitor with CloudWatch and X-Ray
   - Implement auto-scaling policies

3. **Reliability**
   - Deploy across multiple AZs
   - Use health checks at all tiers
   - Implement circuit breakers
   - Regular backup testing
   - Disaster recovery planning

4. **Cost Optimization**
   - Right-size instances
   - Use Reserved Instances
   - Implement auto-scaling
   - Monitor with Cost Explorer
   - Use S3 lifecycle policies

## 2. Serverless Microservices

### Architecture Overview

A modern serverless architecture using AWS managed services for maximum scalability and minimum operational overhead.

```
┌─────────────────────────────────────────────────────────┐
│                       Route 53                          │
└─────────────────┬───────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────┐
│                    CloudFront                           │
└─────────────────┬───────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────┐
│                   API Gateway                           │
└─────────────────┬───────────────────────────────────────┘
                  │
    ┌─────────────┼──────────────┐──────────────┐
    │             │              │               │
┌───▼────────┐ ┌──▼─────────┐ ┌─▼──────────┐ ┌─▼──────────┐
│  Lambda    │ │  Lambda    │ │  Lambda    │ │  Lambda    │
│  Service A │ │  Service B │ │  Service C │ │  Service D │
└───┬────────┘ └──┬─────────┘ └─┬──────────┘ └─┬──────────┘
    │             │             │              │
    │     ┌───────▼──────────┐  │              │
    │     │    DynamoDB      │  │              │
    │     │  (Service Data)  │  │              │
    │     └──────────────────┘  │              │
    │                           │              │
    │     ┌─────────────────────▼───────┐      │
    │     │      EventBridge            │      │
    │     │   (Event Processing)        │      │
    │     └─────────────────────────────┘      │
    │                                          │
    └────────────────────┬─────────────────────┘
                         │
             ┌───────────▼────────────┐
             │      SQS Queue         │
             │  (Async Processing)    │
             └────────────────────────┘
```

### Components

1. **API Gateway**
   - REST/HTTP APIs
   - Request validation
   - Rate limiting
   - API keys management
   - CORS configuration

2. **Lambda Functions**
   - Individual microservices
   - Language-specific runtimes
   - Environment variables
   - Layer management
   - VPC connectivity (when needed)

3. **DynamoDB**
   - NoSQL data storage
   - Global tables
   - On-demand scaling
   - Point-in-time recovery
   - Encryption at rest

4. **EventBridge**
   - Event routing
   - Schema registry
   - Event replay
   - Third-party integrations
   - Custom event buses

5. **SQS/SNS**
   - Message queuing
   - Fan-out patterns
   - Dead letter queues
   - FIFO queues
   - Message encryption

### Implementation Example

```typescript
// Service A - User Service
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { EventBridge } from 'aws-sdk';

const dynamodb = new DynamoDB.DocumentClient();
const eventBridge = new EventBridge();

export const createUser: APIGatewayProxyHandler = async (event) => {
  const userData = JSON.parse(event.body || '{}');
  
  try {
    // Save to DynamoDB
    await dynamodb.put({
      TableName: process.env.USER_TABLE!,
      Item: {
        userId: userData.userId,
        ...userData,
        createdAt: new Date().toISOString(),
      },
    }).promise();

    // Publish event
    await eventBridge.putEvents({
      Entries: [{
        EventBusName: process.env.EVENT_BUS!,
        Source: 'user.service',
        DetailType: 'UserCreated',
        Detail: JSON.stringify(userData),
      }],
    }).promise();

    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'User created successfully' }),
    };
  } catch (error) {
    console.error('Error creating user:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
```

### Best Practices

1. **Service Design**
   - Keep functions small and focused
   - Use shared layers for common code
   - Implement proper error handling
   - Use structured logging
   - Design for idempotency

2. **Event-Driven Architecture**
   - Use EventBridge for loose coupling
   - Implement event schemas
   - Handle poison messages
   - Use SQS for reliable processing
   - Implement circuit breakers

3. **Performance Optimization**
   - Minimize cold starts
   - Optimize package size
   - Use connection pooling
   - Implement caching strategies
   - Monitor with X-Ray

4. **Security**
   - Least privilege IAM roles
   - API Gateway authorization
   - Encrypt data in transit
   - Use Secrets Manager
   - Enable CloudTrail

## 3. Real-Time Data Analytics

### Architecture Overview

A comprehensive data analytics platform for processing real-time streams and batch data.

```
┌─────────────────────────────────────────────────────────┐
│                   Data Sources                          │
│     (IoT Devices, Apps, Web Logs, Databases)           │
└─────────────────┬──────────────┬────────────────────────┘
                  │              │
         ┌────────▼────────┐     │
         │ Kinesis Data    │     │
         │ Streams         │     │
         └────────┬────────┘     │
                  │              │
    ┌─────────────┼──────────────┼────────────────────┐
    │             │              │                    │
┌───▼────────┐ ┌──▼─────────┐ ┌─▼──────────┐ ┌──────▼─────┐
│  Lambda    │ │  Kinesis   │ │  Kinesis   │ │    S3      │
│  (Real-    │ │  Analytics │ │  Firehose  │ │  (Raw      │
│   time)    │ │  (SQL)     │ │  (Archive) │ │   Data)    │
└───┬────────┘ └──┬─────────┘ └─┬──────────┘ └──────┬─────┘
    │             │             │                    │
    │     ┌───────▼──────────┐  │                    │
    │     │   DynamoDB       │  │                    │
    │     │  (Results)       │  │                    │
    │     └──────────────────┘  │                    │
    │                           │                    │
    │                           │        ┌───────────▼────────┐
    │                           │        │      Glue          │
    │                           │        │  (ETL Jobs)        │
    │                           │        └───────────┬────────┘
    │                           │                    │
    └─────────────┬──────────────┘                    │
                  │                                   │
         ┌────────▼────────────────────────────┐     │
         │          Elasticsearch              │     │
         │      (Search & Analytics)           │     │
         └────────┬────────────────────────────┘     │
                  │                                   │
         ┌────────▼────────┐              ┌──────────▼────────┐
         │    Kibana       │              │      Athena       │
         │ (Dashboards)    │              │  (SQL Queries)    │
         └─────────────────┘              └───────────────────┘
```

### Components

1. **Kinesis Data Streams**
   - Real-time data ingestion
   - Ordered data processing
   - Multiple consumers
   - Data retention
   - Shard management

2. **Kinesis Analytics**
   - SQL on streaming data
   - Time window processing
   - Anomaly detection
   - Real-time aggregations
   - Output to multiple destinations

3. **Kinesis Firehose**
   - Automatic data delivery
   - Format conversion
   - Compression
   - Encryption
   - Error record handling

4. **AWS Glue**
   - ETL job orchestration
   - Data cataloging
   - Schema discovery
   - Job scheduling
   - Data lineage

5. **Athena & QuickSight**
   - Serverless SQL queries
   - Interactive analysis
   - Visualization
   - Ad-hoc reporting
   - Data exploration

### Implementation Example

```python
# Kinesis Analytics SQL Query
CREATE STREAM anomaly_detection AS
SELECT 
    timestamp,
    sensor_id,
    temperature,
    avg_temperature,
    CASE 
        WHEN temperature > avg_temperature * 1.2 THEN 'HIGH'
        WHEN temperature < avg_temperature * 0.8 THEN 'LOW'
        ELSE 'NORMAL'
    END AS status
FROM (
    SELECT 
        ROWTIME as timestamp,
        sensor_id,
        temperature,
        AVG(temperature) OVER (
            PARTITION BY sensor_id 
            RANGE INTERVAL '10' MINUTE PRECEDING
        ) as avg_temperature
    FROM SOURCE_SQL_STREAM_001
);

# Lambda Function for Processing
import json
import boto3
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('SensorData')

def lambda_handler(event, context):
    for record in event['Records']:
        # Decode Kinesis data
        payload = json.loads(
            base64.b64decode(record['kinesis']['data']).decode('utf-8')
        )
        
        # Process and store
        item = {
            'sensor_id': payload['sensor_id'],
            'timestamp': payload['timestamp'],
            'temperature': payload['temperature'],
            'processed_at': datetime.now().isoformat()
        }
        
        # Store in DynamoDB
        table.put_item(Item=item)
        
        # Additional processing
        if payload['temperature'] > 100:
            send_alert(payload)
    
    return {
        'statusCode': 200,
        'body': json.dumps(f'Processed {len(event["Records"])} records')
    }

# CDK Stack for Analytics Pipeline
import * as cdk from 'aws-cdk-lib';
import * as kinesis from 'aws-cdk-lib/aws-kinesis';
import * as kinesisfirehose from 'aws-cdk-lib/aws-kinesisfirehose';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as glue from 'aws-cdk-lib/aws-glue';

export class AnalyticsPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Kinesis Stream
    const stream = new kinesis.Stream(this, 'DataStream', {
      streamName: 'sensor-data-stream',
      shardCount: 10,
      retentionPeriod: cdk.Duration.days(7),
    });

    // S3 Bucket for raw data
    const bucket = new s3.Bucket(this, 'RawDataBucket', {
      bucketName: 'analytics-raw-data',
      lifecycleRules: [{
        id: 'archive-old-data',
        transitions: [{
          storageClass: s3.StorageClass.GLACIER,
          transitionAfter: cdk.Duration.days(90),
        }],
      }],
    });

    // Kinesis Firehose
    const deliveryStream = new kinesisfirehose.CfnDeliveryStream(
      this,
      'DeliveryStream',
      {
        deliveryStreamName: 'sensor-data-delivery',
        deliveryStreamType: 'KinesisStreamAsSource',
        kinesisStreamSourceConfiguration: {
          kinesisStreamArn: stream.streamArn,
          roleArn: firehoseRole.roleArn,
        },
        s3DestinationConfiguration: {
          bucketArn: bucket.bucketArn,
          prefix: 'raw-data/',
          errorOutputPrefix: 'error/',
          compressionFormat: 'GZIP',
        },
      }
    );

    // Glue Crawler
    const crawler = new glue.CfnCrawler(this, 'DataCrawler', {
      name: 'sensor-data-crawler',
      role: glueRole.roleArn,
      targets: {
        s3Targets: [{
          path: `s3://${bucket.bucketName}/raw-data/`,
        }],
      },
      schedule: {
        scheduleExpression: 'rate(1 hour)',
      },
    });
  }
}
```

### Best Practices

1. **Stream Processing**
   - Choose appropriate shard count
   - Handle processing failures
   - Implement checkpointing
   - Monitor lag metrics
   - Plan for resharding

2. **Data Lake Architecture**
   - Organize data in partitions
   - Use appropriate file formats (Parquet, ORC)
   - Implement data lifecycle policies
   - Enable data cataloging
   - Maintain data lineage

3. **Performance Optimization**
   - Batch processing where possible
   - Use compression
   - Implement data partitioning
   - Cache frequently accessed data
   - Optimize query patterns

4. **Cost Management**
   - Right-size Kinesis shards
   - Use S3 lifecycle policies
   - Optimize Glue job resources
   - Monitor data transfer costs
   - Use spot instances for batch processing

## 4. Static Website with Global CDN

### Architecture Overview

A highly available static website with global distribution and serverless backend.

```
┌─────────────────────────────────────────────────────────┐
│                       Route 53                          │
│                    (DNS Management)                     │
└─────────────────┬───────────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────────┐
│                     CloudFront                          │
│                  (Global CDN)                           │
└─────────────────┬───────────────────┬───────────────────┘
                  │                   │
         ┌────────▼────────┐  ┌───────▼────────┐
         │   S3 Bucket     │  │  API Gateway   │
         │ (Static Files)  │  │   (REST API)   │
         └─────────────────┘  └───────┬────────┘
                                      │
                              ┌───────▼────────┐
                              │     Lambda     │
                              │   Functions    │
                              └───────┬────────┘
                                      │
                              ┌───────▼────────┐
                              │   DynamoDB     │
                              │   (Backend)    │
                              └────────────────┘
```

### Implementation

```typescript
// CDK Stack
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';

export class StaticWebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 Bucket for static content
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
    });

    // Certificate for HTTPS
    const certificate = new acm.Certificate(this, 'Certificate', {
      domainName: 'example.com',
      subjectAlternativeNames: ['*.example.com'],
      validation: acm.CertificateValidation.fromDns(),
    });

    // CloudFront Distribution
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      domainNames: ['example.com', 'www.example.com'],
      certificate: certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
    });

    // Route 53
    const zone = new route53.HostedZone(this, 'HostedZone', {
      zoneName: 'example.com',
    });

    new route53.ARecord(this, 'AliasRecord', {
      zone,
      recordName: 'example.com',
      target: route53.RecordTarget.fromAlias(
        new targets.CloudFrontTarget(distribution)
      ),
    });
  }
}
```

## 5. Container-Based Microservices

### Architecture Overview

A container-based microservices architecture using ECS and Fargate.

```
┌─────────────────────────────────────────────────────────┐
│              Application Load Balancer                  │
└─────────────────┬───────────────────────────────────────┘
                  │
    ┌─────────────┼──────────────┐──────────────┐
    │             │              │               │
┌───▼────────┐ ┌──▼─────────┐ ┌─▼──────────┐ ┌─▼──────────┐
│  Service   │ │  Service   │ │  Service   │ │  Service   │
│     A      │ │     B      │ │     C      │ │     D      │
└───┬────────┘ └──┬─────────┘ └─┬──────────┘ └─┬──────────┘
    │             │             │              │
    └─────────────┴─────┬───────┴──────────────┘
                        │
                 ┌──────▼──────┐
                 │  ECS/Fargate │
                 │   Cluster    │
                 └──────┬──────┘
                        │
              ┌─────────┴─────────┐
              │                   │
        ┌─────▼─────┐      ┌─────▼─────┐
        │    RDS    │      │    Redis  │
        │ (Primary) │      │  (Cache)  │
        └───────────┘      └───────────┘
```

### Implementation

```typescript
// ECS Service Definition
import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';

export class ContainerMicroservicesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC
    const vpc = new ec2.Vpc(this, 'MicroservicesVPC', {
      maxAzs: 2,
    });

    // ECS Cluster
    const cluster = new ecs.Cluster(this, 'Cluster', {
      vpc,
      containerInsights: true,
    });

    // Task Definition
    const taskDefinition = new ecs.FargateTaskDefinition(
      this,
      'ServiceTask',
      {
        memoryLimitMiB: 512,
        cpu: 256,
      }
    );

    // Container Definition
    const container = taskDefinition.addContainer('AppContainer', {
      image: ecs.ContainerImage.fromRegistry('myapp:latest'),
      memoryLimitMiB: 512,
      environment: {
        NODE_ENV: 'production',
      },
      logging: ecs.LogDrivers.awsLogs({
        streamPrefix: 'microservice',
      }),
    });

    container.addPortMappings({
      containerPort: 3000,
      protocol: ecs.Protocol.TCP,
    });

    // Service
    const service = new ecs.FargateService(this, 'Service', {
      cluster,
      taskDefinition,
      desiredCount: 3,
      assignPublicIp: false,
    });

    // Load Balancer
    const lb = new elbv2.ApplicationLoadBalancer(this, 'ALB', {
      vpc,
      internetFacing: true,
    });

    const targetGroup = new elbv2.ApplicationTargetGroup(
      this,
      'TargetGroup',
      {
        vpc,
        port: 3000,
        protocol: elbv2.ApplicationProtocol.HTTP,
        targets: [service],
        healthCheck: {
          path: '/health',
          interval: cdk.Duration.seconds(30),
        },
      }
    );

    lb.addListener('Listener', {
      port: 80,
      defaultTargetGroups: [targetGroup],
    });

    // Auto Scaling
    const scaling = service.autoScaleTaskCount({
      minCapacity: 2,
      maxCapacity: 10,
    });

    scaling.scaleOnCpuUtilization('CpuScaling', {
      targetUtilizationPercent: 50,
    });

    scaling.scaleOnRequestCount('RequestScaling', {
      requestsPerTarget: 1000,
      targetGroup,
    });
  }
}
```

## Architecture Decision Matrix

| Use Case | Recommended Architecture | Key AWS Services |
|----------|-------------------------|------------------|
| Static Website | CloudFront + S3 | Route 53, ACM |
| REST API | API Gateway + Lambda + DynamoDB | CloudWatch, X-Ray |
| Real-time Analytics | Kinesis + Glue + Athena | S3, QuickSight |
| Machine Learning | SageMaker + API Gateway | Lambda, S3 |
| Traditional Web App | ALB + EC2 + RDS | ElastiCache, CloudFront |
| Microservices | ECS/EKS + Service Mesh | API Gateway, DynamoDB |
| Event Processing | EventBridge + SQS + Lambda | DynamoDB, SNS |
| Data Lake | S3 + Glue + Athena | Lake Formation |
| IoT Platform | IoT Core + Kinesis | Lambda, DynamoDB |
| Video Processing | MediaConvert + S3 | CloudFront, Lambda |

## Migration Patterns

### Lift and Shift
- Direct migration of existing applications
- Minimal changes to architecture
- Quick time to cloud
- Optimization comes later

### Re-platform
- Leverage managed services
- Replace components with AWS services
- Moderate effort and benefits
- Better cost optimization

### Re-architect
- Complete redesign for cloud
- Maximum use of cloud-native services
- Highest effort but best results
- Full scalability and resilience

## Success Criteria

- **Performance**: Response times under 100ms
- **Availability**: 99.9% uptime
- **Scalability**: Handle 10x traffic spikes
- **Security**: Zero security incidents
- **Cost**: Within budget constraints
- **Maintainability**: Easy to update and deploy

## Next Steps

1. Choose architecture pattern
2. Create proof of concept
3. Plan migration strategy
4. Implement monitoring
5. Optimize for production
