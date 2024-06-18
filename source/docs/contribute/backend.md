---
title: Backend
description: "Backend development"
---

This page should contain:

- How to get started.
- What branch to target.
- How to test locally.

## Finding the backend repository

The backend repository is hosted @ https://github.com/hacs/integration

## Target branch for contributor PRs

When contributing to the backend, target your PR against the `{{ config.remote_branch }}` branch.

## Creating your code changes using the devcontainer

1. Spin up the [devcontainer](/docs/contribute/devcontainer.md).

2. Add your code changes.
3. To start a preview of the application, issue the following command:

    ```bash
    scripts/develop
    ```

    - You have now started a local server that hosts the application on `http://localhost:8123`

    - The server automatically reloads to reflect your changes.

4. When you are happy with the result, push the changes to your fork and create a PR to have it merged to the HACS base.