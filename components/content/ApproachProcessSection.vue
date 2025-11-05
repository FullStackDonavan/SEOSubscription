<template>
  <section :class="sectionClass">
    <h1 v-if="title" class="mb-4">{{ title }}</h1>

    <div v-if="intro">
      <p v-if="typeof intro === 'string'">{{ intro }}</p>
      <template v-else>
        <p v-for="(p, i) in intro" :key="'intro'+i">{{ p }}</p>
      </template>
    </div>

    <div v-if="steps?.length" class="mt-6">
      <h2 v-if="stepsTitle">{{ stepsTitle }}</h2>
      <ol class="list-decimal pl-6 space-y-2">
        <li v-for="(s, i) in steps" :key="'step'+i">
          <div v-if="s.title" class="font-semibold">{{ s.title }}</div>
          <div v-if="s.description">{{ s.description }}</div>
          <div v-if="s.duration" class="text-sm opacity-70">Estimated: {{ s.duration }}</div>
        </li>
      </ol>
    </div>

    <div v-if="outcomes?.length" class="mt-6">
      <h2 v-if="outcomesTitle">{{ outcomesTitle }}</h2>
      <ul class="list-disc pl-6">
        <li v-for="(o, i) in outcomes" :key="'out'+i">{{ o }}</li>
      </ul>
    </div>

    <div v-if="ctaText && ctaHref" class="mt-6">
      <nuxt-link :to="ctaHref" class="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-500 transition">
        {{ ctaText }}
      </nuxt-link>
    </div>

    <div v-if="suggestedImagery?.length" class="mt-8">
      <h3>Suggested imagery</h3>
      <ul class="list-disc pl-6">
        <li v-for="(img, i) in suggestedImagery" :key="'si'+i">
          <span v-if="img.label">{{ img.label }}</span>
          <template v-if="img.file"> — file: <code>{{ img.file }}</code></template>
        </li>
      </ul>
    </div>

    <slot />
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

const sectionClass = computed(() => {
  const base = 'prose dark:prose-invert max-w-3xl mx-auto my-10'
  return `${base} ${props.containerClass || ''}`.trim()
})
</script>
