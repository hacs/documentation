---
id: netdaemon
title: NetDaemon Apps
description: "NetDaemon Apps"
---

A template to use as a reference is [netdaemon-app-template](https://github.com/net-daemon/netdaemon-app-template)

## Requirements

For a NetDaemon app repository to be valid these are the requirements:

### Repository structure

- There is only one app (one directory under `ROOT_OF_THE_REPO/apps/`) pr. repository (if you have more, only the first one will be managed.)
- The app (all the cs/yaml files for it) are located under `ROOT_OF_THE_REPO/apps/APP_NAME/`
- The app and all the cs/yaml files for it are located under `ROOT_OF_THE_REPO/apps/APP_NAME/`

#### OK example:

```text
apps/awesome/awesome.cs
info.md
README.md
```

#### Not OK example (1):

```text
awesome/awesome.cs
info.md
README.md
```

#### Not OK example (2):

```text
awesome.cs
info.md
README.md
```

### GitHub releases (optional)

#### If there are releases

When downloading/upgrading it will scan the content in the latest release.

If there are multiple releases in the repository the user have some options to download a specific version.
The choices will be the last 5 releases and the default branch.

#### If there are no releases

It will scan files in the branch marked as default.