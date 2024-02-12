<template>
    <div class="flex">
      <div class="w-full max-w-16 min-h-screen bg-sky-950 p-4 sticky	">
        <div class="flex flex-col items-center">
          <router-link to="/dashboard/intiresting">
            <img class="py-3" src="@/assets/menu1.png" alt="-" />
          </router-link>
          <router-link to="/dashboard/info">
            <img class="py-3" src="@/assets/menu3.png" alt="-" />
          </router-link>
          <router-link to="/dashboard/infoPost">
            <img class="py-3" src="@/assets/menu2.png" alt="-" />
          </router-link>
        </div>
      </div>
  
      <div class="flex-1 flex items-center justify-center min-w-96">
        <RouterView />
      </div>
    </div>
  </template>

  