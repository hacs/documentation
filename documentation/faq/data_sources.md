---
id: data_sources
title: "Data sources"
description: "Data source HACS users for updates"
---

HACS has two different data sources it reaches out to for information on what to show you.

- HACS Data
- [GitHub REST API](https://docs.github.com/en/rest)

## HACS Data

HACS Data is the data source accessible on `data-v2.hacs.xyz` with the following structures `https://data-v2.hacs.xyz/<section>/<type>.json`.

The `<section>` is one of `[appdaemon|critical|integration|netdaemon|theme|python_script|plugin|removed]` and `<type>` is one of `[data|repositories]`

Examples:

- <https://data-v2.hacs.xyz/integration/data.json>
- <https://data-v2.hacs.xyz/integration/repositories.json>

The `data` `<type>` contains a dictionary data generated from the repositories defined for that `<section>` in the 

The `repositories` `<type>` contains a list of the repositories defined for that `<section>` in the 

These URLs serve data stored in [Cloudflare R2 buckets](https://developers.cloudflare.com/r2/). Those files are updated with three different [GitHub actions](https://github.com/features/actions):
- [hacs/integration - Generate HACS data](https://github.com/hacs/integration/blob/main/.github/workflows/generate-hacs-data.yml)
- [hacs/default - Upload critical file to R2](https://github.com/hacs/default/blob/master/.github/workflows/upload-critical.yml)
- [hacs/default - Upload removed file to R2](https://github.com/hacs/default/blob/master/.github/workflows/upload-removed.yml)


## Updates

There are multiple times and actions that will trigger your HACS installation to fetch new information.

### Startup

During startup, HACS will reach out to [HACS Data](#hacs-data) for all the categories you have enabled, it will also get newly removed repositories.

If you have any custom repositories added to HACS, these will use the [GitHub REST API](https://docs.github.com/en/rest) during startup.

If any of your downloaded repositories have been removed as default in HACS, you will be presented with a [repair issue](https://www.home-assistant.io/integrations/repairs/) stating why it was removed.

### Every 6 hours after startup

HACS will reach out to [HACS Data](#hacs-data) for all the categories you have enabled, it will also get newly removed repositories.

If any of your downloaded repositories have an update, their [update entity](/docs/entities/update_entities) will now show an update.

### Every 48 hours after startup

Suppose HACS has yet to fetch the contents of <https://data-v2.hacs.xyz/integration/data.json> at least once successfully. In that case, it will use the [GitHub REST API](https://docs.github.com/en/rest) to refresh information about hacs/integration. If it has fetched one or more successfully, this action is skipped.

If you have downloaded any custom repositories, they will refresh their data using the [GitHub REST API](https://docs.github.com/en/rest).

### Browse a repository inside HACS

When you browse a repository inside HACS, HACS will use the [GitHub REST API](https://docs.github.com/en/rest) to ensure that the information it acts on is up-to-date.

### Click "Update information" inside HACS

When you click the "Update information" action on the "..." repository menu, HACS will use the [GitHub REST API](https://docs.github.com/en/rest) to ensure that the information it acts on is up-to-date.

### Update a downloaded repository

When you update a downloaded repository with the "Update" button in the more info dialog of its [update entities](/docs/entities/update_entities) or the `update.install` service, HACS will use the [GitHub REST API](https://docs.github.com/en/rest) to ensure that the information it acts on is up-to-date.


## Special notes

### Custom repositories

Custom repositories will always reach out to the GitHub API as the generator action of the HACS data does not know about it.