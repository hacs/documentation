---
id: maintainer
title: Maintainer
description: ""
---

This page should contain:

- information about CI/bots/services.
- How releases are handled.
- How versions is handled.








## Critical repositories

This applies to repositories that fall into these categories:

- It's designed to steal your data (authentication tokens and similar).
- It's designed to harm your system and/or network.

HACS is prepared to handle those, and this is the flow of it:

1. The repository is marked as dangerous/have security issues, by someone opening an issue in https://github.com/hacs/default repository using the "Flag" issue template.
2. The issue is reviewed, if the repository is considered to be of a critical character:
    1. A PR is opened to add the repository to https://github.com/hacs/default/blob/master/critical
    2. That PR will have a description of why, and extra steps you need to take.
    3. When it's merged, HACS will know about it during the next scan (30min or Home Assistant restart.)
3. HACS receives an updated [critical file](https://github.com/hacs/default/blob/master/critical).

### If the repository is installed with HACS

1. The repository is uninstalled.
2. The repository is removed from HACS.
3. Home Assistant is restarted to make sure it's not loaded anymore.
4. When Home Assistant starts up, you will have a `critical` log entry, and a persistent notification telling you to open the HACS panel.
5. When you open the HACS UI, you will see this card:

![critical](/img/critical.png)

If you click the "More info about this incident" button you will be taken to the PR that added that to the [critical file](https://github.com/hacs/default/blob/master/critical).

If you click the "Acknowledge" button, you will not see that message anymore.

### If the repository is not installed with HACS

1. The repository is removed from HACS.

_That's it, since it was not installed, no further action from HACS is necessary_