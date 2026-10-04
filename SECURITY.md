# Security Policy

This document outlines the security policy and vulnerability reporting procedure for the Computer Engineers' Society (CES) Website.

## Supported Versions

The CES Website is continuously deployed from the primary branch. Only the latest version running on the `main` branch is actively supported with security updates.

| Version | Supported |
| :--- | :--- |
| `main` branch | Yes |
| Older releases / commits | No |

## Reporting a Vulnerability

If you discover a security vulnerability in this repository, please report it responsibly. Do not disclose security vulnerabilities publicly through public GitHub issues, discussions, or pull requests.

### How to Report

Please report security issues using one of the following private channels:

1. **GitHub Security Advisories (Preferred)**:
   Navigate to the repository Security tab and select "Report a vulnerability" to submit a private report to project maintainers.

2. **Email**:
   If private vulnerability reporting is unavailable, email the maintainer team at `cesclub@sittechno.edu.in` with the subject line `[SECURITY] CES Website Vulnerability Report`.

### What to Include

To help us investigate and resolve the issue quickly, please provide:

- A clear description of the vulnerability and its potential impact.
- Step-by-step instructions or proof-of-concept code to reproduce the issue.
- Details about affected endpoints, pages, or components.
- Any suggested mitigations or remediation steps if available.

## Handling and Response Process

1. **Acknowledgment**: Project maintainers will acknowledge receipt of your report within 48 to 72 hours.
2. **Investigation**: Maintainers will verify the vulnerability, evaluate its severity, and determine impact on the deployed site.
3. **Remediation**: A fix will be developed and tested in a private branch or advisory fork.
4. **Deployment and Disclosure**: The fix will be merged into `main` and deployed to production. Once resolved, appropriate credit will be given to the reporter (unless anonymity is requested).

## Responsible Disclosure

We appreciate the efforts of security researchers and community members who identify potential vulnerabilities. We ask that you:

- Provide reasonable time for maintainers to remediate the vulnerability before publishing any details.
- Avoid accessing or modifying data that does not belong to you.
- Avoid actions that could disrupt availability for other users (such as denial of service attacks).
