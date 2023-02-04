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
  favicon: 'https://assets.hacs.xyz/logo.svg',
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
    image: 'https://assets.hacs.xyz/logo.svg',
    description: 'HACS gives you a powerful UI to handle downloads of all your custom needs.',
    navbar: {
      title: 'HACS',
      items: [
        { to: 'docs/setup/prerequisites', label: 'Download', position: 'left' },
        { to: 'docs/configuration/basic', label: 'Configuration', position: 'left' },
        { to: 'docs/basic/getting_started', label: 'Usage', position: 'left' },
        { to: 'docs/community_guides', label: 'Guides', position: 'left' },
        { to: 'docs/developer/start', label: 'Developer docs', position: 'right' },
        { to: 'docs/faq/', label: 'FAQ', position: 'right' },
        { to: 'help', label: 'Help', position: 'right' },
      ],
    },
    footer: {
      style: "dark",
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
              label: 'Contact (no support!)',
              href: 'mailto:hi@hacs.xyz',
            },
          ],
        },
        {},{},{},{},{},
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
          showLastUpdateTime: false,
        },
        blog: {},
        pages: {},
        sitemap: {},
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        removeDefaultStopWordFilter: true,
        docsDir: "documentation",
        indexPages: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: "/default_repositories",
            to: "/"
          },
          {
            from: ["/docs/configuration/pat", "/docs/configuration/legacy", "/docs/configuration/start"],
            to: "/docs/configuration/basic"
          },
          {
            from: "/docs/installation/installation",
            to: "/docs/setup/download"
          },
          {
            from: ["/docs/installation/manual", "/docs/installation/manual_cli", "/docs/installation/prerequisites"],
            to: "/docs/setup/prerequisites"
          },
          {
            from: "/docs/installation/remove",
            to: "/docs/setup/remove"
          },
          {
            from: "/docs/faq/what",
            to: "/docs/faq/"
          }
        ]
      }
    ]
  ],
}
