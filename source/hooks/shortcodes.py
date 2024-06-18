from __future__ import annotations

import re
from re import Match


def on_page_markdown(markdown: str, *args, **kwargs):
    def replace(match: Match):
        type, args = match.groups()
        args = args.strip().split(" ")

        match type:
            case "my":
                return _my_link(args)

            case _:
                raise RuntimeError(f"Unknown shortcode: {type}")

    return re.sub(r"<!-- hacs:(\w+)(.*?) -->", replace, markdown, flags=re.I | re.M)


def _my_link(args: list[str]) -> str:
    redirect = args[0]
    label = " ".join(args[1:]) if len(args) > 1 else redirect
    return f"<a href='https://my.home-assistant.io/redirect/{redirect}/' target='_blank' rel='noreferrer noopener'>{label}</a>"
