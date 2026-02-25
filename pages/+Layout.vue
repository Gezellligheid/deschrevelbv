<!-- https://vike.dev/Layout -->

<template>
  <!-- Navbar -->
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
      <!-- Logo / Brand -->
      <a href="/" class="flex items-center gap-2 group">
        <div class="w-8 h-8 bg-blue-950 rounded flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <span class="font-bold text-blue-950 text-lg tracking-tight"
          >Freddy Deschrevel <span class="text-blue-600">BV</span></span
        >
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="/" class="text-sm font-medium text-slate-600 hover:text-blue-950 transition-colors">Home</a>
        <a href="/diensten" class="text-sm font-medium text-slate-600 hover:text-blue-950 transition-colors"
          >Diensten</a
        >
        <a href="/over-ons" class="text-sm font-medium text-slate-600 hover:text-blue-950 transition-colors"
          >Over ons</a
        >
        <a href="/contact" class="btn btn-sm bg-blue-950 text-white border-none hover:bg-blue-800 rounded-full px-5">
          Contact
        </a>
      </nav>

      <!-- Mobile menu button -->
      <div class="md:hidden dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-sm">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-white shadow-lg rounded-box w-52 mt-2 p-2 border border-slate-100"
        >
          <li><a href="/" class="text-slate-700">Home</a></li>
          <li><a href="/diensten" class="text-slate-700">Diensten</a></li>
          <li><a href="/over-ons" class="text-slate-700">Over ons</a></li>
          <li><a href="/contact" class="text-blue-950 font-semibold">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Page content -->
  <div id="page-content">
    <slot />
  </div>

  <!-- Footer -->
  <footer class="bg-blue-950 text-white">
    <div class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-2 mb-4">
          <div class="w-7 h-7 bg-white/20 rounded flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <span class="font-bold text-white">Freddy Deschrevel BV</span>
        </div>
        <p class="text-blue-200 text-sm leading-relaxed">
          Precisiewerk met een persoonlijk karakter. Hoogwaardig frees- en draaiwerk op maat.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navigatie</h4>
        <ul class="space-y-2">
          <li><a href="/" class="text-blue-200 hover:text-white text-sm transition-colors">Home</a></li>
          <li><a href="/diensten" class="text-blue-200 hover:text-white text-sm transition-colors">Diensten</a></li>
          <li><a href="/over-ons" class="text-blue-200 hover:text-white text-sm transition-colors">Over ons</a></li>
          <li><a href="/contact" class="text-blue-200 hover:text-white text-sm transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Contact info -->
      <div>
        <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
        <ul class="space-y-2 text-sm text-blue-200">
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            info@freddydeschrevelbv.be
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +32 (0)xx xxx xx xx
          </li>
          <li class="flex items-center gap-2">
            <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            België
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-blue-900 py-4">
      <p class="text-center text-blue-300 text-xs">© 2025 Freddy Deschrevel BV. All rights reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style>
body {
  margin: 0;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
  background-color: #ffffff;
  color: #0f172a;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
/* Page Transition */
#page-content {
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
body.page-transition #page-content {
  opacity: 0;
}
</style>
