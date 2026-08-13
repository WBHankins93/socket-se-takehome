# Socket Sales Engineer Take-Home

This repository contains my work for the six Socket support exercises. Each exercise includes the customer scenario, investigation or implementation, outcome, and supporting evidence.

| Exercise | Scenario | Outcome |
|---|---|---|
| [01](exercise_01/README.md) | Incorrect Python dependency versions | Confirmed the requested versions were not published in PyPI and documented the safe remediation path. |
| [02](exercise_02/README.md) | Missing Go dependency | Traced the missing module to restricted GitLab access rather than invalid `go.mod` syntax. |
| [03](exercise_03/README.md) | GitLab pipeline failure | Identified the Socket authentication failure and incorrect GitLab token mapping. |
| [04](exercise_04/README.md) | GitHub Actions integration | Configured Socket on pull requests and verified the workflow and dependency feedback. |
| [05](exercise_05/README.md) | Reachability analysis | Compared standard and Full Application Reachability scans using OWASP NodeGoat. |
| [06](exercise_06/README.md) | Critical CVE remediation | Used targeted `socket fix`, tested the changes, and verified reachable Critical CVEs fell to zero. |

## Approach

I treated each exercise as a customer-facing troubleshooting or implementation scenario:

1. reproduce the reported behavior;
2. validate it with native tooling and Socket documentation;
3. isolate the root cause or required configuration;
4. remediate only what was in scope; and
5. verify the result and preserve concise evidence.

Credentials and local interview notes are excluded from version control.
