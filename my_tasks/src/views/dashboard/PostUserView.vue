<template>
  <div>
    <MenuSectionVue
      :names="tabs"
      :selectedTab="selectedTab"
      @changeTab="changeTab" />
    <!-- <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">{{ pageTitle }}</h1> -->
    <UserPosts
      :selectedTab="selectedTab"
      :sourse="sourse"
      :test="pageTitle" />
  </div>
</template>

<script setup>
import MenuSectionVue from '@/components/MenuSection.vue';
import UserPosts from '@/components/UserPosts.vue';
import axios from 'axios';
import { ref } from 'vue';

const tabs = [
  { name: 'All', label: 'All Users' },
  { name: 'Only', label: 'Only' },
];
const selectedTab = ref('All');
const currentUser = JSON.parse(localStorage.getItem('userData'));
const sourse = ref([]);
const pageTitle = ref(currentUser.name);

// const pageTitle = ref('allll');
// function sleep(sec) {
//   return new Promise((resolve) => setTimeout(resolve, sec));
// }
// :currentUser="currentUser"
// async function mytest() {
//   await sleep(9000);
//   console.log('9 seconds');
// }

const fetchPosts = async () => {
  //   mytest();
  try {
    // await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await axios.get(
      selectedTab.value === 'All'
        ? 'https://jsonplaceholder.typicode.com/posts'
        : `https://jsonplaceholder.typicode.com/posts?userId=${currentUser.id}`
    );
    // console.log(response);
    sourse.value = response.data;
  } catch (error) {
    // console.error(error);
  }
};

const changeTab = async (tabName) => {
  selectedTab.value = tabName;
  pageTitle.value =
    tabName === 'All' ? 'All Users Info okkk' : 'ONLY Users Info okkkk';
  await fetchPosts();
};

fetchPosts();
</script>
