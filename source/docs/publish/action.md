---
id: action
title: GitHub Action
description: "Use GitHub Actions to validate your repository with HACS"
---

You can use GitHub actions to validate your repository with HACS.
This will make sure that your repository can be validated in HACS after changes to your repository or HACS itself.

This action uses the same code as HACS to validate a repository.

The action has 3 run types:

- For the [hacs/default repo](https://github.com/hacs/default) it is used to validate new default repositories.
  - If you use releases the latest release will be checked, if not the default branch will be checked.
- If you have it set up for PRs in your repository, it will run against the fork/branch that made the PR.
- If you have it set up for pushes, it will run against the branch you push to.

The action itself lives [here](https://github.com/hacs/action) and you are free to inspect the code and/or make a PR to add changes.

## Action inputs

| Input      | Description                                                                             |
| ---------- | --------------------------------------------------------------------------------------- |
| `ignore`   | A space separated list of ignored checks                                                |
| `category` | The type of repository (integration, plugin, template, theme, appdaemon, python_script) |

## Ignorable checks

All these checks can be disabled with `with.ignore`. Use a string, and if you ignore multiple ones, separate them with spaces.

| Check         | More info                                                 | Description                                      |
| ------------- | --------------------------------------------------------- | ------------------------------------------------ |
| `archived`    | [More info](/docs/publish/include.md#check-archived)      | Checks if the repository is archived             |
| `brands`      | [More info](/docs/publish/include.md#check-brands)        | Checks if the domain is added to the brands repo |
| `description` | [More info](/docs/publish/include.md#check-repository)    | Checks if the repository has a description       |
| `hacsjson`    | [More info](/docs/publish/include.md#check-hacs-manifest) | Checks that hacs.json exists                     |
| `images`      | [More info](/docs/publish/include.md#check-images)        | Checks that the info file has images             |
| `information` | [More info](/docs/publish/include.md#check-repository)    | Checks that the repo has an information file     |
| `issues`      | [More info](/docs/publish/include.md#check-repository)    | Checks that issues are enabled                   |
| `topics`      | [More info](/docs/publish/include.md#check-repository)    | Checks that the repository has topics            |

## Using a Specific Version

To use a specific version of this action instead of `main` set the value after `@` in the `uses` definition, like:

```yaml
uses: hacs/action@xx.xx.x
```

If you do this, please enable [dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates) to help you keep that up to date.

To use it, follow these steps:

1. Go to your repository on GitHub
1. Click on "Create new file"
1. For the filename, paste .github/workflows/validate.yaml
1. Paste the following contents:
1. Change the value of the `category` key, this needs to be one of: `appdaemon`, `integration`, `plugin`:material-information-outline:{ title="Plugin is the old name for dashboard but it is still used in the backend" }, `python_script`, `template`, `theme`

```yaml title=".github/workflows/validate.yml"
name: Validate

on:
  push:
  pull_request:
  schedule:
    - cron: "0 0 * * *"
  workflow_dispatch:

permissions: {}

jobs:
  validate-hacs:
    runs-on: "ubuntu-latest"
    steps:
      - name: HACS validation
        uses: "hacs/action@main"
        with:
          category: "CHANGE_ME!"
```

This will run on every PR and push and at midnight every day. And `workflow_dispatch` allows you to run the action on demand from the Actions tab.

!!! tip
If you maintain an integration, you can also validate your integration with [hassfest](https://developers.home-assistant.io/blog/2020/04/16/hassfest).
