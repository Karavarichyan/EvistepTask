 
<template>
    <div class="flex">
      <div class="flex">
        <span
          v-for="tab in names"
          :key="tab.name"
          :class="['px-4 py-2 cursor-pointer', {'bg-blue-500 text-white': tab.name === selectedTab}]"
          @click="clickOnTab(tab.name)"
        >{{tab.label}}</span>
      </div>
      <div class="ml-4">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    names: {
      type: Array,
      required: true
    },
    selectedTab: {
      type: String,
      required: true
    }
  })

  const emit = defineEmits(['changeTab'])

  const clickOnTab = (tabName) => {
    emit('changeTab', tabName)
  }
</script>


