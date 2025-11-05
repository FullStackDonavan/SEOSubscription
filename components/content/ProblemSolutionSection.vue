<template>
  <section :class="sectionClass">
    <h1 v-if="title" class="text-2xl font-bold mb-4">{{ title }}</h1>
    <div class="not-prose grid gap-8 md:grid-cols-2">
      <!-- Problem Card -->
      <div class="h-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-6">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">{{ problem.heading || 'The Problem' }}</h3>
        <div class="space-y-3 text-slate-700 dark:text-slate-200">
          <p v-if="typeof problem.description === 'string'">{{ problem.description }}</p>
          <template v-else>
            <p v-for="(p, i) in problem.description" :key="'pd'+i">{{ p }}</p>
          </template>
          <ul v-if="problem.points?.length" class="list-disc pl-5 space-y-1">
            <li v-for="(pt, i) in problem.points" :key="'pp'+i">{{ pt }}</li>
          </ul>
        </div>
        <slot name="problem-extra" />
      </div>

      <!-- Solution Card -->
      <div class="h-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-6">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white mb-2">{{ solution.heading || 'Our Solution' }}</h3>
        <div class="space-y-3 text-slate-700 dark:text-slate-200">
          <p v-if="typeof solution.description === 'string'">{{ solution.description }}</p>
          <template v-else>
            <p v-for="(p, i) in solution.description" :key="'sd'+i">{{ p }}</p>
          </template>
          <ul v-if="solution.points?.length" class="list-disc pl-5 space-y-1">
            <li v-for="(pt, i) in solution.points" :key="'sp'+i">{{ pt }}</li>
          </ul>
        </div>
        <slot name="solution-extra" />
      </div>
    </div>

    <!-- Suggested imagery as cards -->
    <div v-if="suggestedImagery?.length" class="not-prose mt-10">
      <h3 class="text-base font-semibold text-slate-900 dark:text-white">Suggested imagery</h3>
      <div class="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(img, i) in suggestedImagery" :key="'si'+i" class="rounded-lg border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 p-4">
          <div class="font-medium text-slate-900 dark:text-white">{{ img.label }}</div>
          <div v-if="img.file" class="text-xs text-slate-600 dark:text-slate-300 mt-1">
            file: <code>{{ img.file }}</code>
          </div>
        </div>
      </div>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ProblemSolutionBlock {
  heading?: string
  description?: string | string[]
  points?: string[]
}

interface ImageryItem {
  label: string
  file?: string
}

const props = defineProps<{
  title?: string
  problem: ProblemSolutionBlock
  solution: ProblemSolutionBlock
  suggestedImagery?: ImageryItem[]
  containerClass?: string
  dense?: boolean
}>()

const sectionClass = computed(() => {
  const base = 'container mx-auto my-10'
  return `${base} ${props.containerClass || ''}`.trim()
})
</script>
