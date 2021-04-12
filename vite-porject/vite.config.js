/**
 * @type {import('vite').UserConfig}
 */

import { defineConfig } from 'vite';
import { readFileSync } from 'fs';

export default defineConfig({
    clearScreen: true,
    build: {
        chunkSizeWarningLimit: 550
    },
    server: {
        port: 5000,
        https: true,
        https: {
            key: readFileSync('/Users/MWK/key.pem'),
            cert: readFileSync('/Users/MWK/cert.pem')
        },
    },
})