// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

const GTM_ID = process.env.GTM_ID;

// https://astro.build/config
export default defineConfig({
  site: 'https://doc.haramizu.com',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Haramizu.com',
      defaultLocale: 'root',
      editLink: {
        baseUrl: 'https://github.com/haramizu/doc.haramizu.com/edit/main/',
      },
      social: {
        github: 'https://github.com/haramizu/doc.haramizu.com',
      },
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      sidebar: [
        {
          label: 'About',
          autogenerate: { directory: 'about' },
        },
        {
          label: 'Cloud Portal',
          collapsed: true,
          autogenerate: { directory: 'cloud-portal' },
        },
        // {
        //   label: `Content`,
        //   collapsed: true,
        //   items: [
        //     {
        //       label: 'XM Cloud',
        //       collapsed: true,
        //       autogenerate: { directory: 'xmc' },
        //     },
        //     {
        //       label: 'Content Hub',
        //       collapsed: true,
        //       autogenerate: { directory: 'ch' },
        //     },
        //     {
        //       label: 'Search',
        //       collapsed: true,
        //       autogenerate: { directory: 'search' },
        //     },
        //   ]
        // },
        // {
        //   label: `Engamenent`,
        //   collapsed: true,
        //   items: [
        //     {
        //       label: 'CDP + Personalize',
        //       collapsed: true,
        //       autogenerate: { directory: 'cdp-personalize' },
        //     },
        //     {
        //       label: 'Send',
        //       collapsed: true,
        //       autogenerate: { directory: 'send' },
        //     },
        //   ]
        // },
        {
          label: `Technologies`,
          collapsed: true,
          items: [
            {
              label: 'Astro',
              collapsed: true,
              autogenerate: { directory: 'astro' },
            },
            // {
            //   label: 'Next.js',
            //   collapsed: true,
            //   autogenerate: { directory: 'nextjs' },
            // },
            // {
            //   label: 'Vercel',
            //   collapsed: true,
            //   autogenerate: { directory: 'vercel' },
            // },
          ]
        },
        {
          label: 'Update',
          collapsed: true,
          autogenerate: { directory: 'update' },
        },
      ],
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
          },
        },
        {
          tag: 'script',
          content: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});

