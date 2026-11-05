# misik

For Law &amp; Order

## Container publication

The Release workflow publishes through the existing Yarn `image pack` command
to GHCR with the `misik-` image prefix and `hash-timestamp` tag policy.
Authentication uses the repository `GITHUB_TOKEN` with Packages write access;
Yandex registry credentials are not used.

Merged pull requests retain changed-workspace publication. A manual Release
dispatch on `master` publishes `@landing/app`, including when only release
configuration has changed. Existing package access controls apply to pulls.
