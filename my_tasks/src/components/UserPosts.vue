<template>
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
            <p class="text-gray-700">{{ post.body }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    selectedTab: String,
    posts: Array,
  });
  
  </script>