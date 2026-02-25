<template>
  <!-- Page Header -->
  <section class="bg-blue-950 text-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <span class="text-xs uppercase tracking-widest text-blue-300 font-semibold">Ons verhaal</span>
      <h1 class="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">Over ons</h1>
      <p class="text-blue-200 text-lg max-w-2xl">
        Freddy Deschrevel BV — een klein, gepassioneerd team met een grote toewijding aan kwaliteit en precisie.
      </p>
    </div>
  </section>

  <!-- Intro split -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <span class="text-xs uppercase tracking-widest text-blue-600 font-semibold">Wie zijn wij</span>
        <h2 class="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-6">Vakmanschap als fundament</h2>
        <p class="text-slate-600 leading-relaxed mb-4">
          Freddy Deschrevel BV is een gespecialiseerde onderneming voor fijnmechanische bewerkingen. Met meer dan 25
          jaar ervaring in frees- en draaiwerk leveren wij onderdelen die voldoen aan de strengste maateisen.
        </p>
        <p class="text-slate-600 leading-relaxed mb-4">
          Wij zijn geen anonieme massaproducent. Bij ons heeft u directe lijn met de vakman die uw stukken maakt. Dat
          zorgt voor snelle communicatie, flexibiliteit en een eindresultaat dat precies is zoals afgesproken.
        </p>
        <p class="text-slate-600 leading-relaxed">
          Van enkelstuks en prototypes tot kleine en middelgrote series — wij passen ons aan uw noden aan en denken
          actief mee over de meest efficiënte productiemethode.
        </p>
      </div>
      <div class="relative">
        <div class="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
            alt="Werkplaats"
            class="w-full h-96 object-cover"
          />
        </div>
        <div class="absolute -bottom-6 -left-6 bg-blue-950 text-white rounded-xl p-5 shadow-lg hidden md:block">
          <div class="text-3xl font-bold">25+</div>
          <div class="text-blue-200 text-xs mt-1">jaar ervaring</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Waarden -->
  <section class="py-24 bg-slate-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs uppercase tracking-widest text-blue-600 font-semibold">Onze waarden</span>
        <h2 class="text-3xl md:text-4xl font-bold text-blue-950 mt-2">Waarom klanten voor ons kiezen</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="val in values" :key="val.title" class="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
          <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5" v-html="val.icon"></div>
          <h3 class="font-bold text-blue-950 text-lg mb-3">{{ val.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ val.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Machines / capabilities -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <span class="text-xs uppercase tracking-widest text-blue-600 font-semibold">Onze uitrusting</span>
        <h2 class="text-3xl font-bold text-blue-950 mt-2 mb-6">Moderne machines, bewezen kwaliteit</h2>
        <p class="text-slate-600 leading-relaxed mb-6">
          Onze werkplaats is uitgerust met moderne CNC-freesmachines en CNC-draaibanken die ons in staat stellen om
          complexe bewerkingen met hoge herhaalbaarheid uit te voeren.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="cap in capabilities" :key="cap.label" class="bg-slate-50 rounded-xl p-4">
            <div class="text-2xl font-bold text-blue-950">{{ cap.value }}</div>
            <div class="text-xs text-slate-500 mt-1">{{ cap.label }}</div>
          </div>
        </div>
      </div>
      <div class="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80"
          alt="CNC Machine"
          class="w-full h-80 object-cover"
        />
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-blue-950 py-16 text-center text-white px-6">
    <h2 class="text-3xl font-bold mb-4">Interesse? Neem contact op.</h2>
    <p class="text-blue-200 mb-8 max-w-xl mx-auto">
      Wij bespreken graag uw project en bekijken samen de mogelijkheden.
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
const values = [
  {
    title: "Persoonlijk contact",
    desc: "U werkt rechtstreeks met de vakman die uw stukken maakt. Geen tussenpersonen, snelle beslissingen.",
    icon: `<svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
  },
  {
    title: "Hoge nauwkeurigheid",
    desc: "Elk onderdeel wordt vervaardigd en gecontroleerd met het oog op de nauwste toleranties.",
    icon: `<svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  },
  {
    title: "Flexibel & snel",
    desc: "Dringende opdrachten? Kleine aantallen? Aanpassingen last-minute? Wij schikken ons naar uw planning.",
    icon: `<svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  },
  {
    title: "Brede materiaalkeuze",
    desc: "Staal, RVS, aluminium, messing, brons, titan, kunststoffen — wij werken met het materiaal van uw keuze.",
    icon: `<svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`,
  },
  {
    title: "Technisch meedenken",
    desc: "Wij adviseren u graag over productiemethode, materiaalkeuze of ontwerp om kosten en kwaliteit te optimaliseren.",
    icon: `<svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
  },
  {
    title: "Betrouwbare levering",
    desc: "Afspraken nakomen is voor ons vanzelfsprekend. U weet altijd waar u aan toe bent.",
    icon: `<svg class="w-6 h-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
  },
];

const capabilities = [
  { value: "3-5-as", label: "CNC frezen" },
  { value: "Ø300", label: "Max. draaidia." },
  { value: "±0,01", label: "Tolerantie (mm)" },
  { value: "24u", label: "Spoed mogelijk" },
];
</script>
