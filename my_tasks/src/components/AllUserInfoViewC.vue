
  <template>
    <div class="container mx-auto mt-8">
      <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Info in Posts</h1>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <li v-for="post in Enyposts" :key="post.id" class="mb-8 p-6 bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg transition">
          <h2 class="text-xl font-semibold mb-4 text-gray-900">{{ post.title }}</h2>
          <p class="text-gray-700">{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  import { ref, computed } from 'vue';
  import axios from 'axios';
  const posts = ref([]);
  const MyPosts = async () => {
    try {
      return (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
    } catch (error) {
      console.error('error:', error);
      return [];
    }
  };
  const Enyposts = computed(() => posts.value);
  MyPosts().then((data) => {
    posts.value = data;
  });
  </script>
