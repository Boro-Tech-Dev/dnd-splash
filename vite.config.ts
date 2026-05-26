import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const SITE_TITLE = 'DeployDeliver'
const BUILD_ID = process.env.BUILD_ID || new Date().toISOString()

function siteMetaPlugin() {
  return {
    name: 'site-meta',
    transformIndexHtml(html: string) {
      return html
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${SITE_TITLE}</title>`)
        .replace(
          '<meta charset="UTF-8" />',
          `<meta charset="UTF-8" />\n    <meta name="application-name" content="${SITE_TITLE}" />\n    <meta name="deploy-build" content="${BUILD_ID}" />`,
        )
        .replace(/favicon\.(ico|svg)\?v=\d+/g, 'favicon.$1?v=3')
        .replace(/site\.webmanifest"/, `site.webmanifest?v=3"`)
    },
  }
}

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    siteMetaPlugin(),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
