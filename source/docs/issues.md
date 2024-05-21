---
id: issues
title: Issues
description: "Got issues?"
---

**[First lets start out by stating that _ALL_ issues should be reported here](https://github.com/hacs/integration/issues)**

# What should be in the issue?

When you create an issue in the repository for HACS, you start by selecting a template.

All templates have a defined structure and it is **expected** that you follow it.

_Issues that are missing required information can (will) be closed._

## Flag

This should **only** be used, when there is grounds for removing (blacklisting) a repository in HACS.

When you are flagging a repository you need to supply at least these:

- A good description for why.
- The name of the repository.
- Proof that you have tried to contact the owner of that repository (link to issue)

_If you are flagging it because you don't like it, have issues with it, or it's not working, you should report that to the repository and not here._

## Issues

You use this when you have issues with HACS.

[To enable debug logs for HACS (required when adding an issue) have a look here](/docs/basic/logs.md).

Logs are **more** then _just_ errors, with debug logging it gives the person investigating the issue a full picture of what happened.


**What an issue should contain depends on the type, but at least:**

- A GOOD description of the issue.
- Debug logs.
- Steps to reproduce the issue.
- If the issue is in the UI, add screenshots.
- [Diagnostics](/docs/basic/diagnostics.md)

You can see examples of good/bad issues further down on this page.

!!! warning
    _Issues that are missing required information can (will) be closed._


!!! tip
    oh... and almost forgot... `latest` is **NOT** a version.


# Examples

This is a collection of good/bad issues.


## Examples of bad issues

```text

```
_Yes the issue was blank it only had a header 'CCH Settings'_


***

```text
Version of HACS
Describe the bug
A clear and concise description of what the bug is.

Debug log

Add your logs here.
```
_The description of the issue only contained the template but it had a header 'Blows up on update.'_

***

```text
Version of HACS
Describe the bug
A clear and concise description of what the bug is.

Debug log

Add your logs here.
```
_The description of the issue only contained the template but it had a header 'zod'_

***

```text
[Expecting value: line 1 column 1 (char 0)] Restore Failed!
11:51 AM custom_components/hacs/hacsbase/data.py (CRITICAL)
I checked and it exactly how its supposed to be
even replaced the whole hacs folder with a fresh download
```

## Examples of good issues

_Good issues have too much text to extract it (some also have screenshots) but here is a few links:_

- [https://github.com/hacs/integration/issues/452](https://github.com/hacs/integration/issues/452)
- [https://github.com/hacs/integration/issues/470](https://github.com/hacs/integration/issues/470)
- [https://github.com/hacs/integration/issues/356](https://github.com/hacs/integration/issues/356)

# Last words

The more time/words/examples you put in your issue, the faster someone can see/understand what you mean.
