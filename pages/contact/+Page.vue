<template>
  <!-- Page Header -->
  <section class="bg-blue-950 text-white py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <span class="text-xs uppercase tracking-widest text-blue-300 font-semibold">Kom in contact</span>
      <h1 class="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">Contact</h1>
      <p class="text-blue-200 text-lg max-w-2xl">
        Stuur ons uw tekening of beschrijving en ontvang snel een vrijblijvende offerte. Wij horen graag van u.
      </p>
    </div>
  </section>

  <!-- Contact content -->
  <section class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <!-- Contact form -->
      <div>
        <h2 class="text-2xl font-bold text-blue-950 mb-2">Stuur ons een bericht</h2>
        <p class="text-slate-500 mb-8 text-sm">Vul het formulier in en wij nemen zo snel mogelijk contact met u op.</p>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="form-control">
              <label class="label pb-1">
                <span class="label-text text-slate-700 font-medium text-sm">Voornaam</span>
              </label>
              <input
                v-model="form.firstName"
                type="text"
                placeholder="Jan"
                class="input input-bordered w-full bg-white border-slate-200 focus:border-blue-950 focus:outline-none text-sm"
                required
              />
            </div>
            <div class="form-control">
              <label class="label pb-1">
                <span class="label-text text-slate-700 font-medium text-sm">Achternaam</span>
              </label>
              <input
                v-model="form.lastName"
                type="text"
                placeholder="Janssen"
                class="input input-bordered w-full bg-white border-slate-200 focus:border-blue-950 focus:outline-none text-sm"
                required
              />
            </div>
          </div>

          <div class="form-control">
            <label class="label pb-1">
              <span class="label-text text-slate-700 font-medium text-sm">Bedrijf (optioneel)</span>
            </label>
            <input
              v-model="form.company"
              type="text"
              placeholder="Mijn Bedrijf NV"
              class="input input-bordered w-full bg-white border-slate-200 focus:border-blue-950 focus:outline-none text-sm"
            />
          </div>

          <div class="form-control">
            <label class="label pb-1">
              <span class="label-text text-slate-700 font-medium text-sm">E-mailadres</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="jan@bedrijf.be"
              class="input input-bordered w-full bg-white border-slate-200 focus:border-blue-950 focus:outline-none text-sm"
              required
            />
          </div>

          <div class="form-control">
            <label class="label pb-1">
              <span class="label-text text-slate-700 font-medium text-sm">Telefoonnummer (optioneel)</span>
            </label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="+32 4xx xx xx xx"
              class="input input-bordered w-full bg-white border-slate-200 focus:border-blue-950 focus:outline-none text-sm"
            />
          </div>

          <div class="form-control">
            <label class="label pb-1">
              <span class="label-text text-slate-700 font-medium text-sm">Uw vraag of aanvraag</span>
            </label>
            <textarea
              v-model="form.message"
              placeholder="Omschrijf uw project, het materiaal, de aantallen en eventuele tolerantievereisten…"
              rows="5"
              class="textarea textarea-bordered w-full bg-white border-slate-200 focus:border-blue-950 focus:outline-none text-sm leading-relaxed"
              required
            ></textarea>
          </div>

          <div v-if="submitted" class="alert bg-blue-50 border border-blue-200 text-blue-900 text-sm rounded-xl">
            <svg class="w-5 h-5 shrink-0 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Bedankt! Wij nemen zo snel mogelijk contact met u op.</span>
          </div>

          <button
            type="submit"
            class="btn bg-blue-950 text-white hover:bg-blue-800 border-none w-full rounded-full font-semibold"
            :disabled="submitted"
          >
            {{ submitted ? "Verstuurd!" : "Verstuur aanvraag" }}
          </button>
        </form>
      </div>

      <!-- Contact info -->
      <div class="flex flex-col gap-8">
        <div>
          <h2 class="text-2xl font-bold text-blue-950 mb-2">Contactgegevens</h2>
          <p class="text-slate-500 text-sm mb-8">Of neem rechtstreeks contact op via onderstaande gegevens.</p>

          <div class="space-y-5">
            <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
              <div
                class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                v-html="info.icon"
              ></div>
              <div>
                <div class="text-xs uppercase tracking-wider text-slate-400 font-medium mb-0.5">{{ info.label }}</div>
                <div class="text-slate-700 font-medium text-sm">{{ info.value }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div
          class="flex-1 rounded-2xl overflow-hidden shadow-sm border border-slate-100 min-h-64 bg-slate-100 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
            alt="Locatie"
            class="w-full h-full object-cover opacity-60"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-white rounded-xl shadow-lg px-5 py-3 text-center">
              <div class="text-blue-950 font-bold text-sm">Freddy Deschrevel BV</div>
              <div class="text-slate-500 text-xs mt-0.5">België</div>
            </div>
          </div>
        </div>

        <!-- Opening hours -->
        <div class="bg-slate-50 rounded-2xl p-6">
          <h3 class="font-bold text-blue-950 mb-4 text-sm uppercase tracking-wider">Openingsuren</h3>
          <div class="space-y-2">
            <div v-for="h in hours" :key="h.day" class="flex justify-between text-sm">
              <span class="text-slate-600">{{ h.day }}</span>
              <span class="font-medium text-blue-950">{{ h.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
});

const submitted = ref(false);

function handleSubmit() {
  // In production, send to your backend / email service
  submitted.value = true;
}

const contactInfo = [
  {
    label: "E-mail",
    value: "info@freddydeschrevelbv.be",
    icon: `<svg class="w-5 h-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  },
  {
    label: "Telefoon",
    value: "+32 (0)xx xxx xx xx",
    icon: `<svg class="w-5 h-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
  },
  {
    label: "Adres",
    value: "België",
    icon: `<svg class="w-5 h-5 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  },
];

const hours = [
  { day: "Maandag – Vrijdag", time: "08:00 – 17:00" },
  { day: "Zaterdag", time: "Op afspraak" },
  { day: "Zondag", time: "Gesloten" },
];
</script>
