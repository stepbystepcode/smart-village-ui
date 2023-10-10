<template>
  <div class="container q-pt-xl" v-if="route.params.type">
    <div class="card">
      <div class="title q-mb-lg">土壤类型:{{ type[route.params.type].name }}</div>
      <div class="list">
        <div v-for="a in type[route.params.type].crop" :key="a" class="list-item">{{ a }}</div>
      </div>
      <p class="description">{{ type[route.params.type].description }}</p>
    </div>
  </div>
  <div v-else>loading...</div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #ffffff;
}

.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  max-width: 600px;
}

.title {
  font-size: 1.5rem;
  color: #00b894;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.list-item {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 1.2rem;
  color: #333333;
}

.description {
  font-size: 1.2rem;
  margin-top: 2rem;
  color: #333333;
}
</style>

<script setup>
import {useRoute} from 'vue-router'
const route=useRoute();
const type=[
  {
    'name': '初育土',
    'crop': ['玉米','高粱','马铃薯','豆类'],
    'description': '初育土是一种发育不健全的土壤类型,主要见于山地、丘陵和高原地区。其特点是肥力较低,腐殖质含量少,结构松散,水分和养分容易流失。适宜种植要求土壤肥力较低的作物,如玉米、高粱、马铃薯等。但开发利用初育土需要进行土壤改良,增加有机质和营养元素,才能使其发挥较高的生产力。'
  },
  {
    'name': '盐化潮土',
    'crop': ['棉花','甜菜','芥菜'],
    'description': '盐化潮土是长期受到盐分影响而形成的一类土壤,主要分布在干旱的内陆盆地或海岸。其特征是土壤含盐量高,致使地力降低、作物长势弱。适宜耐盐碱的作物种植,如棉花、甜菜、芥菜等。开发利用盐化潮土需要进行土壤脱盐,然后进行淡水冲洗和补充有机肥,才能使土壤肥力得到提高。'
  },
  {
    'name': '褐土',
    'crop': ['小麦','玉米','高粱','大豆'],
    'description': '褐土是一类发育程度较高的温带土壤类型,主要分布于温带大陆性气候区域的平原和丘陵地带。其特征是土层深厚、肥力较高、通气透水性良好。是农业大生产的主要土壤类型之一,适宜多种作物种植,如小麦、玉米、高粱、大豆等。但长期过度开垦可导致褐土肥力下降,需要进行有机肥还田、措施提高土壤质量。'
  }
]
</script>

