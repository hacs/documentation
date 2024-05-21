---
id: repository_dashboard
title: Repository Dashboard
description: 'Representation of a repository inside HACS.'
sidebar_position: 2
---

Everything inside HACS are public [GitHub](https://github.com) repositories.

Each repository HACS tracks (downloaded or not) have a dedicated page inside HACS.

What you see on this page depends on what [category](/docs/categories/index.md) it is, and what information the author of it provides.

![repository_dashboard](/assets/images/repository_dashboard.png)
The above image is an example representation of a integration ([Spook 👻 Not your homie](https://github.com/frenck/spook)) that has not been downloaded by HACS.

## Overview

The main section of this view renders the README file of the repository.

## Badges

Above the main content of the page is a row of badges.
Tese badges provides some key information about the repository, like the author(s), [GitHub](https://github.com) stars and open issues[^1].

## Options

At the top-right corner you will find the 3 dots menu (<svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>).

This can be used to quickly access the repository at [GitHub](https://github.com), and it's issue tracker.

Here you can also force a refresh of the data for the repository.

## Download

!!! note
    This will **only** show for repositories you have **not** downloaded with HACS.


In the bottom-right corner you will find the "Download" button, you click on this to open the download dialog to confirm that you want to download this repository.

[^1]: Open issues include both Issues and Pull request
