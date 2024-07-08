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

console.log('sidebar')

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

const log = (data: any): boolean => {
  console.log(data)
  return true
}
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
  // background: #292b32;
  // color: #9d9d9d;
  // border: none;

  .p-sidebar-content {
    // padding: 0 0 1.125rem 0;
  }

  .p-panelmenu-panel {
    // margin-bottom: 0;
    // border: none;
  }

  .p-panelmenu-header-content {
    // background: #292b32;
  }

  .p-panelmenu-content {
    // background: #292b32;
  }

  .p-panelmenu-header-action,
  .p-menuitem-content {
    &:hover {
      background: #3071b2;
      .p-menuitem-text,
      .p-submenu-icon {
        color: #ffffff;
      }
    }
  }

  .p-panelmenu
    .p-panelmenu-header:not(.p-disabled):focus-visible
    .p-panelmenu-header-content
    .p-panelmenu-header-action {
    background: #3071b2;
    .p-menuitem-text,
    .p-submenu-icon {
      color: #ffffff;
    }
  }

  .p-panelmenu .p-panelmenu-content .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content {
    background: #3071b2;
    .p-menuitem-text,
    .p-submenu-icon {
      color: #ffffff;
    }
  }

  .p-menuitem-text,
  .p-submenu-icon {
    color: #9d9d9d;
  }

  .active-route {
    .p-panelmenu-header-action {
      background: #3883ce;
      .p-menuitem-text,
      .p-submenu-icon {
        color: #ffffff;
      }
    }

    .p-panelmenu-item-content {
      background: #3883ce;
      .p-panelmenu-item-label,
      .p-panelmenu-submenu-icon {
        color: #ffffff;
      }
    }
  }

  .p-panelmenu-panel:has(.active-route) {
    .p-panelmenu-header:not([aria-expanded='true']) {
      .p-panelmenu-header-content {
        background: #3883ce;
        .p-panelmenu-header-label,
        .p-panelmenu-submenu-icon {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
