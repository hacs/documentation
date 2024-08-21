from __future__ import annotations
from urllib.parse import urlparse

import markdown
from mkdocs.config.defaults import MkDocsConfig
from xml.etree.ElementTree import Element

EXTERNAL_SCHEMES=("http", "https")

class Processor(markdown.treeprocessors.Treeprocessor):
    def run(self, root: Element) -> Element | None:
        for element in root.iter():
            if element.tag == "a":
                if urlparse(element.get("href", "")).scheme not in EXTERNAL_SCHEMES:
                    continue
                element.set("target", "_blank")
                element.set("rel", "noopener")

            elif element.tag == "img":
                element.set("loading", "lazy")
            

class Extension(markdown.Extension):
    def extendMarkdown(self, md: markdown.Markdown):
        md.treeprocessors.register(item=Processor(md), name="html_tag_modifier", priority=-1000)


def on_config(config: MkDocsConfig, **kwargs):
    config.markdown_extensions.append(Extension())
    return config
