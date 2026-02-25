import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import javaScriptObfuscator from "vite-plugin-javascript-obfuscator";
import { minify } from "vite-plugin-minify";

export default defineConfig({
  plugins: [
    vike(),
    tailwindcss(),
    vue(),
    // Minify prerendered HTML files (strips whitespace, comments, redundant attributes)
    minify(),
    // JS obfuscation — production builds only
    javaScriptObfuscator({
      apply: "build",
      debugProtection: false,
      options: {
        identifierNamesGenerator: "hexadecimal",
        renameGlobals: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.5,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.2,
        stringArray: true,
        stringArrayEncoding: ["base64"],
        stringArrayThreshold: 0.75,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        splitStrings: true,
        splitStringsChunkLength: 8,
        unicodeEscapeSequence: false,
        selfDefending: true,
        disableConsoleOutput: true,
        sourceMap: false,
        compact: true,
      },
    }),
  ],
  build: {
    minify: "esbuild",
    // Better CSS minification: removes whitespace, merges rules, shortens values
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[hash].js",
        entryFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash][extname]",
      },
    },
  },
});
