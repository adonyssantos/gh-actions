import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: [
    'https://adonyssantos.github.io/gh-actions/',
    'https://gh-actions-3256c.firebaseapp.com/',
    'https://gh-actions-3256c.web.app/',
  ],
  plugins: [react()],
});
