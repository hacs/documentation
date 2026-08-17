from __future__ import annotations

import json
import logging
import time
from pathlib import Path

import requests
from mkdocs.config.defaults import MkDocsConfig

ALLOWLIST_URL = "https://www.openhomefoundation.org/allowed-referrers.json"
ALLOWLIST_FILE = Path(".cache/plausible/allowed-referrers.json")
ALLOWLIST_MAX_AGE = 3600

# `strict: true` aborts the build on anything logged at WARNING or above under the
# "mkdocs" logger, and an unreachable allow list must never break the site, so the
# fallbacks below report at INFO instead.
log = logging.getLogger("mkdocs.hooks.plausible")


def normalize_referrers(payload: object) -> list[str]:
    """Reduce the allow list payload to bare, lowercase domains."""
    if not isinstance(payload, list) or not all(isinstance(entry, str) for entry in payload):
        raise ValueError("payload is not an array of strings")
    return [domain for entry in payload if (domain := entry.strip().lower().removesuffix("."))]


def cached_referrers() -> list[str] | None:
    """The allow list left behind by an earlier build, if it is still usable."""
    try:
        return normalize_referrers(json.loads(ALLOWLIST_FILE.read_text()))
    except FileNotFoundError:
        return None
    except (OSError, ValueError) as exception:
        log.info("Discarding unusable allow list at %s: %s", ALLOWLIST_FILE, exception)
        return None


def download_referrers() -> list[str]:
    """Download the allow list and cache it for subsequent builds."""
    response = requests.get(ALLOWLIST_URL, timeout=30)
    response.raise_for_status()
    referrers = normalize_referrers(response.json())
    ALLOWLIST_FILE.parent.mkdir(parents=True, exist_ok=True)
    ALLOWLIST_FILE.write_text(json.dumps(referrers, indent=4, sort_keys=True) + "\n")
    log.info("Fetched %s allowed referrers", len(referrers))
    return referrers


def allowed_referrers() -> list[str]:
    """The allow list, downloaded at most once per build.

    An empty result means no referrer can be checked, which leaves Plausible out of
    the build entirely rather than reporting every visit as unlisted.
    """
    if (
        ALLOWLIST_FILE.exists()
        and time.time() - ALLOWLIST_FILE.stat().st_mtime < ALLOWLIST_MAX_AGE
        and (cached := cached_referrers()) is not None
    ):
        return cached

    try:
        return download_referrers()
    except (OSError, ValueError, requests.RequestException) as exception:
        if (cached := cached_referrers()) is not None:
            log.info("Could not refresh the allow list, reusing %s: %s", ALLOWLIST_FILE, exception)
            return cached
        log.info("Could not fetch the allow list (%s), Plausible is left out of this build", exception)
        return []


def on_config(config: MkDocsConfig, **kwargs):
    config.extra.setdefault("plausible", {})["allowed_referrers"] = allowed_referrers()
    return config
