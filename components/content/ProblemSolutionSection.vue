<template>
  <section :class="sectionClass">
    <h1 v-if="title" class="mb-4">{{ title }}</h1>
    <div class="grid gap-8 md:grid-cols-2">
      <div>
        <h2 class="mt-0">{{ problem.heading || 'The Problem' }}</h2>
        <p v-if="typeof problem.description === 'string'">{{ problem.description }}</p>
        <template v-else>
          <p v-for="(p, i) in problem.description" :key="'pd'+i">{{ p }}</p>
        </template>
        <ul v-if="problem.points?.length" class="list-disc pl-6">
          <li v-for="(pt, i) in problem.points" :key="'pp'+i">{{ pt }}</li>
        </ul>
        <slot name="problem-extra" />
      </div>
      <div>
        <h2 class="mt-0">{{ solution.heading || 'Our Solution' }}</h2>
        <p v-if="typeof solution.description === 'string'">{{ solution.description }}</p>
        <template v-else>
          <p v-for="(p, i) in solution.description" :key="'sd'+i">{{ p }}</p>
        </template>
        <ul v-if="solution.points?.length" class="list-disc pl-6">
          <li v-for="(pt, i) in solution.points" :key="'sp'+i">{{ pt }}</li>
        </ul>
        <slot name="solution-extra" />
      </div>
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
  const base = 'prose dark:prose-invert max-w-3xl mx-auto my-10'
  return `${base} ${props.containerClass || ''}`.trim()
})
</script>
