// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Artemis Design Studios',
  tagline: 'Docs',
  favicon: 'img/artemis_logo_color.ico',

  // Set the production url of your site here
  url: 'https://artemisdesignstudios.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'artemisdesignstudios', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Artemis Design Studios',
        logo: {
          alt: 'My Site Logo',
          src: 'img/artemis_logo_color.svg',
        },
        items: [
          {to: '/category/project-info', label: 'Projects', position: 'left'},
          {to: '/blog', label: 'Updates', position: 'left'},
          {
            href: 'https://github.com/artemisdesignstudios',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Project Info',
                to: '/category/project-info',
              },
              {
                label: 'Downloads and Guides',
                to: '/category/downloads',
              },

            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/artemis.design.studios',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/cfTS5T8',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Updates',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/artemisdesignstudios',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Artemis Design Studios, LLC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
