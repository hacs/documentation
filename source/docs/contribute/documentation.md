---
title: Documentation
description: "Documentation development"
---
The documentation site for HACS is build with [mkdocs-material](https://squidfunk.github.io/mkdocs-material/) and hosted on [Cloudflare Pages](https://pages.cloudflare.com/)

## Contribute to the documentation

There are two ways of contributing to the documentation:

- Using the "Edit this page on GitHub" link at the bottom of every page.
- Locally.

_All changes to the documentation should go against the `{{ config.remote_branch }}` branch._  
The repository for the documentation is hosted @ https://github.com/hacs/documentation

### Edit this page on GitHub

When you see something that needs changing when you browse the documentation, scroll down to the bottom of the page you are looking at, and click the "Edit this page on GitHub" button in the "Help us to improve the documentation" section.

[:fontawesome-solid-file-pen: Edit this page on GitHub](https://github.com/hacs/documentation/edit/{{config.remote_branch}}/source/{{page.file.src_path}}){ .md-button }


This will take you to the GitHub page for it so you can change the content.

### Locally

First spin up the [devcontainer](/docs/contribute/devcontainer.md)

When you have that running issue the following commands:

```bash
scripts/docs/develop
```

You have now started a local webserver that hosts the documentation on `http://localhost:8000`

That server will reload if you do changes to the documentation so you can live see how the changes look.

When you are happy with the result, push the changes to your fork and create a PR to have it merged to the HACS base.

## Contents

All pages for the HACS documentation is located under:

```text
source/
```

All images for the HACS documentation is located under:

```text
source/assets/images/
```


## Contents linking

### Reference another page

Lets say you need to reference another page that is located under:

```text
source/docs/contribute/features.md
```
Then you need to use:

```md
[Features](/docs/contribute/features.md)
```

### Reference images

Lets say you need to reference an image that is located under:

```text
source/assets/images/features.png
```
Then you need to use:

```md
![image](/assets/images/features.png)
```

## New pages

1. Create a new `.md` file under `source/docs/` in a sub-directory that fits the purpose of the file.
1. Add a reference to that file in `mkdocs.yml`

At the top of all pages you should have this:

```yaml
---
title: A Title for the page, this will also be used in the sidebar, ie. Feature
description: "A nice description here"
---
```
