<script setup lang="ts">
import { ref } from 'vue'
import PanelMenu from 'primevue/panelmenu'
import { useRouter, useRoute } from 'vue-router'
import { mockData } from '@/services/MockService'

const router = useRouter()
const route = useRoute()

const navigateToRoute = (route: string) => {
  router.push(route)
}

interface MenuItemCommand {
  label: string
  route: string
  command: () => void
}

interface MenuItem {
  label: string
  items?: MenuItemCommand[]
  route?: string
  command?: () => void
}

const items = ref<MenuItem[]>([])

mockData.views.map((item) => {
  items.value.push({
    label: item.name,
    items: item.sections.map((subItem) => {
      return {
        label: subItem.name,
        route: `/data/${subItem.document}`,
        command: () => {
          navigateToRoute(`/data/${subItem.document}`)
        },
      }
    }),
  })
})
</script>

<template>
  <div class="app-sidebar">
    <PanelMenu
      :model="items"
      multiple
      class="w-full md:w-20rem"
      :pt="{
        header: (options: any) => ({
          class: {
            'active-route': route.path === items[options.context.index].route,
          },
        }),
        item: (options: any) => ({
          class: {
            'active-route': route.path === options.context.item.item.route,
          },
        }),
      }"
    ></PanelMenu>
  </div>
</template>

<style lang="scss">
.app-sidebar {
  .active-route {
    .p-panelmenu-header-action {
      background: var(--p-primary-color);
      .p-menuitem-text,
      .p-submenu-icon {
        color: #ffffff;
      }
    }

    .p-panelmenu-item-content {
      background: var(--p-primary-color);
      .p-panelmenu-item-label,
      .p-panelmenu-submenu-icon {
        color: #ffffff;
      }
    }
  }

  .p-panelmenu-panel:has(.active-route) {
    .p-panelmenu-header:not([aria-expanded='true']) {
      .p-panelmenu-header-content {
        background: var(--p-primary-color);
        .p-panelmenu-header-label,
        .p-panelmenu-submenu-icon {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
