---
title: Terraform Basics
description: Learn the foundational concepts of Terraform
---

Terraform uses a simple workflow and configuration files to define, manage, and provision infrastructure. This document outlines the core components and foundational concepts of Terraform.

## Core Concepts

### 1. Resources

- **Resources** are the basic building blocks in Terraform. Each resource corresponds to an infrastructure object, such as a virtual machine, storage bucket, or network.
- Example:

```hcl
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

### 2. Providers

- **Providers** are plugins that enable Terraform to interact with cloud providers, SaaS platforms, and other APIs.
- Example of configuring a provider:

```hcl
provider "aws" {
  region = "us-east-1"
}
```

### 3. State

- Terraform maintains a **state file** to track the real-world state of resources defined in the configuration.
- The state file ensures that changes are applied incrementally.

### 4. Variables

- Variables allow you to parameterize your configurations, making them reusable and dynamic.
- Example:

```hcl
variable "instance_type" {
  default = "t2.micro"
}
```

### 5. Outputs

- Outputs are used to extract and display information from your Terraform configuration.
- Example:

```hcl
output "instance_id" {
  value = aws_instance.example.id
}
```

## Terraform Files

Terraform configurations are written in `.tf` files using the **HashiCorp Configuration Language (HCL)**. The main file types are:

- **`main.tf`**: Contains the primary resource definitions.
- **`variables.tf`**: Defines input variables.
- **`outputs.tf`**: Specifies output values.

## Terraform CLI Commands

### Initialization

- Run `terraform init` to initialize your working directory and download required provider plugins.

### Planning

- Use `terraform plan` to preview changes before applying them.

### Applying Changes

- Apply your configuration with `terraform apply`.

### Destroying Resources

- Use `terraform destroy` to remove resources defined in your configuration.

## Additional Resources

- [Terraform CLI Documentation](https://developer.hashicorp.com/terraform/cli)
- [Terraform Getting Started Guide](https://learn.hashicorp.com/terraform)

---
