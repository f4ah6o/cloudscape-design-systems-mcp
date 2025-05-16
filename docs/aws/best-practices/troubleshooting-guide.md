# AWS Troubleshooting Guide

## Overview

This guide provides systematic approaches to troubleshooting common AWS issues. It includes diagnostic steps, resolution strategies, and preventive measures for various AWS services and scenarios.

## General Troubleshooting Framework

### 1. Initial Assessment

1. **Identify Symptoms**
   - Error messages
   - Performance degradation
   - Service unavailability
   - Unexpected behavior

2. **Determine Scope**
   - Single service or multiple?
   - One region or global?
   - Specific time window?
   - User segment affected?

3. **Check AWS Status**
   - AWS Service Health Dashboard
   - Personal Health Dashboard
   - CloudWatch Synthetics
   - Third-party monitoring

4. **Review Recent Changes**
   - Deployment history
   - Configuration changes
   - IAM policy updates
   - Code deployments

### 2. Diagnostic Steps

```bash
# Basic AWS CLI diagnostics
aws sts get-caller-identity
aws ec2 describe-instances --region us-east-1
aws logs tail /aws/lambda/function-name --follow
aws cloudwatch get-metric-statistics --namespace AWS/Lambda \
  --metric-name Errors --start-time 2024-01-01T00:00:00Z \
  --end-time 2024-01-01T01:00:00Z --period 300 --statistics Sum
```

### 3. Common Diagnostic Tools

- **CloudWatch Logs Insights**
- **X-Ray Service Map**
- **VPC Flow Logs**
- **CloudTrail Event History**
- **AWS Config**
- **Systems Manager Session Manager**

## Service-Specific Troubleshooting

### Lambda Function Issues

#### Problem: High Cold Start Latency

**Symptoms:**
- First invocation takes significantly longer
- Intermittent performance issues
- Timeouts on initial calls

**Diagnosis:**
```javascript
// Add logging to measure cold start
const coldStart = true;

exports.handler = async (event) => {
  if (coldStart) {
    console.error('COLD START');
    coldStart = false;
  }
  
  const startTime = Date.now();
  // Function logic
  console.error(`Execution time: ${Date.now() - startTime}ms`);
};
```

**Resolution:**
1. **Provisioned Concurrency**
   ```bash
   aws lambda put-provisioned-concurrency-config \
     --function-name my-function \
     --provisioned-concurrent-executions 10
   ```

2. **Optimize Package Size**
   - Remove unnecessary dependencies
   - Use Lambda Layers for shared code
   - Minimize deployment package

3. **Memory Optimization**
   - Increase memory allocation
   - Monitor with CloudWatch
   - Find optimal configuration

4. **Keep Functions Warm**
   ```javascript
   // Warming function
   if (event.source === 'serverless-plugin-warmup') {
     return { statusCode: 200 };
   }
   ```

#### Problem: Lambda Timeout Errors

**Symptoms:**
- Function execution exceeds timeout
- Incomplete processing
- Error: "Task timed out after X seconds"

**Diagnosis:**
1. Check CloudWatch Logs
2. Review X-Ray traces
3. Monitor duration metrics

**Resolution:**
1. **Increase Timeout**
   ```bash
   aws lambda update-function-configuration \
     --function-name my-function \
     --timeout 900
   ```

2. **Optimize Code**
   - Implement async processing
   - Use Step Functions for long workflows
   - Batch process data

3. **Implement Checkpointing**
   ```javascript
   async function processWithCheckpoint(items, checkpoint) {
     const startIndex = checkpoint || 0;
     for (let i = startIndex; i < items.length; i++) {
       try {
         await processItem(items[i]);
         await saveCheckpoint(i + 1);
       } catch (error) {
         console.error(`Failed at index ${i}:`, error);
         throw error;
       }
     }
   }
   ```

#### Problem: Lambda Memory Errors

**Symptoms:**
- "Runtime exited with error: signal: killed"
- Out of memory exceptions
- Function crashes unexpectedly

