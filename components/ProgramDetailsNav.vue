<template>
  <section class="mx-auto max-w-5xl mt-10">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Program Details</h2>
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <nuxt-link 
        v-for="link in links"
        :key="link.path"
        :to="`${basePath}/${link.path}`" 
        class="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <Icon :name="link.icon" :class="link.iconColor" class="mr-2 flex-shrink-0" size="24" />
        <span class="font-medium text-gray-900 dark:text-white">{{ link.text }}</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup>
defineProps({
  basePath: {
    type: String,
    required: true,
    default: ''
  },
  links: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>
