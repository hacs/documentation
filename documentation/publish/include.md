---
id: include
title: Include default repositories
description: "Include default repositories"
---

As a developer you can now add your repository to be included in as a default repository in the store.

Only the owner of the repository or a major contributor to it can submit a PR to have it included as a default.

When all of this is covered, you can add it to repository category files in https://github.com/hacs/default

:::caution
_NB!: The list is case sensitive._
:::

When a PR for this is merged, it will show up in HACS after the first scheduled scan (every 800min).

## CI Checks

When submitting a repository for the default repository a suite of CI checks will be run to ensure that the repository follows the requirements.
All checks needs to pass for the repository to be included (unless something else are agreed on).

Most of the checks will not run until you have completed all the tasks in the PR template.

### Re run checks

If you need to rerun the checks add a comment with this as the content:

```txt
/recheck
```

### Check Brands

_Only applies to integrations._

This checks that the repository are added to https://github.com/home-assistant/brands

### Check Manifest

_Only applies to integrations._

This checks that the manifest.json file at least contains the following:

- `issue_tracker`
- `domain`
- `documentation`
- `codeowners`

For more information about the integration manifest see here https://developers.home-assistant.io/docs/creating_integration_manifest

### Check hassfest

_Only applies to integrations._

This runs Home Assistant's `hassfest` against the integration.
https://developers.home-assistant.io/blog/2020/04/16/hassfest

### Check HACS

This runs the same validation that HACS itself uses.

### Check HACS Manifest

This checks that the hacs.json file at least contains the following:

- `name`

https://hacs.xyz/docs/publish/start#hacsjson

### Check Info

This checks that there is an info.md (or readme.md if configured) file with content in the repository.

### Check Fork

_This check can fail._

This checks if the repository is a fork when there are good reasons for the fork.

### Check Archived

This checks if the repository is archived.

### Check Owner

_This check can fail._

This checks if the submitter is the owner of repository, this can fail if the repository belong to an org. or that the submitter is a major contributor to the repository.

### Check Images

_Only applies to plugins and themes._

This checks that there are images in the defined information file that HACS render.

### Check Repository

This checks general things about the repository like:

- It has a description
- Issues are enabled
- It has topics defined

### Check Wheels

_Only applies to integrations._

This checks that the repository are added to https://github.com/home-assistant/wheels-custom-integrations if it has python requirements defined in the manifest.json file.

### Lint [jq]

This make sure that the files still are valid JSON.

### Lint [sorted]

This make sure that the files still are sorted correctly.
