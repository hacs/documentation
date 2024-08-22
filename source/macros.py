import requests
import os
from pathlib import Path    
import json

TRANSLATIONSFILES = ".cache/translations/"

def flatten_json(json_obj, parent_key='', sep='.'):
    items = {}
    for k, v in json_obj.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.update(flatten_json(v, new_key, sep=sep))
        else:
            items[new_key] = v
    return items

def init_translations():
    if not os.path.exists(TRANSLATIONSFILES):
        os.makedirs(TRANSLATIONSFILES)
    
    if not os.path.exists(f"{TRANSLATIONSFILES}/hacs.json"):
        with open(f"{TRANSLATIONSFILES}/hacs.json", "w") as file:
            translations = requests.get("https://raw.githubusercontent.com/hacs/frontend/main/src/localize/languages/en.json").json()
            json.dump(flatten_json(translations), file, indent=4, sort_keys=True)
            
    if not os.path.exists(f"{TRANSLATIONSFILES}/core.json"):
        with open(f"{TRANSLATIONSFILES}/core.json", "w") as file:
            translations = requests.get("https://raw.githubusercontent.com/home-assistant/frontend/dev/src/translations/en.json").json()
            json.dump(flatten_json(translations), file, indent=4, sort_keys=True)


def define_env(env):
    init_translations()
    translations = {
        "hacs": json.loads(Path(f"{TRANSLATIONSFILES}/hacs.json").read_text()),
        "core": json.loads(Path(f"{TRANSLATIONSFILES}/core.json").read_text())
    }
    
    @env.macro
    def hacsui(text: str, placeholders: dict = {}):
        if (translated := translations["hacs"].get(text)) is None:
            raise ValueError(f"Translation for '{text}' not found")
        return translated.format(**placeholders)
    
    @env.macro
    def coreui(text: str, placeholders: dict = {}):
        if (translated := translations["core"].get(text)) is None:
            raise ValueError(f"Translation for '{text}' not found")
        return translated.format(**placeholders)
        
