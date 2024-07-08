<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import Toast from 'primevue/toast'

const route = useRoute()
</script>

<template>
  <AppLayout>
    <RouterView :key="route.fullPath" />
  </AppLayout>
  <Toast />
</template>

<style scoped lang="scss"></style>
