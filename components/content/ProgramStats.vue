<template>
  <section class="w-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(stat, index) in computedStats"
          :key="index"
          ref="statCards"
          class="group relative rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 p-6"
        >
          <!-- Icon -->
          <div v-if="stat.icon" class="mb-4">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
              <Icon v-if="stat.icon.startsWith('mdi')" :name="stat.icon" class="w-6 h-6" />
              <img v-else :src="stat.icon" :alt="stat.title" class="w-6 h-6" />
            </div>
          </div>

          <!-- Value with counter animation -->
          <div class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
            <span v-if="stat.animated && stat.animatedValue !== null">
              {{ formatValue(stat.animatedValue, stat.value) }}
            </span>
            <span v-else>{{ stat.value }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-base font-semibold text-slate-700 dark:text-slate-200 mb-1">
            {{ stat.title }}
          </h3>

          <!-- Description -->
          <p v-if="stat.description" class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ stat.description }}
          </p>

          <!-- Decorative accent -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-indigo-500/5 dark:bg-indigo-400/5 rounded-bl-full -z-10 group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-400/10 transition-colors"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Stat {
  title: string
  value: string | number
  icon?: string
  description?: string
  animated?: boolean
  animatedValue?: number | null
}

const props = defineProps<{
  stats?: Stat[]
}>()

// Default stats if none provided
const defaultStats: Stat[] = [
  {
    title: 'Leads Captured',
    value: '1,200+',
    icon: 'mdi:account-multiple',
    description: 'Qualified prospects each month',
    animated: true,
    animatedValue: 0
  },
  {
    title: 'Conversion Rate',
    value: '24%',
    icon: 'mdi:trending-up',
    description: 'From quote to signed contract',
    animated: true,
    animatedValue: 0
  },
  {
    title: 'Average ROI',
    value: '3.2x',
    icon: 'mdi:chart-line',
    description: 'Return on marketing spend',
    animated: true,
    animatedValue: 0
  },
  {
    title: 'Client Satisfaction',
    value: '98%',
    icon: 'mdi:star',
    description: 'Would recommend our program',
    animated: true,
    animatedValue: 0
  }
]

const computedStats = computed(() => {
  const statsList = props.stats || defaultStats
  return statsList.map(stat => ({
    ...stat,
    animated: stat.animated !== false,
    animatedValue: stat.animatedValue ?? 0
  }))
})

const statCards = ref<HTMLElement[]>([])
let observer: IntersectionObserver | null = null

// Extract numeric value from string for animation
const extractNumericValue = (value: string | number): number => {
  if (typeof value === 'number') return value
  const match = value.toString().match(/[\d.]+/)
  return match ? parseFloat(match[0]) : 0
}

// Format the animated value back to match original format
const formatValue = (animatedVal: number, originalVal: string | number): string => {
  const original = originalVal.toString()
  const hasPlus = original.includes('+')
  const hasPercent = original.includes('%')
  const hasX = original.includes('x')
  const hasComma = original.includes(',')
  
  let formatted = animatedVal.toFixed(original.includes('.') ? 1 : 0)
  
  if (hasComma && animatedVal >= 1000) {
    formatted = animatedVal.toLocaleString('en-US', { maximumFractionDigits: 0 })
  }
  
  if (hasPlus) formatted += '+'
  if (hasPercent) formatted += '%'
  if (hasX) formatted += 'x'
  
  return formatted
}

// Animate counter
const animateValue = (stat: Stat, index: number) => {
  if (!stat.animated) return
  
  const targetValue = extractNumericValue(stat.value)
  const duration = 2000 // 2 seconds
  const steps = 60
  const increment = targetValue / steps
  const stepDuration = duration / steps
  
  let currentValue = 0
  const timer = setInterval(() => {
    currentValue += increment
    if (currentValue >= targetValue) {
      currentValue = targetValue
      clearInterval(timer)
    }
    computedStats.value[index].animatedValue = currentValue
  }, stepDuration)
}

onMounted(() => {
  // Intersection Observer for scroll-triggered animation
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          const cardIndex = statCards.value.indexOf(entry.target as HTMLElement)
          if (cardIndex !== -1 && computedStats.value[cardIndex].animatedValue === 0) {
            setTimeout(() => {
              animateValue(computedStats.value[cardIndex], cardIndex)
            }, cardIndex * 100) // stagger animations
          }
        }
      })
    },
    { threshold: 0.3 }
  )

  // Observe all stat cards
  statCards.value.forEach((card) => {
    if (card && observer) observer.observe(card)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
/* Additional custom animations can be added here if needed */
</style>
