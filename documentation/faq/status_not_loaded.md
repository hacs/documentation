---
id: status_not_loaded
title: "Status: Not Loaded"
description: "What to do if the status of a Lovelace element is not loaded"
---

![not_loaded](/img/not_loaded_entry.png)

When you see this message you have one or more resources downloaded with HACS that are not properly loaded in Lovelace.

To find out what element it is, look for the repository with a "Not Loaded" header in the Frontend section of HACS.

![not_loaded](/img/not_loaded_section.png)

This will trigger if you are not using the expected URL, or if it's not included in the first place.

## Lovelace in storage mode (UI)

Something strange has happened, click on the card for it to get to the repository page and then click the 3 dots in the top right corner and select "Redownload".

## Lovelace in storage mode (YAML)

Add the correct URL to the `resource` key under your `lovelace` configuration entry.
To find the URL click on the card for it to get to the repository page and then click the 3 dots in the top right corner and select "Redownload".

:::tip
[For information about the base of URL have a look here.](/docs/categories/plugins#special-notes-about-downloaded-lovelace-plugins)
:::
