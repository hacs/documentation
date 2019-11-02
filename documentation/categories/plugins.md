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

### Open plugin button

Every plugin you have installed with HACS will have a "Open pluign" button.
This is usefull to use while troubleshooting, if you can see a code wall everything is OK.

if you get a 404 try reinstalling it.