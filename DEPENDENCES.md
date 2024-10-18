# Dependences

En este archivo se condensan todas las dependencias que se usan en este proyecto. Se documenta para qué se están usando
y las configuraciones que se tuvieron que hacer para su correcto funcionamiento:

## dependences

### Default

A continuación se presentan las dependecias que vienen por defecto al crear desde cero un proyecto en vite vue3

``` json
"dependencies": {
"vue": "^3.4.37"
}
```

* * * 
* * * 

## devDependences

### Default

A continuación se presentan las dependecias que vienen por defecto al crear desde cero un proyecto en vite vue3

``` json
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.2",
    "typescript": "^5.5.3",
    "vite": "^5.4.1",
    "vue-tsc": "^2.0.29"
  }
```

### PWA

Para añadir la feature de PWA se requieren las siguientes dependencias:

``` json
  "devDependencies": {
    "@vite-pwa/assets-generator": "^0.2.6",
    "vite-plugin-pwa": "^0.20.5",
  }
```

En dónde la dependencia `vite-plugin-pwa` es la principal para esto, y va de la mano con la siguiente configuración:

#### Config `vite-plugin-pwa`

``` ts
// vite.config.ts
import {VitePWA} from "vite-plugin-pwa";
export default defineConfig({
    plugins: [
        VitePWA({
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            },
            manifest: {
                name: 'AzulejoCode',
                short_name: 'AzulejoCode',
                description: 'My personal page AzulejoCode.',
                theme_color: '#ffffff',
            }
        })
    ],
})
```

En dónde la dependencia `@vite-pwa/assets-generator` permite agilizar el proceso de creación de las imagenes en sus
diferentes resoluciones para la PWA:

#### Config  `@vite-pwa/assets-generator`

``` ts
// pwa-assets.config.js
import {defineConfig, minimalPreset as preset} from '@vite-pwa/assets-generator/config'

export default defineConfig({
    preset,
    images: [
        'public/azulejo_profile_round.webp',
    ]
})
```

🚨 En caso de cambiar la imagen de base, es necesario ejecutar nuevamente el siguiente script del `package.json`:

```json
{
  "scripts": {
    "generate-pwa-assets": "pwa-assets-generator"
  }
}
```

***

### IDE JetBrains

Debido a que la version actual del plugin que usa el IDE para vue3 aun no está estable, se instalan las siguientes
dependencias que luego son usadas en el IDE. Estas dependencias no son necesarias para el proyecto, pero mejora la
calidad de las ayudas del IDE al desarrollar:

``` json
"devDependencies": {
"@volar/language-server": "2.4.0-alpha.18",
"@vue/language-server": "2.0.28",
}
```