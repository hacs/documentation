---
title: Update entities
description: 'Update entities'
---
HACS provide [update entities](https://www.home-assistant.io/integrations/update/) for all tracked repositories.

## Install action

Like all other [update entities](https://www.home-assistant.io/integrations/update/), you can use the `update.install` action to handle updates.

!!! danger
    Setting the version in this action call is considered an advanced feature, and should **NOT** be used without instructions to use it from the author of the repository you are updating.

The **Version** field supports the following:

- [x] A GitHub tag (release)
- [x] A public branch of the repository (this does **not** include forks)
- [x] The full SHA of a commit
- [ ] ~~The first 7 SHA of a commit~~


### Considerations

- In case there is a branch and tag that have identical names, the tag will be used.
- If the repository does not support versions, or if the specified version is not compliant with HACS (or your Home Assistant version) it will fail with a message similar to this:
    <figure markdown="span">
        ![Image showing the action failing](/assets/images/screenshots/core/update_action_failed/light.png#only-light)
        ![Image showing the action failing](/assets/images/screenshots/core/update_action_failed/dark.png#only-dark)
        <figcaption>Image showing the action failing</figcaption>
    </figure>
