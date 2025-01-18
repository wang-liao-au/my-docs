---
title: Relation between State Files and Configuration Files
description: Relation between State Files and Configuration Files
---

The **relationship between Terraform configuration files** and **state files** is integral to how Terraform operates in managing infrastructure as code. Here’s how they interact:

### 1. **Definition vs. Reality**
- **Configuration File**: Describes the desired state of the infrastructure. It outlines what resources should exist, their properties, and how they should be connected.
- **State File**: Represents the actual state of the infrastructure as it exists in the real world after Terraform has applied the configuration.

### 2. **Terraform Workflow**:
#### **Plan** Phase
- **Configuration File**: Terraform reads the configuration file to understand what the desired state is.
- **State File**: Terraform reads the state file to understand the current state of the infrastructure.
- **Comparison**: Terraform compares the desired state (from the configuration file) with the current state (from the state file) to determine what changesast are needed to bring the infrastructure to the desired state.

#### **Apply** Phase
- **Execution**: Based on the plan, Terraform makes changes to the infrastructure (creates, updates, or deletes resources).
- **State File Update**: After making changes, Terraform updates the state file to reflect the new current state of the infrastructure.

### 3. **Synchronization**
- **State File Integrity**: The state file must always reflect the true state of the infrastructure. Any manual changes to infrastructure outside Terraform can lead to a discrepancy between the actual state and what is recorded in the state file.
- **Configuration File Update**: When the configuration file is updated (e.g., adding a new resource or changing an existing one), the next `terraform apply` will attempt to align the real infrastructure with these changes, updating the state file accordingly.

### 4. **Importance of State File**
- **Tracking Changes**: The state file enables Terraform to know what resources are managed and what changes need to be made. Without the state file, Terraform wouldn’t know the existing state of resources and could not safely make updates.
- **Dependency Management**: It tracks resource dependencies, ensuring that Terraform applies changes in the correct order.
- **Outputs**: Captures and stores output values that are defined in the configuration, making them accessible for other configurations or users.

### 5. **Example Scenario**
- **Initial Apply**:
  - **Configuration**: You define an `aws_instance` in the configuration file.
  - **Apply**: Terraform creates the instance and stores its details in the state file.
  
- **Update Configuration**:
  - **Configuration Change**: You change the `instance_type` in the configuration file.
  - **Plan**: Terraform reads the current state (from the state file) and compares it with the updated configuration.
  - **Apply**: Terraform updates the instance type in the actual infrastructure and updates the state file to reflect the new state.

### 6. **Challenges and Best Practices**
- **Consistency**: The state file must always be in sync with the actual infrastructure to avoid unintended changes.
- **Security**: Since state files may contain sensitive data, they should be securely stored, often in remote backends like AWS S3 with encryption.
- **Version Control**: Configuration files are typically version-controlled, while state files are not, to prevent conflicts and ensure integrity.

### Summary
- The **configuration file** defines the "desired" state of infrastructure.
- The **state file** captures the "current" state of infrastructure as managed by Terraform.
- Terraform uses both files to ensure the actual infrastructure matches the desired state and updates the infrastructure as needed while keeping the state file in sync with the real-world environment.