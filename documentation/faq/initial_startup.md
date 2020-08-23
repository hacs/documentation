---
id: initial_startup
title: "Initial startup"
description: "Initial startup"
---
HACS does not ship with any knowledge about the repositories it is supposed to show.

Since there is no central "HACS server", every installation of HACS fetches this information from GitHub, it has to get the information about all [default repositories](/docs/default_repositories)

To get the information that is needed to show a representation of the repository in HACS, HACS uses the [GitHub API](https://docs.github.com/en/rest), this API is [ratelimited](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) and when you hit that ratelimit HACS will pause any communitation to the GitHub API untill the ratelimit reset (can take up to one hour).

:::info
For new installation of HACS with the current amout of default repositories you will hit that ratelimit on the initial startup after installing HACS.
Because of this HACS will be in a "Starting up" state untill it's done fetching the information for all [default repositories](/docs/default_repositories)

Which in return will cause the initial startup of HACS to take over 1 hour to finish.
:::