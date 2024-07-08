<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const route = useRoute()
const tableData = ref([])

const fetchData = async () => {
  console.log('fetching data')
  // const response = await fetch(`/api/table/${route.params.tableId}`)
  // tableData.value = await response.json()
}

onMounted(fetchData)
watch(() => route.params.tableId, fetchData)
</script>

<template>
  <DataTable :value="tableData">
    <Column v-for="col in tableData[0]" :key="col" :field="col" :header="col"></Column>
  </DataTable>
</template>
