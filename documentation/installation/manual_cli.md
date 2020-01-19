---
id: manual_cli
title: Installation, Linux command-line
description: "Manual installation steps using the Linux command-line"
---

This guide will help you install HACS using the Linux command-line on your Home Assistant server.

### Step 1 - Get the URL for the latest HACS release

In your browser, visit the [HACS latest release page](https://github.com/custom-components/hacs/releases/latest).

![install2](/img/install2.png)

Under Assets, right-click `hacs.zip` and copy that URL to your clipboard.

### Step 2 - Download the latest HACS release

At your Linux command-line, type `wget ` followed by a space, then paste the URL from your clipboard. Press Enter to download `hacs.zip` to your current directory. (`xx` and `y`, below, will be the actual latest-version numbers in the URL):
```
user@host:~$ wget https://github.com/hacs/integration/releases/download/0.xx.y/hacs.zip
--2020-01-01 12:58:13--  https://github.com/hacs/integration/releases/download/0.xx.y/hacs.zip
...
Connecting to github.com (github.com) ... connected.
...
HTTP request sent, awaiting response... 200 OK
Length: ..... (nnK) [application/octet-stream]
Saving to: ‘hacs.zip’

hacs.zip 100%[==========================================>]  76.20K  --.-KB/s    in 0.09s

2020-01-01 12:58:14 (... KB/s) - ‘hacs.zip’ saved [nnnnn/nnnnn]

```

### Step 3 - Create the destination subdirectories

The `hacs` folder needs to be placed under `<config_dir>/custom_components/`

`<config-dir>` is where your `configuration.yaml` file is located.

On Hassio/Docker the final location will be `/config/custom_components/hacs`

On Hassbian(venv) the final location will be `/home/homeassistant/.homeassistant/custom_components/hacs`

For this example, `<config-dir>` will be `/path/to/homeassistant/config`

Change-directory to your Home Assistant configuration directory:
```
user@host:~$ cd /path/to/homeassistant/config
user@host:/path/to/homeassistant/config$ 
```

Create subdirectories, `custom_components/hacs`. If the subdirectories don't exist, this command will create them:
```
user@host:/path/to/homeassistant/config$ mkdir -p custom_components/hacs
```

### Step 4 - Unzip the downloaded file into the new subdirectory

Change to the new `hacs` subdirectory:
```
user@host:/path/to/homeassistant/config$ cd custom_components/hacs
user@host:/path/to/homeassistant/config/custom_components/hacs$

```

Unzip the downloaded `hacs.zip` file into this new `hacs` subdirectory. This will extract multiple subdirectories and files, (this is just an example, abbreviated list): 
```
user@host:/path/to/homeassistant/config/custom_components/hacs$ unzip ~/hacs.zip
Archive:  ~/hacs.zip
  inflating: store.py                
  inflating: manifest.json           
...
  inflating: helpers/get_defaults.py  
  inflating: constrains.py           
   creating: repositories/
  inflating: repositories/plugin.py  
...
  inflating: config_flow.py          
  inflating: ws_api_handlers.py      
   creating: .translations/
  inflating: .translations/nl.json   
  inflating: .translations/fr.json   
...
  inflating: hacsbase/task_factory.py  
  inflating: hacsbase/__init__.py    
  inflating: hacsbase/exceptions.py 

user@host:/path/to/homeassistant/config/custom_components/hacs$ 
```

### Step 5 - Restart Home Assistant

Restart Home Assistant once before moving to the next step.

### Step 6 - ✏️

You should now be done, next part will be to add it to your [configuration](configuration/start.md).
