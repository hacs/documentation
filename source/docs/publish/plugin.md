---
title: Plugin (Dashboard)
---

!!! note "Naming conflict"

    In the frontend of HACS this type is called "Dashboard", but it is still referred to as "plugin" in the backend.

A good template to use as a reference is [boilerplate-card](https://github.com/custom-cards/boilerplate-card)

## Requirements

For a plugin repository to be valid, these are the requirements:

### Repository structure

- There are `.js` files under `ROOT_OF_THE_REPO/dist/` or directly in the root of the repository.
- One of the `.js` files has the same name as the repository.
  - With every rule, there is an exception, if the repository's name starts with `"lovelace-"`, there can be a `.js` file in the repository matching the repository name with `"lovelace-"` striped from the name, for example:

#### Example

```yml
Repository name: "lovelace-awesome-card"
File name of one of the files: "awesome-card.js"
```

When searching for accepted files HACS will look in this order:

- The `dist`directory.
- On the latest release.
- The root of the repository.

All `.js` files it finds in the first location it finds one that matches the name will be downloaded.

If your plugin requires files that are not `js` files, place all files (including the card file) in the `dist` directory.

### GitHub releases (optional)

#### If there are releases

When downloading/upgrading it will scan the content in the latest release.

If there are multiple releases in the repository the user has some options to download a specific version.
The choices will be the last 5 releases and the default branch.

#### If there are no releases

It will scan files in the branch marked as default.
