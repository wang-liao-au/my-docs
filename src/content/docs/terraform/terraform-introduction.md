---
title: Introduction to Terraform
description: Overview of Terraform and its purpose
---

Terraform is an open-source Infrastructure as Code (IaC) tool developed by HashiCorp. It enables users to define and provision infrastructure resources in a declarative manner. Terraform supports a wide variety of cloud providers and on-premise systems, making it a versatile tool for managing infrastructure.

## What is Infrastructure as Code (IaC)?

**Infrastructure as Code** is the practice of managing and provisioning computing infrastructure using code rather than manual processes. It provides consistency, repeatability, and scalability for managing resources.

### Benefits of IaC:

- Version control for infrastructure
- Automation and consistency
- Collaboration and reduced errors

## Why Terraform?

Terraform offers several unique advantages over other IaC tools:

1. **Declarative Language**: Define the desired state of infrastructure without specifying the step-by-step process to achieve it.
2. **Provider Agnostic**: Supports multiple providers such as AWS, Azure, GCP, Kubernetes, and more.
3. **State Management**: Maintains a state file to track the current state of your infrastructure.
4. **Modular and Scalable**: Use modules to reuse and organize configurations efficiently.

## Key Features of Terraform

1. **Resource Graph**: Automatically determines the dependencies between resources and executes them in the correct order.
2. **Plan and Apply**: Preview changes before applying them with `terraform plan`.
3. **State Management**: Uses a state file to map real-world resources to your configuration.

## Terraform Workflow

A typical Terraform workflow involves:

1. **Write**: Define resources in `.tf` files using the HashiCorp Configuration Language (HCL).
2. **Plan**: Run `terraform plan` to preview the changes.
3. **Apply**: Use `terraform apply` to execute the plan and provision resources.
4. **Manage**: Update, destroy, or modify resources as needed.

## Additional Resources

- [Terraform Official Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform GitHub Repository](https://github.com/hashicorp/terraform)

---
