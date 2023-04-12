<template>
  <q-btn @click="goToPath" class="fixed bg-white q-ma-sm" round style="z-index:99;opacity:0.7">
    <q-icon name="chevron_left"></q-icon></q-btn>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const { go } = useRouter()

function goToPath() {
  go(-1)
}
</script>

