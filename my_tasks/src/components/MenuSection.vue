<template>
  <div class="flex">
    <button
      v-for="tab in names"
      :key="tab.name"
      :class="[
        'px-4 py-2 cursor-pointer',
        { 'border-b-4 border-black  text-black': tab.name === selectedTab },
      ]"
      @click="clickOnTab(tab.name)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  names: {
    type: Array,
    required: true,
  },
  selectedTab: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["changeTab"]);

const clickOnTab = (tabName) => {
  emit("changeTab", tabName);
};
</script>
