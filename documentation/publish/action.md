---
id: action
title: GitHub Action
description: "Use GitHub Actions to validate your repository with HACS"
---

You can use GitHub actions to validate your repository with HACS.
This will make sure that your repository can be validated in HACS after changes to your repository or HACS itself.

This action uses the exact same code as HACS to validate a repository.


The action have 3 run types:

- For the [hacs/default repo](https://github.com/hacs/default) it is used to validate new default repositories.
- If you have it set up for PR's in your repository, it will run against the fork/branch that made the PR.
- If you have it set up for pushes, if will run against the branch you push to.

The action itself lives [here](https://github.com/hacs/integration/tree/master/action) and you are free to inspect the code and/or make a PR to add changes.

To install it, follow these steps:

1. Go to your repository on GitHub
1. Click on "Create new file"
1. For filename, paste .github/workflows/validate.yaml
1. Paste the following contents:
1. Change the value of "CATEGORY" key, this needs to be one of: "appdaemon", "integration", "netdaemon", "plugin", "python_script", "theme"

```yaml title=".github/workflows/validate.yml"
name: Validate

on:
  push:
  pull_request:
  schedule:
    - cron: "0 0 * * *"

jobs:
  validate:
    runs-on: "ubuntu-latest"
    steps:
      - uses: "actions/checkout@v2"
      - name: HACS validation
        uses: "hacs/integration/action@master"
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          CATEGORY: "CHANGE_ME!"
```

This will run on every PR and push, and at midnight every day.

:::tip
If you maintain an integration, you can also validate your integration with [hassfest](https://developers.home-assistant.io/blog/2020/04/16/hassfest).
:::
