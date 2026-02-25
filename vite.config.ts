import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import javaScriptObfuscator from "vite-plugin-javascript-obfuscator";

export default defineConfig({
  plugins: [
    vike(),
    tailwindcss(),
    vue(),
    // Only obfuscate during production builds
    javaScriptObfuscator({
      apply: "build",
      debugProtection: false,
      options: {
        // Rename identifiers, variables, functions, etc.
        identifierNamesGenerator: "hexadecimal",
        renameGlobals: false,
        // Control flow flattening makes code logic unreadable
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.5,
        // Dead code injection inserts random unused code
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.2,
        // String transformations
        stringArray: true,
        stringArrayEncoding: ["base64"],
        stringArrayThreshold: 0.75,
        stringArrayRotate: true,
        stringArrayShuffle: true,
        splitStrings: true,
        splitStringsChunkLength: 8,
        // Unicode escapes for strings
        unicodeEscapeSequence: false,
        // Self-defending prevents formatting/beautifying
        selfDefending: true,
        // Disable console output in production
        disableConsoleOutput: true,
        // Source map off — don't expose the original code
        sourceMap: false,
        // Compact output
        compact: true,
      },
    }),
  ],
  build: {
    // Use esbuild minification on top of obfuscation
    minify: "esbuild",
    // Prevent readable chunk names
    rollupOptions: {
      output: {
        // Hash-based file names for all assets
        chunkFileNames: "assets/[hash].js",
        entryFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash][extname]",
      },
    },
  },
});
