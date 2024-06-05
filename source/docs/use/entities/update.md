---
title: Update entities
description: 'Update entities'
experimental: true
---
HACS provide [update entities](https://www.home-assistant.io/integrations/update/) for all tracked repositories.

## Install service

Like all other [update entities](https://www.home-assistant.io/integrations/update/), you can use the `update.install` service to handle updates.

!!! danger
    Setting the version in this service call is considered an advanced feature, and should **NOT** be used without instructions to use it from the author of the repository you are updating.

The **Version** field supports the following:

- [x] A GitHub tag (release)
- [x] A public branch of the repository (this does **not** include forks)
- [x] The full SHA of a commit
- [ ] ~~The first 7 SHA of a commit~~


### Considerations

- In case there is a branch and tag that have identical names, the tag will be used.
- If the repository does not support versions, or if the specified version is not compliant with HACS (or your Home Assistant version) it will fail with a message similar to this:
    <figure markdown="span">
        ![Image showing the service failing](/assets/images/update_service_failed.png){ width="720" }
        <figcaption>Image showing the service failing</figcaption>
    </figure>
