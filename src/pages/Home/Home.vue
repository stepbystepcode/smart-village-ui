<template>
  <div class="container" >
    <div class="top-section"></div>
    <div class="bottom-section">
      <q-layout view="hHh lpR fFf">
        <q-header  class="bg-green "
          style="height: 25%;">
          <div class="q-pa-lg" style="position: relative;top: 20px">
            <div class="text-h4">上午好</div>
            <div class="q-mb-sm">欢迎使用智慧农庄</div>
          </div>
          <div class="q-pa-sm" v-if="weather.value" style="position: absolute; right: 0; top: 0; bottom: 0;">
        <q-icon size="150px" class="full-height" style="position: relative;top:-50px;right: -40px" :name="`img:/svg/weather/${weather.value.weather}.svg`"></q-icon>
          </div>
          <div class="q-pa-sm" v-if="weather.value&&pos">
            <q-card-section style="display: grid; grid-template-columns: repeat(4, 1fr);">
              <div class="column flex-center">
                <q-icon name="pin_drop" size="30px" />
                <div>{{pos.city}}</div>
              </div>
              <div class="column flex-center">
                <q-icon name="thermostat" size="30px" />
                <div>{{weather.value.temperature}}℃</div>
              </div>
              <div class="column flex-center">
                <q-icon name="air" size="30px" />
                <div>{{weather.value.winddirection}}风{{weather.value.windpower}}</div>
              </div>
              <div class="column flex-center">
                <q-icon name="water" size="30px" />
                <div>{{weather.value.humidity}}</div>
              </div>
            </q-card-section>
          </div>
        </q-header>
        <q-page-container style="background-color: #4caf50; border-top-left-radius: 20px; border-top-right-radius: 20px;">
          <q-page class="q-pa-md"
            style="background-color: rgb(243 243 243); border-top-left-radius: 20px; border-top-right-radius: 20px;">
            <div class="q-mb-md" style="height: 75%">
              <q-card-section
                style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr);">
        <q-btn v-for="(a, i) in menu" :key="i" class="q-pa-md q-ma-sm card" flat :to="a.to">
          <q-icon :name="`img:/svg/home/${i+1}.svg`" class="q-mb-sm" size="lg">

            <span :style="`position: absolute;top: -4px;left:-4px;right:-4px;bottom: -4px;filter: opacity(0.5);background-color: ${a.color};z-index:-100;border-radius: 50%`"></span>
          </q-icon>
          {{a.name}}</q-btn>
              </q-card-section>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
const router = useRouter();
const search = ref('');
const $q = useQuasar();
const menu = ref([
  { name: '土壤检测', color: '#bdc8d0', to: '/home/test' },
  { name: '作物推荐', color: '#dabc85', to: '/home/test' },
  { name: '种子购买', color: '#d9a59e', to: '/shop?type=seed' },
  { name: '专家咨询', color: '#b7b7b7', to: '/chat' },
  { name: '种植技术', color: '#9ad9ad', to: '/home/test' },
  { name: '机械招募', color: '#e7c179', to: '/home/test' },
]);
let pos = reactive<Position>({
  adcode: 0,
  province: '',
  city: '',
  district: '',
  township: '',
});
let weather = reactive<{ value?: Weather }>({});
interface Position {
  adcode: number;
  province: string;
  city: string;
  district: string;
  township: string;
}
interface Weather {
  temperature: number;
  weather: string;
}
const getLocation = async () => {
  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    const res1 = await axios.get(
      `https://restapi.amap.com/v3/geocode/regeo?key=4cbce89fa07f40991f33f45f0c70f25a&location=${position.coords.longitude.toFixed(
        6
      )},${position.coords.latitude.toFixed(
        6
      )}&poitype=&radius=&extensions=all&batch=false&roadlevel=0`
    );
    pos = res1.data.regeocode.addressComponent;
    const res2 = await axios.get(
      `https://restapi.amap.com/v3/weather/weatherInfo?city=${pos.adcode}&key=4cbce89fa07f40991f33f45f0c70f25a`
    );
    weather.value = res2.data.lives[0];
  } catch (error) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '获取位置失败，请同意位置权限并重试，错误信息：' + error,
    });
    setTimeout(() => {
      getLocation();
    }, 5000);
  }
};
getLocation();
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.q-card-section {
  height: 100%;
}

.q-btn {
  margin-right: 10px;
}

.full-height {
  height: 100%;
}
.card{
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(5, 5, 5, 0.2);
}
</style>
