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
        <!-- <div v-for="post in posts" :key="post.id">
          {{ post.title }}
        </div> -->
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
  import { ref, onMounted } from 'vue'
  import MenuSectionVue from '@/components/MenuSection.vue'
  import axios from 'axios'
  
  const tabs = [
    { name: 'All', label: 'All Users' },
    { name: 'Only', label: 'Only' },
    
  ]
  const selectedTab = ref('All')
  const posts = ref([])
  
  const changeTab = async (tabName) => {
    selectedTab.value = tabName
    await fetchPosts()
  }
  
  const fetchPosts = async () => {
        console.log('Fetching posts for tab:', selectedTab.value);
        try {
            const currentUser = JSON.parse(localStorage.getItem('userData'))

          const response = await axios.get(
            selectedTab.value === 'All'
              ? 'https://jsonplaceholder.typicode.com/posts'
              : `https://jsonplaceholder.typicode.com/posts/?userId=${currentUser.id}`
          );
          console.log('Full response:', response);
          console.log('Response data:', response.data);
          posts.value = response.data;
        } catch (error) {
          console.error('error posts:', error);
        }
      };
      
      onMounted(() => {
        // Fetch initial posts when the component is mounted
        fetchPosts();
      });

  </script>
  