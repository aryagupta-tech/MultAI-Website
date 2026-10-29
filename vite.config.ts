import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Flat output (no assets/ folder) so the build uploads to the S3 bucket root as-is.
export default defineConfig({
  plugins: [react()],
  build: { assetsDir: '' },
});
