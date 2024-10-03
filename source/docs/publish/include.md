---
id: include
title: Include default repositories
description: 'Include default repositories'
---

As a developer, you can now add your repository to be included as a default repository in the store.

Only the owner of the repository or a major contributor to it can submit a PR to have it included as a default.

Custom integrations that exist to alpha/beta test core integrations will not be accepted, you can still use it as a [custom repository](/docs/faq/custom_repositories.md)

Custom integrations that override core integrations will not be accepted, you can still use it as a [custom repository](/docs/faq/custom_repositories.md)

## Before submitting

Add both these actions to your own repository and make sure they pass:

- https://github.com/home-assistant/actions#hassfest (only for integrations)
- https://github.com/hacs/action

When all of this is covered, you can add it to repository type files at [https://github.com/hacs/default](https://github.com/hacs/default)

In your fork of `hacs/default`, create a new branch for your changes from the `master` branch. Do **not** use the `master` branch directly for your changes.

Your PR needs to be editable, so you can not submit it from an organization.

!!! danger "Read this!"
    _NB!: The list is case sensitive._


When a PR for this is merged, it will show up in HACS after the first scheduled scan.

## CI Checks

When submitting a repository for the default repository a suite of CI checks will be run to ensure that the repository follows the requirements.
All checks need to pass for the repository to be included (unless something else is agreed on).

### Check Brands

_Only applies to integrations._

This checks that the repository is added to https://github.com/home-assistant/brands

### Check Manifest

_Only applies to integrations._

[See Integration](integration.md#manifestjson)

For more information about the integration manifest see here https://developers.home-assistant.io/creating_integration_manifest

### Check HACS

This runs the same validation that HACS itself uses.

### Check HACS Manifest

This checks that the hacs.json file at least contains the following:

- `name`

https://hacs.xyz/docs/publish/start#hacsjson

### Check Archived

This checks if the repository is archived.

### Check Owner

This checks if the submitter is one of the following:
- The owner of the repository
- A major contributor to the repository

### Check Images

_Only applies to plugins and themes._

This checks that there are images in the defined information file that HACS render.

### Check Repository

This checks general things about the repository like:

- It has a description
- Issues are enabled
- It has topics defined

### Lint [jq]

This makes sure that the files still are valid JSON.

### Lint [sorted]

This makes sure that the files still are sorted correctly.

## After Submitting

HACS contains a significant amount of repos, with new repositories added almost daily. Check the [backlog](https://github.com/hacs/default/pulls?q=is%3Apr+is%3Aopen+draft%3Afalse+sort%3Acreated-asc) before querying your PR.
