<template>
    <div class="flex flex-col">
      <div class="w-full sticky border-b border-gray-200 p-4 flex justify-between">
        <MenuSectionVue
          :names="tabs"
          :selectedTab="selectedTab"
          @changeTab="changeTab"
        />
      </div>
      <div class="p-6">
        <div class="my-6" v-if="selectedTab === 'All'"><br>This is All users <AllUserInfoViewC/> </div>
        <div class="my-6" v-if="selectedTab === 'Only'"><br>This is information for Only users  </div>
        <div class="my-6" v-if="selectedTab === 'React'"><br>This is information for React users Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aspernatur provident consectetur recusandae iure quas!.</div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
  import MenuSectionVue from '@/components/MenuSection.vue'
  import AllUserInfoViewC from '@/components/AllUserInfoViewC.vue';
//   import OnliUserInfoViewC from '@/components/OnliUserInfoViewC.vue';
  const tabs = [
    { name: 'All', label: 'All Users' },
    { name: 'Only', label: ' Only' },
    // { name: 'React', label: ' React' }
  ]
  const selectedTab = ref('All')
  
  const changeTab = (tabName) => {
    selectedTab.value = tabName
  }
  </script>