<template>
  <div class="w-1/2 ml-28">
    <input type="email" v-model="email" placeholder="enter email"  class="outline-0 max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full"/>
    <button @click="onCreatePost"
    class="h-[40px] my-4 rounded-lg min-w-44 bg-blue-900 items-center text-white ml-[160px] font-roboto"
    >create post</button>
    <div v-if="isSuccess">
      email valid!
    </div>
    <div v-else-if="errorMessage">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref('');
const isSuccess = ref(false);
const errorMessage = ref('');
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.value && emailRegex.test(email.value);
});
//if (!email.value.length) return;
// router.push({ path: "/Otp", replace: true });
async function onCreatePost() {
  ///testttt

  // if (!isValidEmail.value) {
  //   errorMessage.value = 'Please enter a valid email address';
  //   return;
  // }

  ///testtt
  if (isValidEmail.value) {
    try {
      const enteredEmail = email.value;
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
          email: enteredEmail,
        },
      });
      if (response.data.length) {  
        const user = response.data[0];
        isSuccess.value = true;
        errorMessage.value = '';
        // 
        localStorage.setItem('userData', JSON.stringify(user));
        router.push({ path: "/dashboard/Info" });
      } else {
        errorMessage.value = 'This email address is not on the server';
      }
    } catch (error) {
      errorMessage.value = 'error while receiving server data';
      
    }
  } else {
    errorMessage.value = 'Please enter a valid email address';
  }
}
</script>