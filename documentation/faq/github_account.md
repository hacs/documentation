---
id: github_account
title: "Why do I need a GitHub account?"
description: "Information about why a GitHub account is needed"
---

HACS uses the [GitHub API](https://docs.github.com/en/rest) to gather information about all [available](https://github.com/hacs/default) and downloaded repositories. [This API is rate limited](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) to 60 requsets every hour for unauthenticated requests, which is not enough. So HACS needs to make authenticated requests to that API.

If you set up HACS in the Home Assistant UI, a OAuth token with no scopes which grants read-only access to public information (including user profile info, repository info, and gists), will be used.

If you set up HACS with YAML, you need to supply a [Personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), you do not need to add any of the scopes when creating the token to limit the access grant to read-only access to public information (including user profile info, repository info, and gists).

[You can read more about OAuth scopes here](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps).
