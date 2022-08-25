---
id: github_account
title: "Why do I need a GitHub account?"
description: "Information about why a GitHub account is needed"
---

HACS uses the [GitHub API](https://docs.github.com/en/rest) to gather information about all [available](https://github.com/hacs/default) and downloaded repositories. [This API is rate limited](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) to 60 requsets every hour for unauthenticated requests, which is not enough. So HACS needs to make authenticated requests to that API.

A OAuth token with no scopes which grants read-only access to public information (including user profile info, repository info, and gists), will be used.

[You can read more about OAuth scopes here](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps).
