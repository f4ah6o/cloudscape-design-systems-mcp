# AWS Security Baseline

## IAM Policies

### Service Roles
| Role Name | Purpose | Services | Last Reviewed |
|-----------|---------|----------|---------------|
| LambdaExecutionRole | Lambda execution | Lambda, CloudWatch | [Date] |
| AppSyncServiceRole | AppSync operations | AppSync, DynamoDB | [Date] |
| CognitoAuthRole | Authenticated users | S3, AppSync | [Date] |
| CognitoUnauthRole | Unauthenticated users | Limited S3 | [Date] |

### User Groups
| Group | Members | Permissions | Purpose |
|-------|---------|-------------|---------|
| Admins | [List] | Full access | Administration |
| Developers | [List] | Dev resources | Development |
| ReadOnly | [List] | View only | Monitoring |

### Policy Standards
- ✅ Least privilege principle
- ✅ Resource-based permissions
- ✅ Condition-based access
- ✅ Regular reviews scheduled

## Encryption

### Data at Rest
| Service | Encryption | Key Type | Key ID |
|---------|------------|----------|--------|
| DynamoDB | Enabled | AWS managed | Default |
| S3 | Enabled | Customer managed | key-xxx |
| RDS | Enabled | AWS managed | Default |

### Data in Transit
- ✅ TLS 1.2+ enforced
- ✅ Certificate validation
- ✅ Perfect forward secrecy

### Key Management
| Key Alias | Purpose | Rotation | Last Rotated |
|-----------|---------|----------|--------------|
| app-encryption | App data | Automatic | [Date] |
| backup-key | Backups | Manual | [Date] |

## Network Security

### VPC Configuration
- **VPC ID**: vpc-xxx
- **CIDR**: 10.0.0.0/16
- **Availability Zones**: 3
- **NAT Gateways**: 3

### Security Groups
| Group Name | Purpose | Inbound | Outbound |
|------------|---------|---------|----------|
| lambda-sg | Lambda functions | None | All |
| rds-sg | Database | Port 3306 from lambda-sg | None |
| alb-sg | Load balancer | 80, 443 from Internet | lambda-sg |

### NACLs
- Default NACLs with standard rules
- Custom NACLs for sensitive subnets

## Compliance

### Standards
- ✅ AWS Well-Architected Security Pillar
- ✅ CIS AWS Foundations Benchmark
- ✅ OWASP Top 10 addressed

### Audit Trail
- ✅ CloudTrail enabled (all regions)
- ✅ S3 access logging
- ✅ VPC Flow Logs
- ✅ Config Rules active

### Data Classification
| Data Type | Classification | Storage | Encryption |
|-----------|---------------|---------|------------|
| User PII | Sensitive | DynamoDB | Required |
| App logs | Internal | CloudWatch | Optional |
| Backups | Critical | S3 | Required |

## Incident Response

### Contacts
| Role | Name | Contact | Escalation |
|------|------|---------|------------|
| Security Lead | [Name] | [Email] | Primary |
| DevOps Lead | [Name] | [Email] | Secondary |
| CTO | [Name] | [Email] | Tertiary |

### Playbooks
- ✅ Unauthorized access
- ✅ Data breach
- ✅ DDoS attack
- ✅ Credential compromise

### Tools
- AWS GuardDuty: Enabled
- AWS Security Hub: Configured
- AWS Inspector: Scheduled scans
- Third-party: [If any]

## Secrets Management

### Secrets Manager
| Secret Name | Purpose | Rotation | Last Updated |
|-------------|---------|----------|--------------|
| db-credentials | RDS access | Automatic | [Date] |
| api-keys | External APIs | Manual | [Date] |
| certificates | TLS certs | Before expiry | [Date] |

### Environment Variables
- ✅ No hardcoded secrets
- ✅ Lambda env vars encrypted
- ✅ Parameter Store for config

## Security Monitoring

### Alarms
| Alarm | Trigger | Action | Owner |
|-------|---------|--------|-------|
| Failed logins | >5 in 5min | SNS + Lambda | Security |
| Root usage | Any activity | Page on-call | Security |
| Config changes | Unauthorized | Alert + rollback | DevOps |

### Dashboards
- Security overview dashboard
- Compliance status dashboard
- Cost anomaly dashboard

## Review Schedule
| Review Type | Frequency | Next Due | Reviewer |
|-------------|-----------|----------|----------|
| IAM audit | Quarterly | [Date] | AWSSecurityGuard |
| Key rotation | Annually | [Date] | Security team |
| Compliance check | Monthly | [Date] | Compliance officer |
| Penetration test | Annually | [Date] | External firm |

## Recent Security Updates
| Date | Update | Impact | Implemented By |
|------|--------|--------|----------------|
| [Date] | [Update] | [Impact] | [Mode/Person] |

## Security Recommendations
- [ ] Enable MFA for all users
- [ ] Implement AWS Organizations SCPs
- [ ] Deploy AWS WAF rules
- [ ] Configure AWS Shield Advanced
- [ ] Regular security training

## Notes
- [Security observations]
- [Improvement opportunities]
- [Upcoming changes]
