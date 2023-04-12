<template>
  <BackBtn/>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message label="Sunday, 19th" />
      <q-chat-message name="客服" avatar="/svg/service.svg" :text="['您好，有什么需要帮助的吗？']"
        stamp="刚刚" />
      <!-- <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar4.jpg" :text="['hey, how are you?']" sent
        stamp="7分钟前" /> -->
        <div class="row fixed" style="bottom:70px;width:100%">
<q-input filled v-model="text" style="flex:8"></q-input><q-btn class="q-mx-lg" style="flex:1">发送</q-btn>
</div>
    </div>
  </div>
</template>
<script setup>
import BackBtn from '../../components/BackBtn.vue'
import {ref} from 'vue';
const text=ref('')
</script>
