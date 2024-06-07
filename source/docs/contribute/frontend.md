---
title: Frontend
description: "Frontend development"
---

The repository for the frontend is hosted @ https://github.com/hacs/frontend

First spin up the [devcontainer](/docs/contribute/devcontainer.md)

When you have that, the following command:

```bash
script/develop
```

Once that is done you can attach this development frontend to a development integration instance by using the `-f` flag for the integration develop script.

```bash
scripts/develop -f <path to the development frontend directory>
```
