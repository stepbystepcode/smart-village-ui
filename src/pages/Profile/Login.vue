<template>
  <q-page padding class="bg-white q-pa-lg" style="border-top-left-radius:20px;border-top-right-radius:20px">
    <q-from class="column q-pb-md">
      <q-input outlined v-model="username" label="用户名" :dense="false" color="teal" class="q-pb-md" />
      <q-input outlined v-model="password" label="密码" type="password" color="teal" :dense="false" class="q-pb-md" />
      <q-btn color="secondary" size="md" @click="submit()" type="submit"
        :disable="username && password ? false : true">登录</q-btn>
    </q-from>
    还没有账号？<router-link to="/user/signup">立即注册</router-link>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router'
import axios from 'axios'
const username = ref('');
const router = useRouter();
const password = ref('');
const $q = useQuasar();
const submit = () => {
  const json = {
    'username': username.value,
    'password': password.value
  };
  (async () => {
    try {
      const response = await axios.post('http://8.130.69.208:8080/api/login', json);
      localStorage.setItem('auth', response.data);
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'done',
        message: '登录成功'
      })
      router.push('/profile');
    } catch (error) {
      localStorage.removeItem('auth');
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: '用户名或密码错误'
      })
    }
  })();
}
</script>
