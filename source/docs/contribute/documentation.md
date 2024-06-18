---
title: Documentation
description: "Documentation development"
---
The documentation site for HACS is using [Markdown](https://daringfireball.net/projects/markdown/) and is built with [mkdocs-material](https://squidfunk.github.io/mkdocs-material/). The site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/).


## Contributing to the documentation

There are two ways of contributing to the documentation:

- Using the **Edit this page on GitHub** link at the bottom of every page.
- Building the documentation locally, using a devcontainer.

_All changes to the documentation should go against the `{{ config.remote_branch }}` branch._  
The repository for the documentation is hosted @ https://github.com/hacs/documentation

### Editing this page on GitHub

When you see something that needs changing while you browse the documentation, scroll down to the bottom of the page. In the **Help us to improve the documentation** section, select the **Edit this page on GitHub** button.

[:fontawesome-solid-file-pen: Edit this page on GitHub](https://github.com/hacs/documentation/edit/{{config.remote_branch}}/source/{{page.file.src_path}}){ .md-button }


This will take you to the GitHub page for it so you can change the content.

### Locally, using a devcontainer

1. Spin up the [devcontainer](/docs/contribute/devcontainer.md).

2. To start a preview of the website, issue the following command:

    ```bash
    scripts/develop
    ```

    - You have now started a local webserver that hosts the documentation on `http://localhost:8000`

    - The server automatically reloads to reflect any documentation changes.

3. When you are happy with the result, push the changes to your fork and create a PR to have it merged to the HACS base.

## Documentation folder structure

All pages of the HACS documentation are located under:

```text
source/
```

All images of the HACS documentation are located under:

```text
source/assets/images/
```

## Creating new pages

1. Create a new `.md` file under `source/docs/` in a subdirectory that fits the purpose of the file.
2. Add a reference to that file in `mkdocs.yml`.

At the top of all pages, add a header:

```yaml
---
title: A title for the page, this will also be used in the sidebar. For example, Feature.
description: "A summary of the contents of this page"
---
```

## About screenshots

When adding a new screenshot to the documentation, follow these guidelines:

- **Size**: before screenshotting, make sure the fullscreen is set to 1440x900 pixels.
- **Format**: PNG format.
- **Dark and light theme**: Create 2 screenshots, one for dark and one for light theme.
- **Location**: Place new screenshots under `source/assets/images/screenshots/`.
- **File naming convention**: 
    - `name_of_the_screenshot/light.png`
    - `name_of_the_screenshot/dark.png`
    - Use underscores `_` to separate words
    - use lower case characters

## Linking in the documentation


Instructions on how to create Markdown references in the documentation.

### Linking to another page

Let's say you need to reference another page that is located under:

```text
source/docs/contribute/features.md
```
This is a link pointing to the same website. In this case, use a relative link:

```md
[Features](/docs/contribute/features.md)
```
 
To link to an external page, use the full URL.

```md
[mkdocs-material](https://squidfunk.github.io/mkdocs-material/)
```

### Referencing images

Let's say you need to reference an image that is located under:

```text
source/assets/images/features.png
```
Then you need to use:

```md
![image](/assets/images/features.png)
```
