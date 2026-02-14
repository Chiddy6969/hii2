import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  // IMPORTANT FOR GITHUB PAGES:
  // If you are deploying to a GitHub Project Page (e.g. https://username.github.io/repo-name/),
  // you MUST uncomment the lines below and replace 'YOUR_REPO_NAME' with your actual repository name.
  //
  // if (command !== 'serve') {
  //   config.base = '/YOUR_REPO_NAME/'
  // }

  return config
})