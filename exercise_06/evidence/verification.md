# Exercise 06 Verification

| Result | Before | After |
|---|---:|---:|
| Vulnerabilities processed | 184 | 181 |
| Deep-analysis set | 126 | 125 |
| Reachable | 31 | 30 |
| Unreachable | 87 | 87 |
| Analysis errors | 0 | 0 |
| Reachable Critical CVEs | 1 | 0 |

## Target

- Advisory: `GHSA-cf4h-3jhx-xvhq`
- CVE: `CVE-2021-23358`
- Package: `underscore`
- Before: reachable
- After: absent from the scan

## Validation

```text
npm test
Done.

canary smoke test passed
```

The dependency manifests changed only after the targeted `socket fix` command. The API key was stored outside version control and was not printed in the evidence.
