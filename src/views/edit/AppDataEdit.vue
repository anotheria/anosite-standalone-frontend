<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const formData = ref({})

const fetchItem = async () => {
  const response = await fetch(`/api/item/${route.params.itemId}`)
  formData.value = await response.json()
}

const saveItem = async () => {
  await fetch(`/api/item/${route.params.itemId}`, {
    method: 'PUT',
    body: JSON.stringify(formData.value),
  })
  router.push(`/${route.params.tableId}`)
}

onMounted(fetchItem)
</script>

<template>
  <form @submit.prevent="saveItem">
    <div v-for="(value, key) in formData" :key="key">
      <label>{{ key }}</label>
      <InputText v-model="formData[key]" />
    </div>
    <Button type="submit">Save</Button>
  </form>
</template>
