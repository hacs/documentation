---
id: theming
title: Theming
description: "Custom theme variables for HACS"
---

HACS will try to match your Home Assistant theme as much as possible. There are also several variables you can use in your `themes.yaml` file to theme HACS further:

| Variable  | Usage |
| ------------- | ------------- |
| `hacs-badge-color`  | Controls the background color on the "NEW" badges in the store.  |
| `hacs-status-installed`  | Controls the icon color for installed, up-to-date repositories  |
| `hacs-status-pending-restart`  | Controls the icon color for installed repositories that are awaiting a Home Assistant restart  |
| `hacs-status-pending-update`  | Controls the icon color for installed repositories that have an update available  |
| `hacs-status-not-loaded`  | Controls the icon color for repositories that is not loaded  |
| `link-text-color`  | Controls the color of hyperlinks  |

Here's a basic example of customizing one of these variables in `themes.yaml`:

`hacs-badge-color: "var(--primary-color)"`
