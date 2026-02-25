<template>
  <!-- ─── HERO ─────────────────────────────────────────────── -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background image -->
    <img
      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80"
      alt="CNC precisiewerk"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- Dark blue overlay -->
    <div class="absolute inset-0 bg-blue-950/75"></div>

    <!-- Hero content -->
    <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
      <span class="inline-block uppercase tracking-[0.2em] text-blue-300 text-xs font-semibold mb-6">
        Precisie · Kwaliteit · Vakmanschap
      </span>
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
        Precisiewerk met een<br />
        <span class="text-blue-300">persoonlijk karakter</span>
      </h1>
      <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
        Hoogwaardig frees- en draaiwerk op maat. Geen anonieme fabriek, maar direct contact, flexibiliteit en
        onberispelijke kwaliteit — precies zoals u het wenst.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          class="btn bg-white text-blue-950 hover:bg-blue-50 border-none font-semibold px-8 rounded-full"
        >
          Vraag een offerte aan
        </a>
        <a
          href="/diensten"
          class="btn btn-outline border-white text-white hover:bg-white hover:text-blue-950 px-8 rounded-full"
        >
          Onze diensten
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>

  <!-- ─── STATS / USPs ─────────────────────────────────────── -->
  <section class="bg-blue-950 py-12">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
      <div>
        <div class="text-4xl font-bold text-blue-300 mb-1">25+</div>
        <div class="text-sm text-blue-200 uppercase tracking-wide">Jaar ervaring</div>
      </div>
      <div>
        <div class="text-4xl font-bold text-blue-300 mb-1">100%</div>
        <div class="text-sm text-blue-200 uppercase tracking-wide">Kwaliteitscontrole</div>
      </div>
      <div>
        <div class="text-4xl font-bold text-blue-300 mb-1">Direct</div>
        <div class="text-sm text-blue-200 uppercase tracking-wide">Persoonlijk contact</div>
      </div>
    </div>
  </section>

  <!-- ─── DIENSTEN ─────────────────────────────────────────── -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs uppercase tracking-widest text-blue-600 font-semibold">Wat wij doen</span>
        <h2 class="text-3xl md:text-4xl font-bold text-blue-950 mt-2">Onze diensten</h2>
        <p class="text-slate-500 mt-4 max-w-xl mx-auto">
          Met moderne machines en jarenlange expertise leveren wij nauwkeurige onderdelen voor elke sector.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Freeswerk -->
        <div
          class="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
        >
          <div class="overflow-hidden h-48">
            <img
              src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80"
              alt="Freeswerk"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-6">
            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 class="font-bold text-blue-950 text-lg mb-2">Freeswerk</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Nauwkeurig frezen van complexe vormen en contouren in diverse materialen. Van proto tot serie.
            </p>
            <a
              href="/diensten"
              class="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-4 hover:gap-2 transition-all"
            >
              Meer info
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Draaiwerk -->
        <div
          class="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
        >
          <div class="overflow-hidden h-48">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80"
              alt="Draaiwerk"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-6">
            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 class="font-bold text-blue-950 text-lg mb-2">Draaiwerk</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Precisie draaiwerk voor ronde en cilindrische onderdelen met nauwe toleranties en strakke afwerkingen.
            </p>
            <a
              href="/diensten"
              class="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-4 hover:gap-2 transition-all"
            >
              Meer info
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Maatwerk -->
        <div
          class="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
        >
          <div class="overflow-hidden h-48">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
              alt="Maatwerk"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-6">
            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-blue-950 text-lg mb-2">Kwaliteitscontrole</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              Elk onderdeel wordt streng gecontroleerd voor levering. Wij garanderen de hoogste nauwkeurigheid.
            </p>
            <a
              href="/diensten"
              class="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-4 hover:gap-2 transition-all"
            >
              Meer info
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── OVER ONS ──────────────────────────────────────────── -->
  <section class="py-24 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Image -->
      <div class="relative">
        <div class="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
            alt="Werkplaats Freddy Deschrevel"
            class="w-full h-80 md:h-96 object-cover"
          />
        </div>
        <!-- Accent card -->
        <div class="absolute -bottom-6 -right-6 bg-blue-950 text-white rounded-xl p-5 shadow-lg hidden md:block">
          <div class="text-3xl font-bold">25+</div>
          <div class="text-blue-200 text-xs mt-1">jaar vakmanschap</div>
        </div>
      </div>

      <!-- Text -->
      <div>
        <span class="text-xs uppercase tracking-widest text-blue-600 font-semibold">Over ons</span>
        <h2 class="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-6">Klein team,<br />groot vakmanschap</h2>
        <p class="text-slate-600 leading-relaxed mb-4">
          Freddy Deschrevel BV staat voor precisiewerk met een persoonlijk karakter. Wij zijn een klein, toegewijd team
          gespecialiseerd in hoogwaardig frees- en draaiwerk.
        </p>
        <p class="text-slate-600 leading-relaxed mb-8">
          Geen anonieme fabriek, maar direct contact, flexibiliteit en onberispelijke kwaliteit. Uw onderdelen worden
          met zorg en vakmanschap vervaardigd, precies volgens uw wensen.
        </p>
        <ul class="space-y-3 mb-8">
          <li v-for="item in usps" :key="item" class="flex items-center gap-3 text-slate-700 text-sm">
            <div class="w-5 h-5 bg-blue-950 rounded-full flex items-center justify-center shrink-0">
              <svg class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {{ item }}
          </li>
        </ul>
        <a href="/over-ons" class="btn bg-blue-950 text-white hover:bg-blue-800 border-none rounded-full px-8">
          Lees meer over ons
        </a>
      </div>
    </div>
  </section>

  <!-- ─── WERKWIJZE ─────────────────────────────────────────── -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs uppercase tracking-widest text-blue-600 font-semibold">Hoe wij werken</span>
        <h2 class="text-3xl md:text-4xl font-bold text-blue-950 mt-2">Simpel en transparant</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(step, i) in steps" :key="i" class="text-center px-4">
          <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl font-bold text-blue-950">{{ i + 1 }}</span>
          </div>
          <h3 class="font-semibold text-blue-950 mb-2">{{ step.title }}</h3>
          <p class="text-slate-500 text-sm">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── CONTACT CTA ───────────────────────────────────────── -->
  <section class="relative py-28 overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1565043589587-943b86cdbe1a?w=1600&q=80"
      alt="Werkplaats"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-blue-950/85"></div>
    <div class="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
      <span class="text-xs uppercase tracking-widest text-blue-300 font-semibold">Klaar om te starten?</span>
      <h2 class="text-3xl md:text-5xl font-bold mt-3 mb-6">Laat ons uw onderdelen realiseren</h2>
      <p class="text-blue-100 text-lg mb-10 leading-relaxed">
        Stuur ons uw tekeningen of specificaties en wij bezorgen u snel een vrijblijvende offerte. Persoonlijk contact,
        eerlijke prijs.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          class="btn bg-white text-blue-950 hover:bg-blue-50 border-none font-semibold px-8 rounded-full text-base"
        >
          Neem contact op
        </a>
        <a
          href="mailto:info@freddydeschrevelbv.be"
          class="btn btn-outline border-white text-white hover:bg-white hover:text-blue-950 px-8 rounded-full text-base"
        >
          Stuur een e-mail
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const usps = [
  "Direct contact met de vakman",
  "Snelle levertijden op maat",
  "Nauwe toleranties gegarandeerd",
  "Kleine en grote series mogelijk",
  "Diverse materialen: staal, aluminium, messing…",
];

const steps = [
  { title: "Contact opnemen", desc: "Stuur uw tekening of beschrijving via mail of telefoon." },
  { title: "Offerte ontvangen", desc: "U ontvangt snel een transparante en eerlijke prijsofferte." },
  { title: "Productie starten", desc: "Na uw goedkeuring gaan wij direct aan de slag." },
  { title: "Levering", desc: "Uw onderdelen worden zorgvuldig gecontroleerd en geleverd." },
];
</script>
