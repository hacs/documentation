from __future__ import annotations

import re
from re import Match


def get_dict(s):
    parts = re.split(r"\s*(\w+)=", s)
    return dict(zip(parts[1::2], parts[2::2]))


def on_page_markdown(markdown: str, *args, **kwargs):
    def replace(match: Match):
        tag, extra = match.groups()
        args = []
        for arg in extra.split():
            if "=" in arg:
                break
            else:
                args.append(arg)
        kwargs = get_dict(extra)
        
        
        if tag == "my":
            return _my_link(args, **kwargs)
        else:
            raise RuntimeError(f"Unknown shortcode: {tag}")

    return re.sub(r"<!-- hacs:(\w+)(.*?) -->", replace, markdown, flags=re.I | re.M)



def _my_link(args: list[str], **kwargs: dict[str, str]) -> str:
    redirect = args[0]
    label = kwargs.get("title", redirect).rstrip('"').lstrip('"')
    return f"<a href='https://my.home-assistant.io/redirect/{redirect}/' target='_blank' rel='noreferrer noopener'>{label}</a>"
