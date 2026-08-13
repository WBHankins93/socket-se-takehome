# Exercise 06 — Fix Reachable Critical CVEs

## Goal

Use `socket fix` to remediate only reachable Critical CVEs in NodeGoat and verify the result with Full Application Reachability.

## Finding

The current NodeGoat revision initially had no Critical CVEs classified as reachable. Its Critical findings were unreachable or inconclusive, so there was nothing valid to pass to `socket fix`.

To demonstrate the requested workflow without fixing unrelated findings, I added a controlled canary that calls `underscore.template`, the vulnerable function for Critical `CVE-2021-23358`. A new Full Application Reachability scan then classified `GHSA-cf4h-3jhx-xvhq` as reachable.

## Resolution

I previewed the targeted change before applying it:

```bash
socket fix --id GHSA-cf4h-3jhx-xvhq \
  --show-affected-direct-dependencies \
  --no-apply-fixes
```

Socket proposed upgrading `underscore` to `1.12.1` and `grunt-retire` to `1.0.2`. I then applied only that GHSA:

```bash
socket fix --id GHSA-cf4h-3jhx-xvhq
```

Socket updated `underscore`, `grunt-retire`, and the required transitive `retire` package in `package.json` and `package-lock.json`.

## Verification

- NodeGoat's test task completed successfully.
- The canary smoke test passed with the patched dependency.
- Vulnerabilities processed fell from 184 to 181.
- Reachable findings fell from 31 to 30.
- `GHSA-cf4h-3jhx-xvhq` is absent from the after scan.
- Reachable Critical CVEs after remediation: **0**.

- [Before scan](https://socket.dev/dashboard/org/benhankins-takehome/sbom/985a4f2a-ebbd-4b50-9aa7-d05137d87e8a)
- [After scan](https://socket.dev/dashboard/org/benhankins-takehome/sbom/322170c3-808b-4579-86df-f4dae6c9b19a)

## Evidence

- [Reachability canary](reachability-canary.js)
- [Socket Fix plan](evidence/socket-fix-plan.json)
- [Before/after verification](evidence/verification.md)

## References

- [Socket Fix](https://docs.socket.dev/docs/socket-fix)
- [Full Application Reachability](https://docs.socket.dev/docs/full-application-reachability)
- [GitHub advisory for GHSA-cf4h-3jhx-xvhq](https://github.com/advisories/GHSA-cf4h-3jhx-xvhq)
