<template>
  <div>
    <MenuSectionVue
      :names="tabs"
      :selectedTab="selectedTab"
      @changeTab="changeTab" />
    <UserPosts :selectedTab="selectedTab" :sourse="sourse" :test="pageTitle" />
  </div>
</template>

<script setup>
import MenuSectionVue from '@/components/MenuSection.vue';
import UserPosts from '@/components/UserPosts.vue';
import axios from 'axios';
import { ref } from 'vue';

const keyFromBC = 2;

const tabs = [
  { name: 'Alasfasfl', label: 'All asdUsers', key: 1 },
  { name: 'All', label: 'All Users', key: 2 },
  { name: 'Only', label: 'Only', key: 3 },
];

let i = 'All';
let x = 'Only';
let z = '';
for (const item of tabs) {
  if (item.key === keyFromBC) {
    // console.log(item.name);
    z = item.name;
  }
}
console.log(z);
// console.log(i);
// console.log(x);

const selectedTab = ref(z);

const currentUser = JSON.parse(localStorage.getItem('userData'));
const sourse = ref([]);
const pageTitle = ref(currentUser.name);

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      selectedTab.value === 'All'
        ? 'https://jsonplaceholder.typicode.com/posts'
        : `https://jsonplaceholder.typicode.com/posts?userId=${currentUser.id}`
    );
    console.log(response);
    sourse.value = response.data;
  } catch (error) {}
};

const changeTab = async (tabName) => {
  selectedTab.value = tabName;
  pageTitle.value =
    tabName === 'All' ? 'All Users Info okkk' : 'ONLY Users Info okkkk';
  await fetchPosts();
};

fetchPosts();
</script>
