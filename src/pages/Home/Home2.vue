<template>
  <header>
    <q-toolbar class="bg-secondary text-white rounded-borders">
      <q-avatar class="q-ma-sm" size="40px" color="teal" text-color="white" icon="person"
        @click="router.push('/profile')"></q-avatar>
      <q-input dark dense standout v-model="search" input-class="text-left">
        <template v-slot:append>
          <q-icon v-if="search === ''" name="search" />
          <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
        </template>
      </q-input>
    </q-toolbar>
  </header>
  <div class="column bg">
    <div class="grid text-white">
      <div v-for="(a, i) in menu" :key="i" class="q-ma-sm">
        <q-btn flat :style="`background:${a.color}`" :to="a.to">
          <template v-slot:default>
            <div class="text-center flex-center column q-pa-sm">
              <q-icon :name="a.icon" size="40px"></q-icon>
              <span>{{ a.name }}</span>
            </div>
          </template>
        </q-btn>
      </div>
    </div>

    <span v-if="pos" class="bg-white q-py-sm q-pl-sm" style="display: block; border-left: 6px solid var(--q-primary)">
      当前定位： {{ pos.province }}{{ pos.city }}{{ pos.district }}{{ pos.township }}
    </span>

    <div class="row">
      <q-card flat class="q-ma-sm card row justify-between" style="flex: 1" v-if="weather.value">
        <div>
          <div class="text-h4">{{ weather.value.temperature }}℃</div>
          <div class="text-h6">{{ weather.value.weather }}</div>
        </div>
        <q-icon size="xl" :name="`img:/svg/weather/${weather.value.weather}.svg`"></q-icon>
      </q-card>
      <q-card style="flex: 1" class="card" v-else>加载中......</q-card>
      <q-card flat class="card text-h6" style="flex: 1">今日种植小妙招</q-card>
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
  { name: '土壤检测', icon: 'sensors', color: '#5C8BD9', to: '/home/test' },
  { name: '作物推荐', icon: 'eco', color: '#F2C037', to: '/home/test' },
  { name: '种子购买', icon: 'shopping_cart', color: '#9C4DCC', to: '/shop?type=seed' },
  { name: '专家咨询', icon: 'person', color: '#E57373', to: '/chat' },
  { name: '种植技术', icon: 'compost', color: '#66BB6A', to: '/home/test' },
  { name: '机械招募', icon: 'settings_suggest', color: '#616161', to: '/home/test' },
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
<style scoped lang="scss">
.bg {
  background: #e7e7e7;
}

.grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}

.card {
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}

header {
  .q-toolbar label {
    width: 100%;
  }
}

.grid-item {
  width: 70%;
  height: 70%;
  flex-wrap: nowrap;
}
</style>
