# Jira Management Metadata

## Project Configuration
- Project Key: CA
- Project Name: Cloudscape Assistant
- Last Updated: 2025-06-04

## Current Issues
| Issue Key | Type | Summary | Status | Status Category | Priority | Created | Updated |
|-----------|------|---------|--------|----------------|----------|---------|---------|
| CA-3 | Bug | Fix MCP server issues with component search and tool registration | In Progress | In Progress | High | 2025-06-04 | 2025-06-04 |

## Issue Types
### Bug
- ID: 10004
- Description: A problem which impairs or prevents the functions of the product
- Required Fields: 
  - Summary
  - Description
  - Priority
  - Affects Version/s

### Story
- ID: 10002
- Description: A user story
- Required Fields:
  - Summary
  - Description
  - Acceptance Criteria

### Task
- ID: 10003
- Description: A task that needs to be done
- Required Fields:
  - Summary
  - Description

### Epic
- ID: 10000
- Description: A big user story that needs to be broken down
- Required Fields:
  - Summary
  - Description
  - Epic Name

## Workflows
### Standard Workflow
- States: To Do → In Progress → In Review → Done
- Transitions:
  - Backlog → Begin Development (ID: 21)
  - Backlog → Development In Progress (ID: 31)
  - Begin Development → Development In Progress (ID: 31)

### Status Categories
- **To Do Category**: Backlog
- **In Progress Category**: Begin Development, Development In Progress
- **Done Category**: Done

## Custom Fields
### Epic Link
- Field ID: customfield_10014
- Field Name: Epic Link
- Usage: Links issues to an epic

### Acceptance Criteria
- Field ID: customfield_10016
- Field Name: Acceptance Criteria
- Usage: Defines the criteria for accepting a story as complete

## Link Types
- blocks/is blocked by
- relates to
- duplicates/is duplicated by
- is parent of/is child of

## Components
- Frontend
- Backend
- Documentation
- MCP Server
- Search Engine
- Component Registry

## Priority Scheme
- Highest: Critical issues that need immediate attention
- High: Important issues that should be addressed soon
- Medium: Issues that should be addressed in the current sprint
- Low: Issues that can be addressed in a future sprint
- Lowest: Issues that are nice to have but not critical