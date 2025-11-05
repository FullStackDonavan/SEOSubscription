<template>
  <section class="w-full bg-slate-50 dark:bg-slate-900/50 shadow-lg" :class="isDense ? 'py-8' : 'py-10'">
    <div :class="sectionClass">
      <h1
        v-if="title"
        :class="[
          isDense ? 'mb-3 text-xl md:text-2xl' : 'mb-4 text-2xl md:text-3xl',
          'font-semibold tracking-tight text-slate-900 dark:text-white'
        ]"
      >
        {{ title }}
      </h1>

      <!-- Intro, compact by default -->
      <div v-if="intro" class="not-prose" :class="isDense ? 'text-sm text-slate-700 dark:text-slate-200 mb-4' : 'mb-6'">
        <p v-if="typeof intro === 'string'">{{ intro }}</p>
        <template v-else>
          <p v-for="(p, i) in intro" :key="'intro'+i">{{ p }}</p>
        </template>
      </div>

    <!-- Two-column layout: Steps (left) | Outcomes + CTA + Imagery (right) -->
    <div class="not-prose grid md:grid-cols-2 md:gap-6 gap-4">
      <!-- Left column: Steps as compact cards grid -->
      <div v-if="steps?.length">
        <h2 v-if="stepsTitle" :class="[
          isDense ? 'text-base' : 'text-lg',
          'mb-2 font-semibold text-slate-900 dark:text-white pl-3 border-l-4 border-indigo-500/70'
        ]">{{ stepsTitle }}</h2>
        <div :class="isDense ? 'grid sm:grid-cols-2 gap-3' : 'space-y-3'">
          <div v-for="(s, i) in steps" :key="'step'+i" class="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm" :class="isDense ? 'p-4' : 'p-5'">
            <div v-if="s.title" :class="['font-semibold', isDense ? 'text-slate-900 dark:text-white text-sm' : '']">{{ s.title }}</div>
            <div v-if="s.description" :class="isDense ? 'text-sm text-slate-700 dark:text-slate-200 mt-1' : 'mt-1'">{{ s.description }}</div>
            <div v-if="s.duration" :class="isDense ? 'text-xs opacity-70 mt-2' : 'text-sm opacity-70 mt-2'">Estimated: {{ s.duration }}</div>
          </div>
        </div>
      </div>

      <!-- Right column: Outcomes, Imagery (compact) -->
      <div class="flex flex-col">
        <div v-if="outcomes?.length">
          <h2 v-if="outcomesTitle" :class="[
            isDense ? 'text-base' : 'text-lg',
            'mb-2 font-semibold text-slate-900 dark:text-white pl-3 border-l-4 border-indigo-500/70'
          ]">{{ outcomesTitle }}</h2>
          <div class="grid gap-2" :class="isDense ? 'sm:grid-cols-2' : ''">
            <div v-for="(o, i) in outcomes" :key="'out'+i" class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200" :class="isDense ? 'text-sm px-3 py-2' : 'px-4 py-2'">
              {{ o }}
            </div>
          </div>
        </div>

        <div v-if="suggestedImagery?.length" :class="isDense ? 'mt-6' : 'mt-8'">
          <h3 :class="[
            isDense ? 'text-sm' : 'text-base',
            'font-semibold text-slate-900 dark:text-white uppercase tracking-wide'
          ]">Suggested imagery</h3>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-2 mt-2">
            <div v-for="(img, i) in suggestedImagery" :key="'si'+i" class="rounded-md border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70" :class="isDense ? 'p-3' : 'p-4'">
              <div class="font-medium text-slate-900 dark:text-white" :class="isDense ? 'text-sm' : ''">{{ img.label }}</div>
              <div v-if="img.file" class="text-slate-600 dark:text-slate-300 mt-1" :class="isDense ? 'text-xs' : 'text-sm'">
                file: <code>{{ img.file }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA button in its own row -->
    <div v-if="ctaText && ctaHref" :class="isDense ? 'mt-6' : 'mt-8'" class="not-prose">
      <nuxt-link :to="ctaHref" class="inline-flex items-center rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition" :class="isDense ? 'px-3 py-2 text-sm' : 'px-4 py-2'">
        {{ ctaText }}
      </nuxt-link>
    </div>

    <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Step {
  title?: string
  description?: string
  duration?: string
}

interface ImageryItem {
  label: string
  file?: string
}

const props = defineProps<{
  title?: string
  intro?: string | string[]
  steps?: Step[]
  stepsTitle?: string
  outcomes?: string[]
  outcomesTitle?: string
  ctaText?: string
  ctaHref?: string
  suggestedImagery?: ImageryItem[]
  containerClass?: string
  dense?: boolean
}>()

const isDense = computed(() => props.dense ?? true)

const sectionClass = computed(() => {
  const base = 'container mx-auto'
  return `${base} ${props.containerClass || ''}`.trim()
})
</script>
