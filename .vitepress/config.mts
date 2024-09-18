import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DICOMPress",
  description: "A VitePress + Niivue Site Protocol",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      { 
        text: 'Introduction',
        items: [
          { text: 'Aim', link: 'content/introduction/aim' },
          { text: 'Getting Started', link: '/content/introduction/getting_started' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'DICOM Viewer Examples', link: '/content/examples/dicom' },
          { text: 'Markdown Examples', link: '/content/examples/markdown-examples' },
          { text: 'API Examples', link: '/content/examples/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})




