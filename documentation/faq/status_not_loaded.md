---
id: status_not_loaded
title: "Status: Not Loaded"
description: "What to do if the status of a Lovelace element is not loaded"
---

![not_loaded](/img/not_loaded_entry.png)

When you see this message you have one or more resources installed with HACS that are not properly loaded in Lovelace.

To find out what element it is, look for the repository with a "Not Loaded" header in the Frontend section of HACS.

![not_loaded](/img/not_loaded_section.png)

This will trigger if you are not using the expected URL, or if it's not included in the first place.

## Lovelace in storage more (UI)

Something strange has happened, click the 3 dots in the card for the repository and select "Reinstall".

## Lovelace in storage more (YAML)

Add the correct URL to the `resource` key under your `lovelace` configuration entry.
To find the URL click the 3 dots in the card for the repository and select "Reinstall".

:::tip
[For information about the base of URL have a look here.](/docs/categories/plugins#special-notes-about-downloaded-lovelace-plugins)
:::
