---
id: remove
title: Remove default repositories
description: "Remove default repositories"
---

Repositories can be removed from the default pool of repositories for any number of reasons, some examples:

- It's abandoned
- It breaks Home Assistant
- It steals credentials
- It's deleted/removed

:::warning
If you as a maintainer delete/remove a repository that is added to HACS as a default repository, all your default repositories will be removed from HACS and you will not be able to add any more in the future.

So if you plan to do that, first create a PR to have it removed from HACS.
:::



## Remove a repository

1. Fork and clone https://github.com/hacs/default
1. Create a new branch in your fork (eksamle: "remove/some/repo")
1. Run `make remove`
1. Commit the changes and push the new branch to your fork
1. Create a PR on https://github.com/hacs/default to have your changes merged.