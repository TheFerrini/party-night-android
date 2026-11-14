import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  clearScreen: false,
  server: {
    host: '0.0.0.0',
  },
});
