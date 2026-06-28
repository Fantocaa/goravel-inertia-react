import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Custom plugin to manage public/hot file for Goravel development mode routing
function goVitePlugin(): Plugin {
  return {
    name: 'go-vite-plugin',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        const address = server.httpServer?.address();
        const protocol = server.config.server.https ? 'https' : 'http';
        let host = typeof address === 'string' ? address : address?.address;
        if (host === '::' || host === '::1' || host === '0.0.0.0') {
          host = 'localhost';
        }
        const port = address && typeof address !== 'string' ? address.port : 5173;
        const url = `${protocol}://${host}:${port}`;
        fs.writeFileSync(path.resolve(__dirname, 'public/hot'), url);
      });

      const cleanHot = () => {
        if (fs.existsSync(path.resolve(__dirname, 'public/hot'))) {
          fs.unlinkSync(path.resolve(__dirname, 'public/hot'));
        }
      };

      process.on('exit', cleanHot);
      process.on('SIGINT', cleanHot);
      process.on('SIGTERM', cleanHot);
      process.on('SIGHUP', cleanHot);
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    goVitePlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
    },
  },
  build: {
    manifest: true,
    outDir: 'public/build',
    rollupOptions: {
      input: 'resources/js/app.tsx',
    },
  },
});
