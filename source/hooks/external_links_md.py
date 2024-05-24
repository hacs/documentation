from urllib.parse import urlparse

import markdown
from mkdocs.config.defaults import MkDocsConfig

EXTERNAL_SCHEMES=("http", "https")


class ExternalLinksTreeProcessor(markdown.treeprocessors.Treeprocessor):
    """Adds target="_blank" and rel="noopener" to external links."""

    def run(self, root):
        for element in root.iter():
            if element.tag != "a":
                continue
            if urlparse(element.get("href", "")).scheme not in EXTERNAL_SCHEMES:
                continue
            element.set("target", "_blank")
            element.set("rel", "noopener")


class ExternalLinksExtension(markdown.Extension):
    def extendMarkdown(self, md: markdown.Markdown):
        md.treeprocessors.register(
            item=ExternalLinksTreeProcessor(md),
            name="external_links",
            priority=-1000,
        )


def on_config(config: MkDocsConfig, **kwargs):
    config.markdown_extensions.append(ExternalLinksExtension())
    return config