---
id: frontend
title: Frontend
---

_All changes to the documentation should go against the `master` branch._  
The repository for the frontent is hosted @ https://github.com/hacs/frontend

<pre class="prism-code language-bash codeBlock_19pQ">
    <h4>Note!</h4>
    Untill the new eperimental UI are default in HACS, you need to enable that to test your changes.
</pre>

<pre class="prism-code language-bash codeBlock_19pQ">
    <h4>Note!</h4>
    Contributions to the "old" UI will not be accepted.
</pre>

First spin up the [devcontainer](/docs/developer/devcontainer)

When you have that running issue the following comands:

```bash
npm start
```

When this is running it spins up a dev server, which you can attach to from a Home Assistant instance that is running HACS.

To attach the development frontend add this to your Home Assistant installation that is running HACS:

```yaml
panel_custom:
  - name: hacs-dev-frontend
    sidebar_title: HACS (Dev frontend server)
    sidebar_icon: mdi:alert-circle
    url_path: hacs_dev
    js_url: http://localhost:5000/main.js
```

Change `localhost` for the IP of your devserver if not the same.
