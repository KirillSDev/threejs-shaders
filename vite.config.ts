import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
    root: '',
    build: {
        emptyOutDir: true,
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        }
    }
})