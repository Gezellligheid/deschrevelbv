<template>
  <!-- Page Header -->
  <section class="bg-blue-950 text-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <span class="text-xs uppercase tracking-widest text-blue-300 font-semibold">Wat wij aanbieden</span>
      <h1 class="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">Onze diensten</h1>
      <p class="text-blue-200 text-lg max-w-2xl">
        Van enkelstuks tot kleine series — wij leveren nauwkeurig frees- en draaiwerk in diverse materialen, exact op
        maat van uw specificaties.
      </p>
    </div>
  </section>

  <!-- Diensten detail -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6 space-y-24">
      <!-- Freeswerk -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
            alt="Freeswerk"
            class="w-full h-72 object-cover"
          />
        </div>
        <div>
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-blue-950 mb-4">Freeswerk</h2>
          <p class="text-slate-600 leading-relaxed mb-4">
            Met onze CNC-freesmachines realiseren wij complexe vormen en contouren met hoge nauwkeurigheid. Of het nu
            gaat om prototypes of kleine series, elk stuk wordt met dezelfde zorg uitgevoerd.
          </p>
          <p class="text-slate-600 leading-relaxed mb-6">
            Wij werken in diverse materialen: staal, roestvrij staal, aluminium, messing, brons en kunststoffen.
          </p>
          <ul class="space-y-2">
            <li v-for="f in freesFeatures" :key="f" class="flex items-center gap-2 text-sm text-slate-700">
              <span class="w-1.5 h-1.5 bg-blue-950 rounded-full"></span>{{ f }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-100"></div>

      <!-- Draaiwerk -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-blue-950 mb-4">Draaiwerk</h2>
          <p class="text-slate-600 leading-relaxed mb-4">
            Onze draaibanken laten ons toe om cilindrische en ronde onderdelen te produceren met zeer nauwe toleranties.
            Van assen en bouten tot complexe gedraaide stukken.
          </p>
          <p class="text-slate-600 leading-relaxed mb-6">
            Zowel enkelstuks als kleine series, steeds met een onberispelijke oppervlakteafwerking.
          </p>
          <ul class="space-y-2">
            <li v-for="d in draaiFeatures" :key="d" class="flex items-center gap-2 text-sm text-slate-700">
              <span class="w-1.5 h-1.5 bg-blue-950 rounded-full"></span>{{ d }}
            </li>
          </ul>
        </div>
        <div class="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
            alt="Draaiwerk"
            class="w-full h-72 object-cover"
          />
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-slate-100"></div>

      <!-- Kwaliteitscontrole -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
            alt="Kwaliteitscontrole"
            class="w-full h-72 object-cover"
          />
        </div>
        <div>
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
            <svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-blue-950 mb-4">Kwaliteitscontrole</h2>
          <p class="text-slate-600 leading-relaxed mb-4">
            Elk onderdeel dat onze werkplaats verlaat, is streng gecontroleerd op maateisen en afwerking. Kwaliteit is
            geen bijzaak — het is onze standaard.
          </p>
          <p class="text-slate-600 leading-relaxed mb-6">
            Dankzij ons meetgereedschap en jarenlange ervaring garanderen wij dat elk stuk voldoet aan uw tekening.
          </p>
          <ul class="space-y-2">
            <li v-for="k in kwaliteitFeatures" :key="k" class="flex items-center gap-2 text-sm text-slate-700">
              <span class="w-1.5 h-1.5 bg-blue-950 rounded-full"></span>{{ k }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-blue-950 py-16 text-center text-white px-6">
    <h2 class="text-3xl font-bold mb-4">Klaar voor een vrijblijvende offerte?</h2>
    <p class="text-blue-200 mb-8 max-w-xl mx-auto">
      Stuur ons uw plannen of beschrijving en wij reageren zo snel mogelijk.
    </p>
    <a
      href="/contact"
      class="btn bg-white text-blue-950 hover:bg-blue-100 border-none font-semibold px-10 rounded-full"
    >
      Contacteer ons
    </a>
  </section>
</template>

<script setup lang="ts">
const freesFeatures = [
  "3-assig en meeras frezen",
  "Toleranties tot ±0,01 mm",
  "Enkelstuks en kleine series",
  "Diverse materiaalsoorten",
];
const draaiFeatures = [
  "CNC en conventioneel draaiwerk",
  "Diameters van Ø2 tot Ø300 mm",
  "Inwendige en uitwendige draden",
  "Gladde en geprofileerde oppervlakken",
];
const kwaliteitFeatures = [
  "Meting met 3D-meetapparatuur",
  "Controle conform tekening",
  "Certificaten op aanvraag",
  "Traceerbaarheid van materialen",
];
</script>
