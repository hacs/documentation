---
id: include
title: Include default repositories
description: "Include default repositories"
---

As a developer you can now add your repository to be included in as a default repository in the store.

Only the owner of the repository or a major contributor to it can submit a PR to have it included as a default.

Custom integrations that exist to alpha/beta test core integrations will not be accepted, you can still use it as a [custom repository](/docs/faq/custom_repositories)

Custom integrations that override core integrations will not be accepted, you can still use it as a [custom repository](/docs/faq/custom_repositories)

## Before submitting

Add both these actions to your own repository and make sure they pass:

- https://github.com/home-assistant/actions#hassfest (only for integrations)
- https://github.com/hacs/action

When all of this is covered, you can add it to repository category files in https://github.com/hacs/default

:::caution
_NB!: The list is case sensitive._
:::

When a PR for this is merged, it will show up in HACS after the first scheduled scan.

## CI Checks

When submitting a repository for the default repository a suite of CI checks will be run to ensure that the repository follows the requirements.
All checks needs to pass for the repository to be included (unless something else are agreed on).


### Check Brands

_Only applies to integrations._

This checks that the repository are added to https://github.com/home-assistant/brands

### Check Manifest

_Only applies to integrations._

[See Integration](integration.md#manifestjson)

For more information about the integration manifest see here https://developers.home-assistant.io/docs/creating_integration_manifest

### Check HACS

This runs the same validation that HACS itself uses.

### Check HACS Manifest

This checks that the hacs.json file at least contains the following:

- `name`

https://hacs.xyz/docs/publish/start#hacsjson

### Check Info

This checks that there is an info.md (or readme.md if configured) file with content in the repository.

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

### Lint [jq]

This make sure that the files still are valid JSON.

### Lint [sorted]

This make sure that the files still are sorted correctly.
