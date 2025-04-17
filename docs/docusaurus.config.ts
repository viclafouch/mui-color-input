import { themes } from 'prism-react-renderer'
import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'

const config = {
  title: 'MUI color input',
  tagline: 'A color input designed for the React library MUI',
  url: 'https://viclafouch.github.io',
  baseUrl: '/mui-color-input/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'viclafouch',
  projectName: 'mui-color-input',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html gitlang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        gtag: {
          trackingID: 'G-SZPGVX9K0M'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: 'MUI color input',
      logo: {
        alt: 'MUI color input',
        src: 'img/logo.jpg'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation'
        },
        {
          href: 'https://github.com/viclafouch/mui-color-input',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'https://www.npmjs.com/package/mui-color-input',
          label: 'NPM',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} by Victor de la Fouchardiere`
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula
    }
  }
} satisfies Config

module.exports = config
