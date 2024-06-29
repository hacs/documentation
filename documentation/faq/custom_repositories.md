---
id: custom_repositories
title: Custom Repositories
description: "Custom repositories in HACS"
---

But there are a number of different reasons why a developer might not want to publish their repository to HACS, for these situations you can in many cases add it to HACS as a custom repository.

:::warning
Not all repositories will work in HACS, since HACS still needs the repository to have a known structure.
:::

If you want to try and add a custom repository to HACS do the following:

![custom_repositories_entry](/img/custom_repositories_entry.png)

1. On your homeassistant, navigate to the HACS page via the sidebar on the left.
1. Click on the 3 dots in the top right corner.
1. Select "Custom repositories"
1. Add the URL to the repository.
1. Select the correct category.
1. Click the "ADD" button.

![custom_repositories](/img/custom_repositories.png)


:::tip
The "Custom repositories" option might be hidden while background tasks is running to stop the user to break their instance. Wait a while or/and check HACS status. 
:::
