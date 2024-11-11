// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://doc.haramizu.com',
  integrations: [
    starlight({
      title: 'Haramizu.com',
      defaultLocale: 'root',
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
      social: {
        github: 'https://github.com/haramizu/doc.haramizu.com',
      },
      sidebar: [
        {
          label: 'About',
          autogenerate: { directory: 'about' },
        },
        // {
        //   label: 'Cloud Portal',
        //   collapsed: true,
        //   autogenerate: { directory: 'cloud-portal' },
        // },
        // {
        //   label: 'CDP + Personalize',
        //   collapsed: true,
        //   items: [
        //     {
        //       slug: 'cdp-personalize/overview',
        //     },
        //     {
        //       label: 'Hands on',
        //       collapsed: true,
        //       autogenerate: { directory: 'cdp-personalize/hands-on' },
        //     },
        //   ],
        // },
        // {
        //   label: 'Search',
        //   collapsed: true,
        //   autogenerate: { directory: 'search' },
        // },
        // {
        //   label: 'XM Cloud',
        //   collapsed: true,
        //   autogenerate: { directory: 'xmcloud' },
        // },
        // {
        //   label: 'Next.js',
        //   collapsed: true,
        //   autogenerate: { directory: 'nextjs' },
        // },
        {
          label: 'Astro',
          collapsed: true,
          autogenerate: { directory: 'astro' },
        },
        {
          label: 'Update',
          collapsed: true,
          autogenerate: { directory: 'update' },
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});

