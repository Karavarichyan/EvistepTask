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
        <div class="my-6" v-if="selectedTab === 'All'">
          <br>This is All users
        </div>
        <div class="my-6" v-if="selectedTab === 'Only'">
          <br>This is information for Only users
        </div>
       
        <div class="container mx-auto mt-8">
            <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Users Posts Information</h1>
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <li v-for="post in posts" :key="post.id" class="mb-8 p-6 bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg transition">
                <h2 class="text-xl font-semibold mb-4 text-gray-900">{{ post.title }}</h2>
                <p class="text-gray-700">{{ post.title }}</p>
              </li>
            </ul>
          </div>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import MenuSectionVue from '@/components/MenuSection.vue'
  import axios from 'axios'
  const tabs = [
    { name: 'All', label: 'All Users' },
    { name: 'Only', label: 'Only' },
    
  ]
  const selectedTab = ref('All')
  const currentUser = JSON.parse(localStorage.getItem('userData'))
  const posts = ref([])
  const MyPosts = async () => {
    try {
        const response = await axios.get(
      selectedTab.value === 'All'
        ? 'https://jsonplaceholder.typicode.com/posts'
        : `https://jsonplaceholder.typicode.com/posts/?userId=${currentUser.id}`
    );
      posts.value = response.data;
    } catch (error) {
      console.error(error)
    }
  };
 computed(() => {
    return posts.value(post => {
      return selectedTab.value === 'All' || post.userId === currentUser.id
    })
  })
  const changeTab = async (tabName) => {
    selectedTab.value = tabName
    await MyPosts()
  }
  MyPosts();
  </script>
  