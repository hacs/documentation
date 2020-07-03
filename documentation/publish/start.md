---
id: start
title: General
description: "General"
---

For your repository to be added there are a few criteria that need to be met.

- [General requirements](#general-requirements)
- [Integration requirements](integration) for integrations.
- [Plugin requirements](plugin) for plugins.
- [AppDaemon requirements](appdaemon) for AppDaemon apps.
- [Python_scripts requirements](python_script) for python scripts.
- [Theme requirements](theme) for themes.

## General requirements

### Description

Your repository on GitHub needs to have a description that in a few words describes the purpose of the repository. *This description is used in HACS.*

### Topics

Your repository on GitHub needs to have [topics](https://docs.github.com/en/github/administering-a-repository/classifying-your-repository-with-topics). *Topics are not displayed in HACS, but they can be used for searchability in the HACS store.*

### README

Your repository needs to have a [readme](https://github.com/matiassingers/awesome-readme) with information about how to use it. *This is not used in HACS, unless you have defined the key `render_readme` in `hacs.json` below.*

### info&#46;md

If you want to add a richer experience for your users you can add an `info.md` file to the root of your repository, this file will be rendered under the repository description. It does not support the full styling options from GitHub, so use with care. *This is optional, if you do not have this file you need to set the key [`render_readme`](#hacsjson) in the `hacs.json` file to `true`.*

[See the Templates section on how you can make this awesome](#templates)


### hacs.json

This is a special manifest file that both defines the information that HACS shows in the UI and what files/paths that HACS should use. *This file must be located in the root of your repository.*

The following keys are supported:

Key | Type | Required | Description
-- | :-: | :-: | --
`name` | string | Yes| The display name that will be used in the HACS UI.
`content_in_root` | bool | No | Indicates whether the content is in the root of the repository as opposed to in a sub folder.
`zip_release` | bool | No | Indicates whether the content is in a zipped archive when releases are published on GitHub. If you use this you also need to add `filename`.
`filename` | string | No | Name of the file HACS should look for, only applies to single item categories (plugin, theme, python_scripts, zip_release).
`render_readme` | bool | No | Tells HACS to render the README.md file instead of info.md.
`domains` | string | No | A list of domains.
`country` | string | No | Two character country code in ISO 3166-1 alpha-2 format. [ISO 3166-1 alpha-2 on Wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
`homeassistant` | string | No | The minimum required Home Assistant version.
`persistent_directory` | string | No | A relative path (within the integration folder) that will be kept safe during upgrades. *Can only be used with integrations.*
`iot_class` | string | Only for<br>integrations | The type of communication with the service/device. [Types used in Home Assistant](https://www.home-assistant.io/blog/2016/02/12/classifying-the-internet-of-things)

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
  "domains": ["media_player", "sensor"],
  "homeassistant": "0.99.9",
  "persistent_directory": "userfiles",
  "iot_class": ["Assumed State", "Local Push"]
}
```

### Versions

If the repository uses GitHub releases, the tagname from the latest release is used to set the remote version. *Just publishing tags is not enough, you need to publish releases.*

If the repository does not use tags, the 7 first characters of the last commit will be used.

## Templates

You can use Jinja2 templates to control what and how the info is displayed.
In addition to the default templates of Jinja these are added:

Template value | Description
-- | --
installed | True / False if it is installed.
pending_update | True / False if a update is pending.
prerelease | True / False if it's a pre release.
selected_tag | The selected version.
version_available | The latest available version.
version_installed | The installed version

### Examples

### Prerelease

```yaml title="info.md"
{% if prerelease %}
### NB!: This is a Beta version!
{% endif %}
```

![beta](/img/beta.png)

### [Here Travel Time](https://github.com/eifinger/here_travel_time/blob/master/info.md)

```yaml title="info.md"
{% if installed %}
## Changes as compared to your installed version:

### Breaking Changes

### Changes

### Features

{% if version_installed.replace("v", "").replace(".","") | int < 141  %}
- Added `mode: bicycle`
- Added `mode: publicTransportTimeTable` - Please look [here](https://developer.here.com/documentation/routing/topics/public-transport-routing.html) for differences between the two public modes.
{% endif %}
{% if version_installed.replace("v", "").replace(".","") | int < 142  %}
- Release notes are shown in HACS depending on your installed version
{% endif %}

### Bugfixes

{% if version_installed.replace("v", "").replace(".","") | int < 143  %}
- Fix for `mode: publicTransportTimeTable` returning `No timetable route found`
{% endif %}
---
{% endif %}
```

![here](/img/info_jinja_here.png)

## Some examples of `info.md` files

### [Custom Header](https://github.com/maykar/custom-header/blob/1.1.7/info.md)

  ![cch](/img/info_cch.PNG)

### [Lovelace Swipe Navigation](https://github.com/maykar/lovelace-swipe-navigation/blob/1.2.0/info.md)

![swipe](/img/info_swipe.PNG)

### [HomeAssistant-Atrea](https://github.com/JurajNyiri/HomeAssistant-Atrea/blob/2.1/info.md)

![Atrea](/img/info_atrea.PNG)


## Want to add your repository to the store as a default?

[See here for how to add a custom repository.](include)

## Badges

Tell your users that your repository can be tracked with HACS.

### Default repository

_If your repository is in the default store._

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

```
[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)
```

***

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)

```
[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
```

### Custom repository

_If your repository can be added as a custom repository._

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

```
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)
```

***

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)


```
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
```
