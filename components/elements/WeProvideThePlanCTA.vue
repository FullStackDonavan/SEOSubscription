<template>
  <div
    id="ServiceArea"
    class="mx-auto p-8 bg-blue-400 text-gray-300 dark:bg-amber-400 dark:text-gray-300 text-center map-image flex flex-col justify-center items-center relative dark:bg-indigo-600 text-gray-800"
  >
    <PaintDripTop fill="60A5FA" v-if="$colorMode.value == 'light'" />
    <PaintDripTop fill="4F46E5" v-if="$colorMode.value == 'dark'" />
    <p class="mb-4 font-extrabold tracking-tight leading-none text-white">
      All From A Company That Exclusively Provides Marketing For Contractors
    </p>
    <h3
      class="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white"
    >
      We Provide The Plan / To Get You The Leads /
      <strong>That Keeps Your Schedule Full</strong>
    </h3>
    <PaintDripBottom fill="60A5FA" v-if="$colorMode.value == 'light'" />
    <PaintDripBottom fill="4F46E5" v-if="$colorMode.value == 'dark'" />
  </div>
</template>



