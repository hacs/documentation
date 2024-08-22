---
title: Using the HACS dashboard
description: 'Steps on getting started with the HACS dashboard'
---

This section shows you how to use the HACS dashboard.

## Browsing repositories

1. To open HACS, in the Home Assistant sidebar, select the HACS icon.
    - Each line in the data table represents a community repository that can be downloaded via HACS.
    ![nav_overview](/assets/images/screenshots/overview/base/light.png#only-light)
    ![nav_overview](/assets/images/screenshots/overview/base/dark.png#only-dark)
2. To browse the repositories, use the [search](#search-repositories) and [filter](#filter-repositories) functions.
    - The HACS dashboard uses the same [table features](https://www.home-assistant.io/docs/organizing/filtering) used elsewhere in Home Assistant.
    - By default, the dashboard shows the repositories you have downloaded with HACS on top of the list.
3. To view the repository documentation, the select the 3 dots :material-dots-vertical: menu, then select **Show details**.
    - To view the source code, select **Repository**.
4. Once you found the custom element you want to use in Home Assistant, [download the repository](#downloading-a-repository).

## {{coreui("ui.components.data-table.search")}} repositories

You can search for both downloaded and available repositories in HACS.

1. Enter your search term in the search field.
2. The search is not limited to the repository name or description. You can search for data from different categories, including:

    - Author
    - Type
    - Description
    - Name
    - Status
    - Topics

    ![nav_overview](/assets/images/screenshots/overview/search/light.png#only-light)
    ![nav_overview](/assets/images/screenshots/overview/search/dark.png#only-dark)

## Filter repositories

1. To define filters, next to the searchbar, select the (:material-filter-variant:) **Filters** button.

    ![nav_overview](/assets/images/screenshots/overview/filter/light.png#only-light)
    ![nav_overview](/assets/images/screenshots/overview/filter/dark.png#only-dark)
2. There are currently 2 filter types, **Type** and **Status**:

    - **Type**: filters for a specific [type](/docs/use/repositories/type/index.md) of custom element: integration, dashboard, theme, template, AppDaemon app, or Python Script.
    - **Status**:
        - **Pending restart**: The repository has been downloaded. But for the software version to become active, you need to restart Home Assistant.
        - **New**: HACS found repositories it has not seen before. If you select **Dismiss new**, these will be shown under **Available for download**.
        - **Downloaded**: The repository has been downloaded. You can use its functionality.
        - **Available for download**: This is a repository that is not new to HACS and that you can download.

        ![nav_overview](/assets/images/screenshots/overview/filter/status/light.png#only-light)
        ![nav_overview](/assets/images/screenshots/overview/filter/status/dark.png#only-dark)

3. **Troubleshooting**: Don't see the status or type in your table?
    - Make sure the [columns are not hidden](https://www.home-assistant.io/docs/organizing/tables#customizing-columns)

## Downloading a repository

1. In Home Assistant, open HACS and find the repository of interest.
2. Select the repository and view it's overview page.
    - The main section of this view renders the README file of the repository.
    - The **badges** on top provide some key information, such as author, [GitHub](https://github.com) stars, and number of open issues and pull requests.
    - This page should also contain the documentation on how to use it.
    - The content depends on the repository [type](/docs/use/repositories/type/index.md) and on the information the author provides.

    ![Repository dashboard](/assets/images/screenshots/repository/overview/light.png#only-light)
    ![Repository dashboard](/assets/images/screenshots/repository/overview/dark.png#only-dark)

3. To download the repository, in the bottom-right corner, select the **Download** button.
    - Don't see a download button? The button doesn't show if the repository has already been downloaded.

## Removing a repository

1. In Home Assistant, open HACS and find the repository you want to remove.
2. On the repository entry, select the 3 dots :material-dots-vertical: menu, then select **Remove**.
   -  This removes the repository that was stored in your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory).
3. Removing the repository does not remove the related data. Check the documentation of the repository for instructions on how to remove it.

## Reporting an issue with a repository

If you're experiencing an issue with a particular custom element, always report the issue to the repository owner, not to HACS or Home Assistant.

1. On the repository entry, select the 3 dots :material-dots-vertical: menu, then select **Open issue**.
    - This opens the issue tracker of the GitHub repository for that custom element.
2. To open an issue, in their repository, select **New issue**.
3. Add a detailed description of your issue and submit.

## Using the HACS Menu

At the top-right corner you will find the 3 dots (:material-dots-vertical:) menu.

![nav_overview](/assets/images/screenshots/overview/menu/light.png#only-light)
![nav_overview](/assets/images/screenshots/overview/menu/dark.png#only-dark)

Here you can:

- Open the documentation of HACS itself
- Open the [GitHub](https://github.com) page of HACS itself.
- Open an issue for HACS itself.
- Add [custom repositories](/docs/faq/custom_repositories.md).
- Dismiss all new repositories (if you have any).
- Show information about your HACS installation.

## Dismissing new repositories

Any addition to HACS that you have not yet seen will show the status **New**.
If you are sorting by status, they will show on top by default. If you want, you can dismiss these, so that they are no longer shown as **new**. This is similar to marking mails as *read* in your inbox.