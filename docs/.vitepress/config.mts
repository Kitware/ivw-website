import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ivw-website',
  title: "IVW26",
  description: "Interactive Visual Workflows for Science and Engineering at Scale",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Workshop', link: '/workshop' },
      { text: 'Call for Papers', link: '/call-for-papers' },
      { text: 'Program', link: '/program' },
      { text: 'Organizers', link: '/organizers' }
    ],
    sidebar: [
      {
        text: 'Workshop',
        items: [
          { text: 'Overview', link: '/workshop' },
          { text: 'Call for Papers', link: '/call-for-papers' },
          { text: 'Program', link: '/program' },
          { text: 'Organizers', link: '/organizers' }
        ]
      }
    ]
  }
})
