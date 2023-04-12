<template>
  <q-layout view="hHh lpR fFf">

    <q-header>
   <q-btn @click="router.push('/profile')" class="fixed bg-white q-ma-sm text-black" round style="z-index:99;opacity:0.7"><q-icon
                name="chevron_left"></q-icon></q-btn>
      <div class="column flex-center text-black" style="height:250px"><div><q-icon size="100px" name="img:/svg/logo.svg"></q-icon></div></div>
                </q-header>

    <q-page-container class="bg-secondary">

      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
</script>
<style scoped>
header {
  height: 250px;
  background-image: radial-gradient(circle,white 1%,var(--q-secondary) 50%);
}
</style>
