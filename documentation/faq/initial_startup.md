---
id: initial_startup
title: "Initial startup"
description: "Initial startup"
---
HACS does not ship with any knowledge about the repositories it is supposed to show.

Since there is no central "HACS server", every installation of HACS fetches this information from GitHub, it has to get the information about all [default repositories](/default_repositories)

To get the information that is needed to show a representation of the repository in HACS, HACS uses the [GitHub API](https://docs.github.com/en/rest), this API is [rate limited](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) and when you hit that rate limit, HACS will pause any communication to the GitHub API until the rate limit reset (can take up to one hour).

:::info
For a new installation of HACS, with the current amount of default repositories you will hit that rate limit on the initial startup after installing HACS.
Because of this, HACS will be in a "Starting up" state until it's done fetching the information for all [default repositories](/default_repositories)

Which in return will cause the initial startup of HACS to take over 1 hour to finish.
:::
