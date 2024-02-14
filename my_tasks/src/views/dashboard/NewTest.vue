<template>
    <div class="relative">
      <nav>
        <button
          v-for="menu in menuItems"
          :key="menu"
          class="p-3"
          :class="[menu === currentMenuItem ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black']"
          @click="currentMenuItem = menu"
        >
          {{ menu }}
        </button>
      </nav>
      <div v-if="loading">Loading...</div>
      <div class="container mx-auto mt-8">
        <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Posts Information</h1>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li
            v-for="post in posts"
            :key="post.id"
            class="mb-8 p-6 bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg transition"
          >
            <h2 class="text-xl font-semibold mb-4 text-gray-900">{{ post.title }}</h2>
            <p class="text-gray-700">{{ post.body }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { ref, watch } from 'vue'
  
  const menuItems = ref(['ALL', 'ONLY', 'TEST'])
  const currentMenuItem = ref('ALL')
  const currentUser = JSON.parse(localStorage.getItem('userData'))
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)
  
  watch(
    currentMenuItem,
    async (menu) => {
      try {
        loading.value = true
        const response = await axios.get(
          menu === 'ALL'
            ? 'https://jsonplaceholder.typicode.com/posts'
            : `https://jsonplaceholder.typicode.com/posts/?userId=${currentUser.id}`
        )
        posts.value = response.data
      } catch (err) {
        error.value = 'Failed to load posts. Please try again later.'
      } finally {
        loading.value = false
      }
    },
    { immediate: true }
  )
  </script>
  

    const currentUser = JSON.parse(localStorage.getItem('userData'))
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
              <!-- Выводите посты для вкладки "All" -->
              <div v-for="post in posts" :key="post.id">
                {{ post.title }}
              </div>
            </div>
            <div class="my-6" v-if="selectedTab === 'Only'">
              <br>This is information for Only users
              <!-- Выводите посты для вкладки "Only" -->
              <div v-for="post in posts" :key="post.id">
                {{ post.title }}
              </div>
            </div>
          </div>
        </div>
      </template>
      
      <script setup>
      // ... (ваш существующий код)
      
      const fetchPosts = async () => {
        console.log('Fetching posts for tab:', selectedTab.value);
        try {
          const currentUser = /* замените этот код на вашу логику получения текущего пользователя */;
          const response = await axios.get(
            selectedTab.value === 'All'
              ? 'https://jsonplaceholder.typicode.com/posts'
              : `https://jsonplaceholder.typicode.com/posts/?userId=${currentUser.id}`
          );
          console.log('Full response:', response);
          console.log('Response data:', response.data);
          posts.value = response.data;
        } catch (error) {
          console.error('Ошибка при получении постов:', error);
        }
      };
      
      onMounted(() => {
        // Fetch initial posts when the component is mounted
        fetchPosts();
      });
      </script>
      