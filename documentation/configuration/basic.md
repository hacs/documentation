---
id: basic
title: Initial Configuration
---

_This page assume that you have already finished the [installation](/docs/installation/prerequisites)_

## In your Home Assistant UI go to "Configuration", then click "Integrations".

![image](/img/conf1.png)

## Clear your browser cache

Before HACS can show up in the list you need to clear your browser cache.

## Click the "+" button in the bottom right corner

![image](/img/conf2.png)

## Search for or scroll down to find "HACS (Home Assistant Community Store)" and select it.

![image](/img/conf3.png)

## Add your configuration

![image](/img/conf4.png)

- `GitHub Personal Access Token`: The token you got when you finished [_this guide_](/docs/configuration/pat)
- `Side panel title`: The name/title you want to display for HACS in the sidebar.
- `Side panel icon`: The icon you want to display for HACS in the sidebar.
- `Enable AppDaemon apps discovery & tracking`: Enables [AppDaemon](/docs/categories/appdaemon_apps)
- `Enable python_scripts discovery & tracking`: [DEPRECATED!] Enables [Python Scripts](/docs/categories/python_scripts)
- `Enable Themes discovery & tracking`: [DEPRECATED!] Enables [Themes](/docs/categories/themes)

## Click submit and wait for confirmation.

![image](/img/conf5.png)

_If something failed, you will be taken back to the [Add your configuration step](#add-your-configuration)_

## Changing the configuration

If you need to change the configuration, you first need to delete the integration from the integrations list, then you need to add it back again.