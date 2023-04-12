<template>
  <q-page class="column">
    <BackBtn/>
    <q-form class="column" style="flex:1">
      <q-input v-model="title" class="q-ma-lg" outlined color="teal" label="标题"></q-input>
      <q-input class="q-mx-lg" v-model="content" placeholder="我想对书记说..." label="内容" outlined color="teal"
        type="textarea" />
      <q-btn type="submit" class="q-ma-lg" color="teal">提交</q-btn>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BackBtn from '../../components/BackBtn.vue'
const title = ref('');
const content = ref('');
</script>

<style lang="scss" scoped></style>
