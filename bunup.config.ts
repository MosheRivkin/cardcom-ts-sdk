import { defineConfig, type DefineConfigItem } from 'bunup';
import { exports, unused } from 'bunup/plugins';
import type { Arrayable } from 'node_modules/bunup/dist/shared/bunup-zenttvjh';

const config: Arrayable<DefineConfigItem> = defineConfig({
    entry: 'src/index.ts',
    format: ['esm'],
    dts: { minify: true, splitting: true },
    plugins: [exports(), unused()],
    clean: true,
    external: ['typescript', 'zod'],
    minify: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
});
export default config;