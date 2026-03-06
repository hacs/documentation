---
id: integration
title: Integrations
description: "Integrations"
---

## Requirements

For an integration repository to be valid, it must meet the requirements below.

### Repository structure

- There must only be one integration per repository, i.e. there can only be one subdirectory to `ROOT_OF_THE_REPO/custom_components/`. *If there are more than one, only the first one will be managed.*
- All files required for the integration to run must be located inside the directory `ROOT_OF_THE_REPO/custom_components/INTEGRATION_NAME/`.


#### OK example:

```
custom_components/awesome/__init__.py
custom_components/awesome/sensor.py
custom_components/awesome/manifest.json
README.md
hacs.json
```

#### Not OK example (1):

```
awesome/__init__.py
awesome/sensor.py
awesome/manifest.json
awesome/hacs.json
README.md
```

#### Not OK example (2):

```
__init__.py
sensor.py
manifest.json
README.md
hacs.json
```

_if you have `content_in_root` set to `true` in [`hacs.json`](start.md#hacsjson) this is valid._


### manifest.json

In your integration directory you must have a `manifest.json` file, which must at least define these keys:

- `domain`
- `documentation`
- `issue_tracker`
- `codeowners`
- `name`
- `version`

Check the official Home Assistant [documentation](https://developers.home-assistant.io/docs/creating_integration_manifest) for the values of those keys.


### Brand assets

You must provide brand assets for your integration. You can do this by adding a [`brand` directory in your repository](https://developers.home-assistant.io/docs/creating_integration_file_structure#brand-images---brand) with at least an `icon.png` file.


### GitHub releases (optional)

It is preferred but not required to publish releases in your repository.

*If you publish releases in your repository, HACS will present the user with a nice selection view of the 5 latest releases together with the default branch when they are downloading or upgrading your integration.*

*If you don't publish releases in your repository, HACS will use the files in the branch marked as default.*


### References and examples

A good template to use as a reference is [blueprint](https://github.com/custom-components/blueprint). You can generate a template similar to blueprint and customize it to your context by using [cookiecutter-homeassistant-custom-component](https://github.com/oncleben31/cookiecutter-homeassistant-custom-component).
