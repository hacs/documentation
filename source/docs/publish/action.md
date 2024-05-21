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
  - If you use releases the latest release will be checked, if not the default branch will be checked.
- If you have it set up for PR's in your repository, it will run against the fork/branch that made the PR.
- If you have it set up for pushes, if will run against the branch you push to.

The action itself lives [here](https://github.com/hacs/action) and you are free to inspect the code and/or make a PR to add changes.

To use it, follow these steps:

1. Go to your repository on GitHub
1. Click on "Create new file"
1. For filename, paste .github/workflows/validate.yaml
1. Paste the following contents:
1. Change the value of `CATEGORY` key, this needs to be one of: `appdaemon`, `integration`, `netdaemon`, `plugin`, `python_script`, `theme`

```yaml title=".github/workflows/validate.yml"
name: Validate

on:
  push: 
  pull_request:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

jobs:
  validate-hacs:
    runs-on: "ubuntu-latest"
    steps:
      - uses: "actions/checkout@v3"
      - name: HACS validation
        uses: "hacs/action@main"
        with:
          category: "CHANGE_ME!"
```

This will run on every PR and push, and at midnight every day. And `workflow_dispatch` allows you to run the action on demand from the Actions tab.

!!! tip
    If you maintain an integration, you can also validate your integration with [hassfest](https://developers.home-assistant.io/blog/2020/04/16/hassfest).
