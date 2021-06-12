---
id: frontend
title: Frontend
description: "Frontend development"
---

The repository for the frontend is hosted @ https://github.com/hacs/frontend

First spin up the [devcontainer](/docs/developer/devcontainer)

When you have that running issue the following commands:

```bash
yarn start
```

You have now started a local webserver that hosts the frontend on `http://localhost:5000` which you can attach to a Home Assistant instance that is running HACS.

To attach the development frontend you need to perform [YAML Configuration](/docs/configuration/legacy) with special `frontend_repo_url` parameter. Add this entry to your `configuration.yaml`:

```yaml
hacs:
  token: d73jds8f73jkr9d8sufv2br8sd9fy92nr9f80u23r97fhse (Don't copy+paste this token, create your own)
  frontend_repo_url: http://localhost:5000
```

Replace `token` with [A Github Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) and change `localhost:5000` for the IP of your devserver if not the same. Make sure that your Home Assistant instance can access provided URL. If development frontend isn't hosted on the same device as HA it can't be accessed with `localhost`.
