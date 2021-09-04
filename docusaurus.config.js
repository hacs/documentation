/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'HACS',
  tagline: 'Home Assistant Community Store',
  url: 'https://hacs.xyz',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'HACS',
  projectName: 'hacs',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    algolia: {
      apiKey: 'ae98e104dc1572a7e897b97951c756a5',
      indexName: 'hacs',
    },
    image: 'img/hacs-logo.png',
    description: 'HACS gives you a powerful UI to handle downloads of all your custom needs.',
    navbar: {
      title: 'HACS',
      items: [
        { to: 'docs/download/prerequisites', label: 'Download', position: 'left' },
        { to: 'docs/configuration/start', label: 'Configuration', position: 'left' },
        { to: 'docs/basic/getting_started', label: 'Usage', position: 'left' },
        { to: 'docs/community_guides', label: 'Guides', position: 'left' },
        { to: 'default_repositories', label: 'Repositories', position: 'left' },
        { to: 'docs/developer/start', label: 'Developer docs', position: 'right' },
        { to: 'docs/faq/what', label: 'FAQ', position: 'right' },
        { to: 'help', label: 'Help', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hacs',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/apgchf8',
            },
            {
              label: 'Code of Conduct',
              href: 'https://github.com/hacs/.github/blob/master/CODE_OF_CONDUCT.md',
            },
            {
              label: 'hi(at)hacs.xyz',
              href: 'mailto:hi@hacs.xyz',
            },
          ],
        },
        {},{},{},{},{},
        {
          title: 'Deploys by Netlify!',
          items: [
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          editUrl: 'https://github.com/hacs/documentation/edit/main/',
          path: './documentation',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        blog: {},
        pages: {},
        sitemap: {},
      },
    ],
  ],
}
