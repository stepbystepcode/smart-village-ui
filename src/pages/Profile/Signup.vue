<template>
  <q-page padding class="bg-white q-pa-lg" style="border-top-left-radius:20px;border-top-right-radius:20px">
    <q-form class="column q-pb-md" @submit="onSubmit">
      <q-input lazy-rules="ondemand" outlined v-model="username" label="用户名" :dense="false" color="teal" class="q-pb-lg"
        :rules="[val => !!val || '请输入必填项']" />
      <q-input lazy-rules="ondemand" outlined v-model="phone" label="手机号" :dense="false" color="teal" class="q-pb-lg"
        :rules="[validatePhoneNumber]" />
      <div class="row q-mb-md">
        <q-input lazy-rules="ondemand" outlined v-model="verification" label="验证码" :dense="false" color="teal"
          class="q-mr-lg" style="flex:1" :rules="[val => !!val || '请输入必填项']" />
        <q-btn
      color="secondary" style="height:55px"
      :disable="disableSendBtn"
      @click="sendCode"
    >
      {{ buttonText }}
    </q-btn>
      </div>
      <q-input lazy-rules="ondemand" outlined v-model="password" label="密码" type="password" color="teal" :dense="false"
        class="q-pb-lg" :rules="[val => !!val || '请输入必填项']" />
      <q-input lazy-rules="ondemand" outlined v-model="confirm" label="确认密码" type="password" color="teal" :dense="false"
        class="q-pb-lg" :rules="[val => !!val || '请输入必填项']" />
      <!-- <q-input outlined v-model="name" label="姓名" :dense="false" color="teal" class="q-pb-md" /> -->
      <div class="row items-center q-mb-sm"><q-checkbox v-model="accept" />我同意《隐私政策》和《用户协议》</div>
      <q-btn @click="submit()" color="secondary" size="md" type="submit">注册</q-btn>
    </q-form>
    <div class="row reverse">
      <div> 已经注册？<router-link to="/user/login">去登录</router-link></div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import axios from 'axios'

const username = ref('');
const password = ref('');
const confirm = ref('');
const phone = ref();
const verification = ref();
const accept = ref(false);
const $q = useQuasar();
const disableSendBtn = ref(false)
const buttonText = ref('发送验证码')
let remainSeconds = 0
const submit=()=>{
  const json={
    'username':username.value,
    'password':password.value,
    'phone':phone.value
  };
  (async () => {
  try {
    const response = await axios.post('http://8.130.69.208:8080/api/signup',json);
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'done',
      message: response.data
    })
  } catch (error) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: error.response.data
    })
    //console.error(error);
  }
})();
//,{
 //   Headers: {'Authorization': 'Bearer '+localStorage.getItem('auth')}
 // }
}

// 发送验证码
const sendCode = () => {
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'done',
    message: '已发送验证码'
  })
  disableSendBtn.value = true
  remainSeconds = 60
  buttonText.value = `重新发送 (${remainSeconds})`

  // 计时器
  const timerId = setInterval(() => {
    remainSeconds--
    if (remainSeconds > 0) {
      buttonText.value = `重新发送 (${remainSeconds})`
    } else {
      clearInterval(timerId)
      buttonText.value = '重新发送'
      $q.notify({ message: '如未收到验证码，请重新获取' })
      disableSendBtn.value = false
    }
  }, 1000)
}
// const name = ref('');
// const gender = ref('');
// const idNumber = ref();
const validatePhoneNumber = (value: string) => {
  const phoneNumberPattern = /^\d{11}$/;
  return phoneNumberPattern.test(value) || '手机号格式不正确';
}
const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '你需要先接受协议和条款'
    })
  }
  else if (password.value != confirm.value) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '两次密码输入不一致'
    })
  }
}
</script>
