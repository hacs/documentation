---
title: Documentation
description: "Documentation development"
---
The documentation site for HACS is using [markdown](https://daringfireball.net/projects/markdown/) and built with [mkdocs-material](https://squidfunk.github.io/mkdocs-material/). The site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/).

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

## Documentation contents

All pages of the HACS documentation are located under:

```text
source/
```

All images of the HACS documentation are located under:

```text
source/assets/images/
```


## Contents linking

Instructions on how to create references in Markdown.


### Referencing another page

Let's say you need to reference another page that is located under:

```text
source/docs/contribute/features.md
```
This is a link pointing to the same website. In this case, use a relative link:

```md
[Features](/docs/contribute/features.md)
```
 
 If you link to an external page, use the full URL.

### Referencing images

Let's say you need to reference an image that is located under:

```text
source/assets/images/features.png
```
Then you need to use:

```md
![image](/assets/images/features.png)
```

## New pages

1. Create a new `.md` file under `source/docs/` in a sub-directory that fits the purpose of the file.
1. Add a reference to that file in `mkdocs.yml`.

At the top of all pages, you should have this:

```yaml
---
title: A title for the page, this will also be used in the sidebar. For example, Feature.
description: "A nice description here"
---
```
