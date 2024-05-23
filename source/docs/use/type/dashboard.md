---
title: Dashboard
description: Lorem ipsum...
---

??? note "Aliases (old names)"

    As things move on, this type has also had some changes, it has prevously been known as:

    - Plugin
    - Lovelace

## Dashboard elements download location

Any dashboard element you download with HACS is stored in `www/community/` in your Home Assistant configuration directory.

## Special notes about downloaded dashboard elements

When a `.js` file is downloaded, a compressed `.gz` version of it will be created. This file (assuming it exists) will be served to the requester to save transfer size/time.

If you make local changes to a dashboard elements in the `.js` file, delete the `.gz` variant to have HACS serve up that one.

At the bottom of every page for plugins it will state how you should add it to your Lovelace configuration.


### Custom view (/hacsfiles)

HACS has a custom view/path/endpoint for serving up dashboard elements `/hacsfiles/`, this works mostly the same way as `/local` but has some extra features.

- The `/hacsfiles` endpoint does not cache anything; it will instruct your browser to fetch a new version on each load.
- The `/hacsfiles` endpoint will try to serve a .gz variant of the element, this will make the element smaller and the transfer will be faster.

??? example ":material-glasses: Nerd mode"

    - Every dashboard you have downloaded with HACS will have an "Open source" option on the hamburger menu. This is useful when troubleshooting; if you can see a code wall (the underlying `.js` file) everything is OK, but if you get a 404 try downloading it again.
    - `.gz` example: CCH (Compact Custom Header) is a fairly popular element for Lovelace. When you use `/local` you will transfer the `.js` file which is 101kB, but if you use HACS and reference the dashboard with `/hacsfiles`, it will serve the 20kB `.gz` version automagically (sizes accurate for version 1.4.7 of CCH).
    - Your dashboard exists in `www/community/dashboard/dashboard.js` you can use both `/local/community/dashboard/dashboard.js` and `/hacsfiles/dashboard/dashboard.js` to reference it, but only the `hacsfiles` version will have the extra features that HACS offers. 
