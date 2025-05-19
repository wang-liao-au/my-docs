import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import rehypeSlug from 'rehype-slug'

export default defineConfig({
  output: 'static',
  compressHTML: true,
  build: {
    redirects: false,
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      langAlias: {
        cjs: 'javascript',
      },
      wrap: true,
    },
    gfm: true,
    rehypePlugins: [rehypeSlug],
  },
  integrations: [
    starlight({
      favicon: 'favicon.png',
      title: "Wang's Docs",
      customCss: ['./src/styles/custom.css'],
      logo: {
        dark: '/src/assets/img1.avif',
        light: '/src/assets/img1.avif',
        alt: "Wang's docs",
      },
      social: {
        github: 'https://github.com/wang-liao-au',
        linkedin: 'https://www.linkedin.com/in/wang-liao-au/',
      },
      expressiveCode: {
        styleOverrides: {
          boarderRadius: '0.375rem',
        },
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Intro',
          collapsed: true,
          items: [{ label: 'Start Here', link: 'intro/start-here' }],
        },
        {
          label: 'Terraform Notes',
          autogenerate: { directory: 'terraform', collapsed: true },
        },
      ],
    }),
  ],
  devToolbar: {
    enabled: false,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
})
