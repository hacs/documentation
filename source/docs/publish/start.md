---
id: start
title: General
description: 'General'
---

For your repository to be added, several criteria need to be met.

- [General requirements](#general-requirements)
- [Integration requirements](/docs/publish/integration.md) for integrations.
- [Plugin requirements](/docs/publish/plugin.md) for plugins.
- [AppDaemon requirements](/docs/publish/appdaemon.md) for AppDaemon apps.
- [Python_scripts requirements](/docs/publish/python_script.md) for python scripts.
- [Template requirements](/docs/publish/template.md) for custom templates.
- [Theme requirements](/docs/publish/theme.md) for themes.

## General requirements

Only public repositories on GitHub will work with HACS.

### Description

Your repository on GitHub needs to have a description that in a few words describes the purpose of the repository. _This description is used in HACS._

### Topics

Your repository on GitHub needs to have [topics](https://docs.github.com/en/github/administering-a-repository/classifying-your-repository-with-topics). _Topics are not displayed in HACS, but they can be used for searchability in the HACS store._

### README

Your repository needs to have a [readme](https://github.com/matiassingers/awesome-readme) with information about how to use it.

HACS supports multilingual README files. To provide documentation in multiple languages, use the naming pattern `README.{language_code}.md` (e.g., `README.de.md` for German, `README.fr.md` for French). HACS automatically displays the README matching the user's Home Assistant language setting, falling back to the default `README.md` if no language-specific version is available.

### hacs.json

This is a special manifest file that defines the information that HACS shows in the UI and what files/paths that HACS should use. _This file must be located in the root of your repository._

The following keys are supported:

| Key                    |  Type  | Required | Description                                                                                                                                                                               |
| ---------------------- | :----: | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                 | string |   Yes    | The display name that will be used in the HACS UI.                                                                                                                                        |
| `content_in_root`      |  bool  |    No    | Indicates whether the content is in the root of the repository as opposed to in a subdirectory.                                                                                           |
| `zip_release`          |  bool  |    No    | Indicates whether the content is in a zipped archive when releases are published on GitHub. If you use this you also need to add `filename`. **This is only supported for integrations.** | 
| `filename`             | string |    No    | Name of the file HACS should look for, only applies to single item types (plugin, theme, template, python_scripts, zip_release).                                                     |
| `hide_default_branch`  |  bool  |    No    | Tells HACS to not offer downloading the default branch.                                                                                                                                   |
| `country`              | string/list |    No    | Two character country code(s) in ISO 3166-1 alpha-2 format. It can be a single country code or a list of country codes. [ISO 3166-1 alpha-2 on Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) |
| `homeassistant`        | string |    No    | The minimum required Home Assistant version.                                                                                                                                              |
| `hacs`                 | string |    No    | The minimum required HACS version.                                                                                                                                                        |
| `persistent_directory` | string |    No    | A relative path (within the integration directory) that will be kept safe during upgrades. \_Can only be used with integrations.\*                                                        |
| `render_readme`        |  bool  |    No    | Indicates whether the README file should be used as the information file. If `false`, HACS will look for `info` or `info.md` files instead.                                                |
| `readme_languages`     | list   |    No    | List of supported language codes (e.g., `["de", "fr", "es"]`) for multilingual README files. Language codes must be 2-letter ISO 639-1 codes. |


!!! tip
    The [`AwesomeVersion` demo](https://awesomeversion.ludeeus.dev/) can validate and check version compares.
    That is the same library that HACS and Home Assistant use when checking versions.


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
  "persistent_directory": "userfiles"
}
```

Allow Home Assistant beta versions by appending `b0`. Without `b0`, only official releases will be allowed.

```json title="hacs.json"
{
  "name": "My awesome thing",
  "country": "NO",
  "homeassistant": "2021.12.0b0",
  "persistent_directory": "userfiles"
}
```

### Versions

If the repository uses GitHub releases, the tag name from the latest release is used to set the remote version. _Just publishing tags is not enough, you need to publish releases._

If the repository does not use tags, the 7 first characters of the last commit will be used.

## Want to add your repository to the store as a default?

[See here for how to add a custom repository.](/docs/publish/include.md)

## My links

Tell your users that your repository can be tracked with HACS by adding a [my-link](https://my.home-assistant.io) link to your documentation.

Generate a unique link for your repository here: https://my.home-assistant.io/create-link/?redirect=hacs_repository

