<template>
    <div v-if="userData" class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-1 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        User Profile
        <p>{{ userData.name }}</p>
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">This is some information about the user.</p>
      <img class="max-w-16" src="@/assets/usertou.png" alt="" />
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0 min-w-96">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Full name</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p>
              <input
                v-model="userData.name"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Username</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p>
              <input
                v-model="userData.username"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Email address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p>
              <input
                v-model="userData.email"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Phone number</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p>
              <input
                v-model="userData.phone"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p>
              <input
                v-model="userData.address.suite"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
            <p>
              <input
                v-model="userData.address.street"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
            <p>
              <input
                v-model="userData.address.city"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
            <p>
              <input
                v-model="userData.address.zipcode"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Website</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p>
              <input
                v-model="userData.website"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Company</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <p>
              <input
                v-model="userData.company.name"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
            <br />
            <p>
              <input
                v-model="userData.company.catchPhrase"
                class="border rounded p-1 w-full"
                @blur="saveChanges"
              />
            </p>
          </dd>
        </div>
      </dl>
    </div>
    <button
      @click="saveChanges"
      class="h-[40px] my-4 rounded-lg min-w-44 bg-blue-900 items-center text-white ml-[280px] font-roboto"
    >
      SAVE
    </button>
    
  </div>
  <div v-else>No user data available.</div>
</template>
<script setup>
import { ref } from 'vue'
const saveChanges = () => {
  localStorage.setItem('userData', JSON.stringify(userData.value))
}
const userData = ref(JSON.parse(localStorage.getItem('userData')) ?? null)
console.log(userData.value)

</script>
