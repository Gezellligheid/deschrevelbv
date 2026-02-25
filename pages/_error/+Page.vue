<template>
  <section class="min-h-[60vh] flex items-center justify-center px-6">
    <div class="text-center max-w-md">
      <div class="text-8xl font-bold text-blue-950/10 mb-4">{{ is404 ? "404" : "500" }}</div>
      <h1 class="text-2xl font-bold text-blue-950 mb-3">{{ heading }}</h1>
      <p class="text-slate-500 mb-8">{{ abortReason }}</p>
      <a href="/" class="btn bg-blue-950 text-white hover:bg-blue-800 border-none rounded-full px-8">
        Terug naar home
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { usePageContext } from "vike-vue/usePageContext";

const pageContext = usePageContext();
let { is404, abortReason } = pageContext;
if (!abortReason) {
  abortReason = is404 ? "Deze pagina kon niet gevonden worden." : "Er is iets fout gegaan.";
}
const heading = is404 ? "Pagina niet gevonden" : "Interne fout";
</script>
