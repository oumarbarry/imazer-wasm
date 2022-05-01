import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [
    [
      'bgs',
      'fixed inset-y-0 -inset-x-2/4 opacity-50 z-0 bg-gradient-to-r from-green-400 to-blue-500',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),

    presetWebFonts({
      fonts: {
        cursive: 'Pacifico',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
