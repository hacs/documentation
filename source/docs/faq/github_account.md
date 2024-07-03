---
id: github_account
title: "Why do I need a GitHub account?"
description: "Information about why a GitHub account is needed"
---

HACS uses the [GitHub API](https://docs.github.com/en/rest) to gather information about all [available](https://github.com/hacs/default) and downloaded repositories. Unauthenticated requests on this API are [rate limited](https:/.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) to 60 requests every hour. Because this is not enough, HACS needs to make authenticated requests. The rate limit for authenticated requests is much higher.

For authentication, an OAuth token with no scopes is used.  It grants read-only access to public information (including user profile info, repository info, and gists).

[You can read more about OAuth scopes here](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps).

For more information about what and how often HACS updates or refreshes, take a look at [Data sources](/docs/faq/data_sources.md).
