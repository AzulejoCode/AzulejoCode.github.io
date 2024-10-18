import {defineConfig, minimalPreset as preset} from '@vite-pwa/assets-generator/config'

export default defineConfig({
    preset,
    images: [
        'public/azulejo_profile_round.webp',
    ]
})