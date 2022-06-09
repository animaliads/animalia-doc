/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Animalia DS",
  tagline: "Design System da TOTVS",
  onBrokenLinks: "log",
  i18n: {
    defaultLocale: "pt",
    locales: ["en", "pt"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
      },
      pt: {
        label: "Português",
        direction: "ltr",
      },
    },
  },
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "animaliads", // Usually your GitHub org/user name.
  projectName: "animalia-doc", // Usually your repo name.
  url: "https://doc.animaliads.io/",
  baseUrl: "/",
  themeConfig: {
    hotjar:{
      applicationId: 2903615,
    },
    navbar: {
      logo: {
        alt: "Animalia DS Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        {
          type: "doc",
          docId: "about/intro",
          position: "right",
          label: "Sobre",
        },
        {
          type: "doc",
          docId: "components/button",
          position: "right",
          label: "Componentes",
        },
        {
          type: "doc",
          docId: "foundation/intro",
          position: "right",
          label: "Fundamentos",
        },
        {
          type: "doc",
          docId: "designtokens/designtokens",
          position: "right",
          label: "Design Tokens",
        },
        {
          type: "search",
          position: "right",
        },

        //{to: '/blog', label: 'Blog', position: 'left'},

        // ... more items
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Começando",
          items: [
            {
              label: "Desenvolvimento",
              to: "/docs/about/getting-started",
            },
            {
              label: "Design",
              to: "/docs/about/getting-started-design",
            },
          ],
        },
        {
          title: "Links úteis",
          items: [
            {
              label: "Github",
              href: "https://github.com/animaliads",
            },
            {
              label: "Storybook (API)",
              href: "http://animaliads.io/?path=/docs/api-button--sample",
            },
            {
              label: "Figma Community",
              href: "https://www.figma.com/@animaliads",
            },
          ],
        },
        {
          title: "Outros",
          items: [
            {
              label: "Changelog",
              to: "/docs/about/changelog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Animalia Design System 🦎.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleAnalytics: {
          trackingID: 'G-TCSRHFEBXF',
          anonymizeIP: true,
        },
          docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          
        },
      },
    ],
  ],
  plugins:[
      'docusaurus-plugin-hotjar',
     
  ],
};
