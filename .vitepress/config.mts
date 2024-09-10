import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Roommate Matcher",
  description: "A Roommate Recommend System for Freshmen",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Getting Started', link: '/get-started' },
      { text: 'User Manual', link: '/user-manual' },
      { text: 'Showcase', link: '/showcase' }
    ],

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Getting Started', link: '/get-started' },
      { text: 'User Manual', link: '/user-manual' },
      { text: 'Showcase', link: '/showcase' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xavier-xuan/RMMT-API.git' }
    ]
  }
})
