<template>

    
    <div class="   ml-16 mt-16  container mx-auto my-8">
      <!-- <header class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">EVISTEP</h1>
        <h2 class="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p class="text-lg text-gray-600">CHOOSE THE RIGHT DEVELOPMENT PATH WITH EVISTEP</p>
      </header> -->
      <MenuSectionVue
          :names="tabs"
          :selectedTab="selectedTab"
          @changeTab="changeTab"
        />
      <section class="my-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p class="text-gray-700">
          We are a fast-growing software and game development company that sets the highest standards for digital delivery across the globe.
          Every project we undertake is tailored to the unique needs of our clients, ensuring a seamless user experience.
          Our track record includes completing numerous web application development projects for well-known companies worldwide in record time.
        </p>
      </section>
  
      <!-- <section class="my-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p class="text-gray-700">
          Evistep is committed to maintaining the highest standards in creating digital solutions and assisting our clients in achieving success with their most challenging projects.
          We utilize cutting-edge technology to deliver innovative solutions that drive business growth.
        </p>
      </section>
  
      <footer class="text-center my-8">
        <p class="text-gray-600">Get in touch with us. Let us advance your business with digital now!</p>
      </footer> -->
    </div>
  </template>
  <script setup>
  import { ref } from 'vue'
import MenuSectionVue from '@/components/MenuSection.vue'
const tabs = [
    { name: 'barev', label: ' caxik' },
    { name: 'haox', label: ' shnik' },
    { name: 'hiii', label: ' alo' }
  ]
  const selectedTab = ref('barev')
  
  const changeTab = (tabName) => {
    selectedTab.value = tabName
  }
</script>