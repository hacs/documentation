---
id: issues
title: Issues
description: "Got issues?"
---

This page shows you how to report an issue for HACS.

# Reporting an issue

If you're having an issue with a custom element, [report an issue for that repository](/docs/use/repositories/dashboard.md/#reporting-an-issue-with-a-repository).

To report an issue with HACS, **[use the issue template](https://github.com/hacs/integration/issues)**.

- All templates have a defined structure. Follow the structure and provide the requested details.
_Issues missing required information will be closed._

## What should be in the issue

The content of the issue depends on the type of issue. At least, include the following information:

- A GOOD description of the issue.
  - Check out some real-world examples of [good](#examples-of-good-issues) and [bad](#examples-of-bad-issues) issue descriptions.
- Debug logs.
    - To enable debug logs for HACS, follow [the steps on enabling debug logs](/docs/use/troubleshooting/logs.md).
    - Logs are **more** than _just_ errors; debug logging provides a full picture of what happened.
- Steps to reproduce the issue.
- If the issue is in the UI, add screenshots.
- [Diagnostics](/docs/use/troubleshooting/diagnostics.md)

!!! warning
    _Issues that are missing required information will be closed._


!!! tip
    oh... and almost forgot... `latest` is **NOT** a version. Provide the actual version number.


## Issue examples

This section provides a collection of good and some bad (unhelpful) issue descriptions.


### Examples of bad issues

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

### Examples of good issues

_Good issues have too much text to extract it (some also have screenshots), but a few are linked below:_

- [https://github.com/hacs/integration/issues/452](https://github.com/hacs/integration/issues/452)
- [https://github.com/hacs/integration/issues/470](https://github.com/hacs/integration/issues/470)
- [https://github.com/hacs/integration/issues/356](https://github.com/hacs/integration/issues/356)

# Flagging a repository for removal

This should **only** be used when there are grounds for removing (blacklisting) a repository in HACS.

_If you don't like a repository, have issues with it, or it's not working, you should report that to the repository owner, not to HACS._

When you are flagging a repository, provide at least the following information:

- A reason why this repository should be removed.
    - "It's not working" is not an accepted reason.
    - "It's not working and it has not been maintained for an extended period of time" could be a reason.
- The name of the repository.
- Proof that you have tried to contact the owner of that repository. 
    - Provide a link to the issue you created in their GitHub repository.

# Last words

The more time/words/examples you put into your issue, the better the chance someone else can understand what your issue is. You are more likely to get help.
