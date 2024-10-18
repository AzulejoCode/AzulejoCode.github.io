import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            manifest: {
                name: 'Azulejo Code',
                short_name: 'Azulejo Code',
                description: 'My personal page AzulejoCode.',
                theme_color: '#ffffff',
            }
        })
    ],
})
