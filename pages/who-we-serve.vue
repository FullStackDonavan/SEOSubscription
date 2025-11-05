<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Who We Serve
        </h1>
        <p class="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-300">
          We specialize in high-intent, local lead generation programs for service businesses. Here are the niches we focus on.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Restoration -->
        <div class="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300">
              <Icon name="mdi:home-wrench" size="28" />
            </div>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Restoration</h3>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Mold, water, fire, and storm restoration. Drive emergency and scheduled jobs with map-pack domination and conversion-first pages.
          </p>
          <nuxt-link to="/restoration-marketing-program" class="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
            Explore the Restoration Program
            <Icon name="mdi:chevron-right" class="ml-1" />
          </nuxt-link>
        </div>

        <!-- Insurance/Brokers -->
        <div class="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300">
              <Icon name="mdi:shield-check" size="28" />
            </div>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Insurance / Brokers</h3>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Local intent capture for auto, home, life, and commercial lines. Built to increase quote requests and inbound calls.
          </p>
          <nuxt-link to="/insurance-broker-marketing-program" class="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
            Explore the Insurance Program
            <Icon name="mdi:chevron-right" class="ml-1" />
          </nuxt-link>
        </div>

        <!-- Water Treatment -->
        <div class="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-300">
              <Icon name="mdi:water" size="28" />
            </div>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Water Treatment</h3>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Filtration and softener installs, repairs, and maintenance. Content tuned for search + clear CTAs to book onsite evaluations.
          </p>
          <nuxt-link to="/water-treatment-marketing-program" class="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
            Explore the Water Treatment Program
            <Icon name="mdi:chevron-right" class="ml-1" />
          </nuxt-link>
        </div>

        <!-- House Painting -->
        <div class="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition">
          <div class="flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300">
              <Icon name="mdi:format-paint" size="28" />
            </div>
          </div>
          <h3 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">House Painting</h3>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Interior, exterior, and specialty coatings. Built-in SAB playbook to win more neighborhoods and repeat work.
          </p>
          <nuxt-link to="/house-painting-marketing-program" class="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
            Explore the Painting Program
            <Icon name="mdi:chevron-right" class="ml-1" />
          </nuxt-link>
        </div>
      </div>

      <div class="mt-16">
        <WeProvideThePlanCTA />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Page is static; icons provided by nuxt-icon
</script>

<style scoped>
</style>
