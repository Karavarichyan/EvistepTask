<template>
    <div class="wrapper">
  <div class="menu w-full max-w-16 min-h-screen bg-sky-950 p-4 fixed">
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

  <!-- <div class="content max-w-screen-md mx-auto text-center">
    <RouterView />
  </div> -->
  <!-- <div class="content flex-1 p-4 max-w-screen-md">
    <RouterView />
  </div> -->
  <div class="content flex-1 p-4 max-w-screen-md mx-auto ">
  <RouterView />
</div>
</div>

      
  </template>

  