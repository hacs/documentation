---
id: template
title: Custom template
description: "Publish custom templates with HACS"
---
## Requirements

For a custom template repository to be valid these are the requirements:

### Repository structure

- A `README.md` file exist in the root of the repository
- A `hacs.json` file exist in the root of the repository
- A `.jinja` file exist in the root of the repository
- The `filename` key of the `hacs.json` file matches a `.jinja` file in the root of the repository
- The repository is using GitHub releases

### Examples


???+ note "OK example"

    ```text
    awesome.jinja
    hacs.json
    README.md
    ```

??? note "Not OK example"

    ```text
    custom_template/awesome.jinja
    hacs.json
    README.md
    ```
