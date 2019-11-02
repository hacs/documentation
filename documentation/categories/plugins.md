---
id: plugins
title: Lovelace Plugins
---

The [Lovelace UI](https://www.home-assistant.io/lovelace/) is a customizable interface. With additional community plugins you can extend the default Lovelace experience.  

## Lovelace Plugin download location

All the Lovelace Plugins you download with HACS is stored in `www/community/` in your Home Assistant configuration directory.


## Special notes about downloaded Lovelace Plugins

When a `.js` file is downloaded, a compressed `.gz` version of if will be created, this file (if it exist) will be served to the requester to save transfer size/time.

If you make local changes to a plugin in the `.js` file, delete the `.gz` variant to have HACS serve up that one.

At the bottom of every page for plugins it will state how you should add it to your Lovelace configuration.


### Custom view (/community_plugin)

HACS have a custom view/path/endpoint for serving up Lovelace elements (plugins) `/community_plugin/`, this works mostly the same way as `/local` but have some extra features.

- The `/community_plugin` endpoint does not have cache issues, it will instruct your browser to fetch a new version on each load.
- The `/community_plugin` endpoint will try to serve a .gz variant of the element, this will make the element smaller and the transfer will be faster.

Examples:

Your plugin exist in `www/community/plugin/plugin.js` you can use both `/local/community/plugin/plugin.js` and `/community_plugin/plugin/plugin.js` to reference it, but only the `community_plugin` version will have the extra features that HACS offers.

`.gz` example, CCH (Compact Custom Header) is a fairly popular element for Lovelace, when you use `/local` you will transfer the `.js` file with it's 101kB, if you use HACS and `/community_plugin` for it, it will give you the `.gz` version atuomagically and that is only at 20kB (sizes was for version 1.4.7 of CCH).

### Open plugin button

Every plugin you have installed with HACS will have a "Open pluign" button.
This is useful to use while troubleshooting, if you can see a code wall everything is OK.

if you get a 404 try reinstalling it.