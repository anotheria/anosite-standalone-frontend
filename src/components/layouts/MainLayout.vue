<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

defineProps({
  title: { type: String, default: '' },
})
const visible = ref(false)
</script>

<template>
  <div class="layout-wrapper">
    <div class="min-h-screen flex flex-col">
      <AppHeader v-model:sidebarVisible="visible" :title />
      <AppSidebar v-model:sidebarVisible="visible" />
      <main class="flex flex-col flex-1">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped lang="sass"></style>