**Resolution:**
1. Increase memory allocation
2. Implement memory-efficient algorithms
3. Use streaming for large files
4. Monitor with CloudWatch metrics

### DynamoDB Issues

#### Problem: Throttling Exceptions

**Symptoms:**
- ProvisionedThroughputExceededException
- Request rate exceeded
- 400 errors from DynamoDB

**Diagnosis:**
```bash
# Check consumed capacity
aws cloudwatch get-metric-statistics \
  --namespace AWS/DynamoDB \
  --metric-name ConsumedReadCapacityUnits \
  --dimensions Name=TableName,Value=my-table \
  --start-time 2024-01-01T00:00:00Z \
  --end-time 2024-01-01T01:00:00Z \
  --period 60 \
  --statistics Average
```

**Resolution:**
1. **Enable Auto-Scaling**
   ```javascript
   const params = {
     TableName: 'my-table',
     BillingMode: 'PAY_PER_REQUEST'
   };
   await dynamodb.updateTable(params).promise();
   ```

2. **Implement Exponential Backoff**
   ```javascript
   async function retryWithBackoff(operation, maxRetries = 5) {
     for (let i = 0; i < maxRetries; i++) {
       try {
         return await operation();
       } catch (error) {
         if (error.code !== 'ProvisionedThroughputExceededException') {
           throw error;
         }
         const delay = Math.pow(2, i) * 100;
         await new Promise(resolve => setTimeout(resolve, delay));
       }
     }
     throw new Error('Max retries exceeded');
   }
   ```

3. **Optimize Access Patterns**
   - Use batch operations
   - Implement caching layer
   - Distribute workload

#### Problem: Hot Partition

**Symptoms:**
- Uneven performance
- Throttling on specific items
- Skewed request distribution

**Diagnosis:**
1. Enable Contributor Insights
2. Analyze access patterns
3. Review partition key design

**Resolution:**
1. **Redesign Partition Key**
   ```javascript
   // Add randomness to partition key
   const item = {
     pk: `${userId}#${Math.floor(Math.random() * 10)}`,
     sk: timestamp,
     // other attributes
   };
   ```

2. **Use Write Sharding**
   ```javascript
   function getShardedKey(baseKey, shardCount = 10) {
     const shard = Math.floor(Math.random() * shardCount);
     return `${baseKey}#${shard}`;
   }
   ```

### API Gateway Issues

#### Problem: 502 Bad Gateway

**Symptoms:**
- Intermittent 502 errors
- Gateway timeout
- Integration failures

**Diagnosis:**
1. Check integration endpoint health
2. Review timeout settings
3. Analyze CloudWatch logs

**Resolution:**
1. **Increase Timeout**
   ```javascript
   // API Gateway timeout: max 29 seconds
   const api = new apigateway.RestApi(this, 'api', {
     defaultIntegration: new apigateway.LambdaIntegration(handler, {
       timeout: cdk.Duration.seconds(29)
     })
   });
   ```

2. **Implement Retry Logic**
   ```javascript
   const integration = new apigateway.LambdaIntegration(handler, {
     retryAttempts: 2,
     timeout: cdk.Duration.seconds(10)
   });
   ```

3. **Add Health Checks**
   ```javascript
   api.root.addResource('health').addMethod('GET', 
     new apigateway.MockIntegration({
       integrationResponses: [{
         statusCode: '200',
         responseTemplates: {
           'application/json': '{"status": "healthy"}'
         }
       }]
     })
   );
   ```

#### Problem: CORS Errors

**Symptoms:**
- "No 'Access-Control-Allow-Origin' header"
- Preflight request failures
- Cross-origin blocked

**Resolution:**
1. **Configure CORS Properly**
   ```javascript
   const api = new apigateway.RestApi(this, 'api', {
     defaultCorsPreflightOptions: {
       allowOrigins: apigateway.Cors.ALL_ORIGINS,
       allowMethods: apigateway.Cors.ALL_METHODS,
       allowHeaders: ['Content-Type', 'Authorization'],
       allowCredentials: true
     }
   });
   ```

2. **Lambda Response Headers**
   ```javascript
   return {
     statusCode: 200,
     headers: {
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Credentials': true,
       'Access-Control-Allow-Headers': 'Content-Type,Authorization'
     },
     body: JSON.stringify(data)
   };
   ```

### S3 Issues

#### Problem: Access Denied Errors

**Symptoms:**
- 403 Access Denied
- Unable to list/read/write objects
- Permission errors

**Diagnosis:**
```bash
# Check bucket policy
aws s3api get-bucket-policy --bucket my-bucket

