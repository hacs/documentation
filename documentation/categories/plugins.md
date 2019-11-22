---
id: plugins
title: Lovelace Plugins
---

The [Lovelace UI](https://www.home-assistant.io/lovelace/) is a customizable interface. With additional community plugins you can extend the default Lovelace experience.  

## Lovelace Plugin download location

Any Lovelace Plugin you download with HACS is stored in `www/community/` in your Home Assistant configuration directory.


## Special notes about downloaded Lovelace Plugins

When a `.js` file is downloaded, a compressed `.gz` version of it will be created. This file (assuming it exists) will be served to the requester to save transfer size/time.

If you make local changes to a plugin in the `.js` file, delete the `.gz` variant to have HACS serve up that one.

At the bottom of every page for plugins it will state how you should add it to your Lovelace configuration.


### Custom view (/community_plugin)

HACS has a custom view/path/endpoint for serving up Lovelace elements (plugins) `/community_plugin/`, this works mostly the same way as `/local` but has some extra features.

- The `/community_plugin` endpoint does not cache anything; it will instruct your browser to fetch a new version on each load.
- The `/community_plugin` endpoint will try to serve a .gz variant of the element, this will make the element smaller and the transfer will be faster.

Examples:

Your plugin exists in `www/community/plugin/plugin.js` you can use both `/local/community/plugin/plugin.js` and `/community_plugin/plugin/plugin.js` to reference it, but only the `community_plugin` version will have the extra features that HACS offers.

`.gz` example: CCH (Compact Custom Header) is a fairly popular element for Lovelace. When you use `/local` you will transfer the `.js` file which is 101kB, but if you use HACS and reference the plugin with `/community_plugin`, it will serve the 20kB `.gz` version automagically (sizes accurate for version 1.4.7 of CCH).

### Open plugin button

Every plugin you have installed with HACS will have a "Open plugin" button.
This is useful when troubleshooting; if you can see a code wall (the underlying `.js` file) everything is OK, but if you get a 404 try reinstalling it.
