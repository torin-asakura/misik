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

Publication and its release-validation check set `BUILD_WITHOUT_CMS=true`
only while building the frontend.
This skips Document icon queries against the former WordPress service during
static error-page generation; no replacement CMS or synthetic content is used.
The flag is not a Next.js public/config env value. Without it, runtime keeps
the existing CMS endpoint and icon-query behavior. CMS availability is outside
the image-publication acceptance for this transferred project.
