<template>
  <div class="w-full min-h-screen flex flex-wrap items-center">
    <div class="flex-1 bg-gray-100 min-h-screen flex items-center pb-10">
      <div class="w-full px-20">
        <div
          class="text-4xl text-center text-indigo-900 font-black leading-8 min-h-20 font-montserrat"
        >
          PLAYGROUND
        </div>
        <img class="flex-none max-sm w-800 h-900" src="@/assets/welcome.png" alt="" />
      </div>
    </div>
    <div class="flex-1 pb-10">
      <RouterView />
    </div>
  </div>
  <div class="text-slate-400 text-center h-10 -mt-10">
    © 2022 Playground. All rights reserved.
  </div>
</template>
