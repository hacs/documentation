---
id: faq
title: FAQ
---

## What is HACS?

HACS is an abbreviation of "Home Assistant Community Store".

Although "Store" is not "technically" correct, since nothing is sold, it's more like a marketplace? but "HACM" didn't have the same ring to it.

### Highlights of what HACS can do

- Help you discover new custom elements.
- Help you install (download) new custom elements.
- Help you keep track of your custom elements.

***

## Is this for hass.io only?

No, it's not.

You can use this on _any_ Home Assistant installation.

_Windows might have issues, but if you are running HA on Windows you are probably used to that._

***

## How does it work: Installation

When you install an element this is what's happening:

1. The local target directory(folder) is deleted.
1. A new local target directory is created.
1. All expected files are downloaded to that directory.
1. The files it downloads depends on the type.

***

## How does it work: Upgrade

The same as installation.

***

## How can I install this.

Look at the [installation documentation.](../installation/manual/)

## Known limitations

- If you install/upgrade/remove or add a custom repository while the background task is running, do **not** restart Home Assistant until that task is done, if you do your action will not be saved.