# Check IAM policies
aws iam simulate-principal-policy \
  --policy-source-arn arn:aws:iam::account:user/username \
  --action-names s3:GetObject \
  --resource-arns arn:aws:s3:::my-bucket/*
```

**Resolution:**
1. **Update Bucket Policy**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [{
       "Effect": "Allow",
       "Principal": {
         "AWS": "arn:aws:iam::account:role/role-name"
       },
       "Action": ["s3:GetObject", "s3:PutObject"],
       "Resource": "arn:aws:s3:::my-bucket/*"
     }]
   }
   ```

2. **Fix CORS Configuration**
   ```json
   {
     "CORSRules": [{
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET", "PUT", "POST"],
       "AllowedOrigins": ["https://example.com"],
       "ExposeHeaders": ["ETag"],
       "MaxAgeSeconds": 3000
     }]
   }
   ```

### EC2 Issues

#### Problem: Instance Unreachable

**Symptoms:**
- Cannot SSH/RDP to instance
- Application not responding
- Health check failures

**Diagnosis:**
1. Check instance status
2. Review security groups
3. Verify network ACLs
4. Check route tables

**Resolution:**
1. **Security Group Rules**
   ```bash
   # Allow SSH
   aws ec2 authorize-security-group-ingress \
     --group-id sg-xxxxx \
     --protocol tcp \
     --port 22 \
     --cidr 0.0.0.0/0
   ```

2. **System Status Checks**
   ```bash
   aws ec2 describe-instance-status \
     --instance-ids i-xxxxx \
     --include-all-instances
   ```

3. **Network Troubleshooting**
   ```bash
   # Check VPC route table
   aws ec2 describe-route-tables \
     --filters "Name=vpc-id,Values=vpc-xxxxx"
   
   # Verify internet gateway
   aws ec2 describe-internet-gateways \
     --filters "Name=attachment.vpc-id,Values=vpc-xxxxx"
   ```

### RDS Issues

#### Problem: Connection Timeouts

**Symptoms:**
- Cannot connect to database
- Timeout errors
- Connection refused

**Diagnosis:**
1. Check security groups
2. Verify subnet groups
3. Review parameter groups
4. Check endpoint DNS

**Resolution:**
1. **Update Security Groups**
   ```bash
   aws ec2 authorize-security-group-ingress \
     --group-id sg-xxxxx \
     --protocol tcp \
     --port 3306 \
     --source-group sg-yyyyy
   ```

2. **Enable Public Access**
   ```bash
   aws rds modify-db-instance \
     --db-instance-identifier mydb \
     --publicly-accessible \
     --apply-immediately
   ```

#### Problem: Storage Full

**Symptoms:**
- Write operations failing
- Database hangs
- Storage space warnings

**Resolution:**
1. **Increase Storage**
   ```bash
   aws rds modify-db-instance \
     --db-instance-identifier mydb \
     --allocated-storage 200 \
     --apply-immediately
   ```

2. **Enable Storage Autoscaling**
   ```bash
   aws rds modify-db-instance \
     --db-instance-identifier mydb \
     --max-allocated-storage 1000 \
     --apply-immediately
   ```

### CloudFormation Issues

#### Problem: Stack Rollback

**Symptoms:**
- CREATE_FAILED status
- UPDATE_ROLLBACK_COMPLETE
- Resource creation errors

**Diagnosis:**
1. Check stack events
2. Review resource errors
3. Validate template

**Resolution:**
1. **Debug Stack Events**
   ```bash
   aws cloudformation describe-stack-events \
     --stack-name my-stack \
     --query 'StackEvents[?ResourceStatus==`CREATE_FAILED`]'
   ```

2. **Validate Template**
   ```bash
   aws cloudformation validate-template \
     --template-body file://template.json
   ```

3. **Fix Common Issues**
   - IAM permissions
   - Resource dependencies
   - Parameter constraints
   - Service limits

## Performance Troubleshooting

### High Latency Issues

1. **Identify Bottlenecks**
   - Use X-Ray for tracing
   - CloudWatch metrics
   - Application logs

2. **Common Causes**
   - Cold starts
   - Database queries
   - Network latency
   - Inefficient code

3. **Resolution Strategies**
   - Implement caching
   - Optimize queries
   - Use CDN
   - Code optimization

### High Error Rates

1. **Error Analysis**
   ```bash
   aws logs insights query \
     --log-group-name /aws/lambda/function \
     --start-time 2024-01-01T00:00:00 \
     --end-time 2024-01-01T23:59:59 \
     --query 'fields @timestamp, @message | filter @message like /ERROR/'
   ```

2. **Common Patterns**
   - Timeout errors
   - Memory issues
   - Permission denied
   - External service failures

## Monitoring and Alerting

### CloudWatch Alarms

```javascript
// High error rate alarm
const errorAlarm = new cloudwatch.Alarm(this, 'ErrorAlarm', {
  metric: new cloudwatch.Metric({
    metricName: 'Errors',
    namespace: 'AWS/Lambda',
    dimensionsMap: {
      FunctionName: function.functionName
    }
  }),
  threshold: 10,
  evaluationPeriods: 1,
  treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
});

// Latency alarm
const latencyAlarm = new cloudwatch.Alarm(this, 'LatencyAlarm', {
  metric: new cloudwatch.Metric({
    metricName: 'Duration',
    namespace: 'AWS/Lambda',
    dimensionsMap: {
      FunctionName: function.functionName
    },
    statistic: 'Average'
  }),
  threshold: 3000,
  evaluationPeriods: 2
});
```

### Custom Metrics

```javascript
// Application-specific metrics
const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatch();

async function putMetric(metricName, value, unit = 'Count') {
  const params = {
    Namespace: 'MyApp',
    MetricData: [{
      MetricName: metricName,
      Value: value,
      Unit: unit,
      Timestamp: new Date()
    }]
  };
  
  await cloudwatch.putMetricData(params).promise();
}

// Usage
await putMetric('OrdersProcessed', orderCount);
await putMetric('ProcessingTime', duration, 'Milliseconds');
```

## Preventive Measures

### 1. Infrastructure as Code
- Version control everything
- Test in staging first
- Implement rollback procedures
- Use change sets

### 2. Monitoring Strategy
- Set up comprehensive monitoring
- Create actionable alerts
- Regular review of metrics
- Implement SLOs/SLAs

### 3. Security Best Practices
- Least privilege access
- Regular security audits
- Enable all logging
- Encrypt sensitive data

### 4. Disaster Recovery
- Regular backups
- Test restore procedures
- Multi-region setup
- Documented runbooks

### 5. Cost Management
- Set billing alerts
- Regular cost reviews
- Right-sizing resources
- Use reserved capacity

## Troubleshooting Checklist

### Initial Response
- [ ] Identify affected services
- [ ] Check AWS service health
- [ ] Review recent changes
- [ ] Gather error messages
- [ ] Document timeline

### Investigation
- [ ] Check CloudWatch logs
- [ ] Review metrics
- [ ] Analyze X-Ray traces
- [ ] Verify configurations
- [ ] Test in isolation

### Resolution
- [ ] Implement fix
- [ ] Verify resolution
- [ ] Monitor for stability
- [ ] Document solution
- [ ] Update runbooks

### Post-Incident
- [ ] Conduct RCA
- [ ] Update documentation
- [ ] Implement preventive measures
- [ ] Share learnings
- [ ] Review monitoring

## Common Error Codes

| Error Code | Service | Common Cause | Resolution |
|------------|---------|--------------|------------|
| 403 | API Gateway | Missing API key | Add x-api-key header |
| 502 | API Gateway | Lambda timeout | Increase timeout |
| 504 | CloudFront | Origin timeout | Check origin health |
| AccessDenied | S3 | IAM permissions | Update policies |
| ThrottlingException | DynamoDB | Exceeded capacity | Enable auto-scaling |
| InvalidParameterValue | Lambda | Bad configuration | Check environment vars |
| ResourceNotFoundException | Various | Missing resource | Verify resource exists |

## Useful Commands

```bash
# General debugging
aws logs tail /aws/lambda/function-name --follow
aws cloudtrail lookup-events --lookup-attributes AttributeKey=Username,AttributeValue=root
aws support describe-cases

# Lambda debugging
aws lambda get-function-configuration --function-name my-function
aws lambda list-event-source-mappings --function-name my-function

# API Gateway debugging
aws apigateway get-rest-apis
aws apigateway get-deployments --rest-api-id xxx
aws apigateway get-stage --rest-api-id xxx --stage-name prod

# DynamoDB debugging
aws dynamodb describe-table --table-name my-table
aws dynamodb describe-time-to-live --table-name my-table

# S3 debugging
aws s3api get-bucket-policy --bucket my-bucket
aws s3api get-bucket-cors --bucket my-bucket
aws s3api get-bucket-versioning --bucket my-bucket

# CloudFormation debugging
aws cloudformation describe-stack-events --stack-name my-stack
aws cloudformation describe-stack-resources --stack-name my-stack
aws cloudformation get-template --stack-name my-stack
```

## Advanced Troubleshooting

### Using Systems Manager
```bash
# Run commands on EC2 instances
aws ssm send-command \
  --document-name "AWS-RunShellScript" \
  --targets "Key=tag:Name,Values=WebServer" \
  --parameters 'commands=["df -h", "free -m", "top -n 1"]'

# Start session on instance
aws ssm start-session --target i-xxxxx
```

### X-Ray Analysis
```javascript
// Instrument Lambda function
const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));

exports.handler = async (event) => {
  const segment = AWSXRay.getSegment();
  const subsegment = segment.addNewSubsegment('custom-processing');
  
  try {
    // Your code here
    const result = await processData(event);
    subsegment.close();
    return result;
  } catch (error) {
    subsegment.addError(error);
    subsegment.close();
    throw error;
  }
};
```

### Cost Analysis
```bash
# Get cost by service
aws ce get-cost-and-usage \
  --time-period Start=2024-01-01,End=2024-01-31 \
  --granularity DAILY \
  --metrics "UnblendedCost" \
  --group-by Type=DIMENSION,Key=SERVICE

# Find unused resources
aws ec2 describe-volumes \
  --filters "Name=status,Values=available" \
  --query 'Volumes[*].[VolumeId,Size,CreateTime]'
```

## Emergency Procedures

### Service Outage
1. Activate incident response team
2. Assess impact and scope
3. Implement temporary workarounds
4. Communicate with stakeholders
5. Execute recovery procedures

### Security Incident
1. Isolate affected resources
2. Preserve evidence
3. Assess damage scope
4. Implement containment
5. Begin recovery process

### Data Loss
1. Stop write operations
2. Assess backup availability
3. Determine recovery point
4. Execute restore procedures
5. Verify data integrity

## Resources

- AWS Service Health Dashboard
- AWS Personal Health Dashboard
- AWS Support Center
- AWS re:Post Community
- AWS Documentation
- AWS Architecture Center
- AWS Well-Architected Tool
