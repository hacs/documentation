---
title: Dashboard
---

??? note "Aliases (old names)"

    As things move on, this type has also had some changes, it has previously been known as:

    - Plugin
    - Lovelace

The term "Dashboard elements" in HACS refers to all types of dashboard elements, such as [dashboards](https://www.home-assistant.io/dashboards/dashboards/), [views](https://www.home-assistant.io/dashboards/views/), [cards](https://www.home-assistant.io/dashboards/cards/), and more. It includes any element that you can add under <!-- hacs:my lovelace_resources title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.dashboards.main')}}** > three dots menu > **{{coreui('ui.panel.config.lovelace.resources.caption')}}**" -->


## Dashboard elements download location

Any dashboard element you download with HACS is stored in your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory), under `www/community/`.

## About downloaded dashboard elements

Typically, a dashboard element is a `.js` file. When a `.js` file is downloaded, HACS creates a compressed `.gz` version of it. This file is then served to the requester (instead of the .js file) to save transfer size and time.

If you made local changes to a dashboard element in the `.js` file, delete the `.gz` variant. The the `.gz` variant does not contain your changes.

For instructions on how to add a dashboard element to your dashboard configuration, refer to the instructions at the bottom of the page of that dashboard element.

### Custom features for files stored under (/hacsfiles)

HACS has a custom path for serving up dashboard elements `/hacsfiles/`, also referred to as *`/hacsfiles` endpoint*. This works mostly the same way as `/local` but has some extra features.

- The `/hacsfiles` endpoint does not cache anything; it will instruct your browser to fetch a new version on each load.
- The `/hacsfiles` endpoint will try to serve a `.gz` variant of the element, making the element smaller and the transfer faster.

??? nerd-mode

    - Every dashboard you have downloaded with HACS has an **Open source** option on the hamburger menu. This is useful when troubleshooting; if you can see a code wall (the underlying `.js` file) everything is OK, but if you get a 404, try downloading it again.
    - `.gz` example: CCH (Compact Custom Header) is a fairly popular element for Lovelace. When you use `/local`, you will transfer the `.js` file, which is 101&nbsp;kB. However, if you use HACS and reference the dashboard with `/hacsfiles`, it will serve the 20&nbsp;kB `.gz` version automatically (sizes accurate for version 1.4.7 of CCH).
    - Your dashboard exists in `www/community/dashboard/dashboard.js`. You can use both `/local/community/dashboard/dashboard.js` and `/hacsfiles/dashboard/dashboard.js` to reference it, but only the `/hacsfiles` version will have the extra features that HACS offers.
