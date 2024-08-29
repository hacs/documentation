---
id: remove
title: Remove default repositories
description: "Remove default repositories"
---

Repositories can be removed from the default pool of repositories for any number of reasons, some examples:

- It has been abandoned
- It breaks Home Assistant
- It steals credentials
- It has been deleted or removed

!!! warning
    If you as a maintainer delete/remove the GitHub repository that is added to HACS as a default repository, all your default repositories will be removed from HACS and you will not be able to add any more in the future.

    So if you plan to do that, first create an issue to have it removed from HACS.



## Remove a repository

1. Open an issue in the [hacs/integration repository](https://github.com/hacs/integration/issues) using the [**Request for repository removal** issue template](https://github.com/hacs/integration/issues/new?assignees=ludeeus&labels=flag&projects=&template=removal.yml).
