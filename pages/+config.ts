import type { Config } from "vike/types";
import vikePhoton from "vike-photon/config";
import vikeVue from "vike-vue/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Freddy Deschrevel BV – Frees- en Draaiwerk op Maat",

  description:
    "Freddy Deschrevel BV staat voor precisiewerk met een persoonlijk karakter. Hoogwaardig frees- en draaiwerk, direct contact en onberispelijke kwaliteit.",
  extends: [vikeVue, vikePhoton],
  prerender: true,
} as Config;
