---
title: Difference between Providers and Provisioners
description: Understand concept difference between Providers and Provisioners
---

In Terraform, **providers** and **provisioners** serve different purposes, and understanding their distinction is critical to building infrastructure effectively.

---

### **Providers**

1. **Definition**:
   Providers are plugins that Terraform uses to interact with various external services (e.g., AWS, Azure, GCP, Kubernetes).

2. **Purpose**:

   - To define and manage infrastructure resources.
   - Provide a declarative API to interact with resources like virtual machines, databases, storage, etc.

3. **Key Characteristics**:

   - Providers must be explicitly declared (e.g., `provider "aws"`).
   - Providers handle resource creation, updating, and deletion based on the configuration.

4. **Example**:

   ```hcl
   provider "aws" {
     region = "us-east-1"
   }

   resource "aws_instance" "example" {
     ami           = "ami-123456"
     instance_type = "t2.micro"
   }
   ```

5. **When to Use**:
   Use providers when you want to manage infrastructure resources directly.

---

### **Provisioners**

1. **Definition**:
   Provisioners are used to execute scripts or commands on a resource after it has been created or updated.

2. **Purpose**:

   - To perform tasks that Terraform itself cannot handle natively, such as:
     - Installing software.
     - Configuring services.
     - Running shell commands.

3. **Key Characteristics**:

   - Provisioners are run **inside the created resource** (like SSH into a VM).
   - Types include `local-exec` and `remote-exec`.
   - They are considered **last-resort** features and should be used sparingly.

4. **Example**:

   ```hcl
   resource "aws_instance" "example" {
     ami           = "ami-123456"
     instance_type = "t2.micro"

     provisioner "remote-exec" {
       connection {
         type     = "ssh"
         user     = "ubuntu"
         private_key = file("~/.ssh/id_rsa")
         host     = self.public_ip
       }

       inline = [
         "sudo apt-get update",
         "sudo apt-get install -y nginx",
       ]
     }
   }
   ```

5. **When to Use**:
   - Use provisioners for bootstrapping resources when there’s no alternative (e.g., using cloud-init or dedicated configuration tools like Ansible or Chef).

---

### **Key Differences**

| Aspect            | Providers                           | Provisioners                       |
| ----------------- | ----------------------------------- | ---------------------------------- |
| **Purpose**       | Manage infrastructure resources.    | Execute tasks on the resource.     |
| **Scope**         | Declarative (e.g., create VMs).     | Procedural (e.g., configure VMs).  |
| **Execution**     | Executes Terraform-defined actions. | Executes scripts or commands.      |
| **Lifecycle**     | Runs during `plan` and `apply`.     | Runs during `apply` only.          |
| **Best Practice** | Essential for managing resources.   | Avoid unless absolutely necessary. |

---

### **Which Should You Use?**

- **Providers** are core to Terraform’s declarative approach and should always be the first choice for managing infrastructure.
- **Provisioners** are a fallback mechanism and should only be used when the required functionality cannot be achieved using providers or external tools.
