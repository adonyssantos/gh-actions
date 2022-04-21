import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://gh-actions-3256c.web.app/',
  plugins: [react()],
});
