---
id: start
title: General
description: "General"
---

For your repository to be added there are several criteria that need to be met.

- [General requirements](#general-requirements)
- [Integration requirements](integration.md#requirements) for integrations.
- [Plugin requirements](plugin.md#requirements) for plugins.
- [AppDaemon requirements](appdaemon.md#requirements) for AppDaemon apps.
- [Python_scripts requirements](python_script.md#requirements) for python scripts.
- [Theme requirements](theme.md#requirements) for themes.

## General requirements

Only public repositories on GitHub will work with HACS.

### Description

Your repository on GitHub needs to have a description that in a few words describes the purpose of the repository. *This description is used in HACS.*

### Topics

Your repository on GitHub needs to have [topics](https://docs.github.com/en/github/administering-a-repository/classifying-your-repository-with-topics). *Topics are not displayed in HACS, but they can be used for searchability in the HACS store.*

### README

Your repository needs to have a [readme](https://github.com/matiassingers/awesome-readme) with information about how to use it. *This is not used in HACS, unless you have defined the key `render_readme` in `hacs.json` below.*

### info&#46;md

If you want to add a richer experience for your users you can add an `info.md` file to the root of your repository, this file will be rendered under the repository description. It does not support the full styling options from GitHub, so use with care. *This is optional, if you do not have this file you need to set the key [`render_readme`](#hacsjson) in the `hacs.json` file to `true`.*

### hacs.json

This is a special manifest file that both defines the information that HACS shows in the UI and what files/paths that HACS should use. *This file must be located in the root of your repository.*

The following keys are supported:

Key | Type | Required | Description
-- | :-: | :-: | --
`name` | string | Yes| The display name that will be used in the HACS UI.
`content_in_root` | bool | No | Indicates whether the content is in the root of the repository as opposed to in a subdirectory.
`zip_release` | bool | No | Indicates whether the content is in a zipped archive when releases are published on GitHub. If you use this you also need to add `filename`. **This is only supported for integrations.**
`filename` | string | No | Name of the file HACS should look for, only applies to single item categories (plugin, theme, python_scripts, zip_release).
`render_readme` | bool | No | Tells HACS to render the README.md file instead of info.md.
`hide_default_branch` | bool | No | Tells HACS to not offer downloading the default branch.
`country` | string | No | Two character country code in ISO 3166-1 alpha-2 format. [ISO 3166-1 alpha-2 on Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
`homeassistant` | string | No | The minimum required Home Assistant version.
`hacs` | string | No | The minimum required HACS version.
`persistent_directory` | string | No | A relative path (within the integration directory) that will be kept safe during upgrades. *Can only be used with integrations.*

:::tip

The [`AwesomeVersion` demo](https://ludeeus.github.io/awesomeversion) can validate and check version compares.
That is the same library that HACS and Home Assistant use when checking versions.

:::

**examples:**

```json title="hacs.json"
{
  "name": "My awesome thing",
  "content_in_root": true,
  "filename": "my_super_awesome_thing.js",
  "country": ["NO", "SE", "DK"]
}
```

```json title="hacs.json"
{
  "name": "My awesome thing",
  "country": "NO",
  "homeassistant": "0.99.9",
  "persistent_directory": "userfiles",
}
```

Allow Home Assistant beta versions by appending `b0`. Without `b0`, only official releases will be allowed.

```json title="hacs.json"
{
  "name": "My awesome thing",
  "country": "NO",
  "homeassistant": "2021.12.0b0",
  "persistent_directory": "userfiles",
}
```

### Versions

If the repository uses GitHub releases, the tagname from the latest release is used to set the remote version. *Just publishing tags is not enough, you need to publish releases.*

If the repository does not use tags, the 7 first characters of the last commit will be used.

## Want to add your repository to the store as a default?

[See here for how to add a custom repository.](/docs/publish/include)

## Badges

Tell your users that your repository can be tracked with HACS.

### Default repository

*If your repository is in the default store.*

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

```
[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
```

***

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)

```
[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
```

### Custom repository

*If your repository can be added as a custom repository.*

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)

```
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
```

***

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

```
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
```
