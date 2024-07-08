<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'

defineProps({
  title: { type: String, default: '' },
})
</script>

<template>
  <div class="flex h-screen">
    <aside class="w-min max-w-80 text-white flex flex-col p-4 overflow-auto">
      <div class="text-2xl font-bold mb-4">
        <img src="/logo.png" alt="logo" class="h-8" />
      </div>
      <AppSidebar />
    </aside>
    <main class="flex-1 p-4">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="sass"></style>
