<template>
  <div class="container q-pt-xl" v-if="data">
    <div class="card">
      <div class="title q-mb-lg">土壤类型:{{ data.value.soil }}</div>
      <div class="list">
        <div v-for="a in data.value.crop" :key="a" class="list-item">{{ a }}</div>
      </div>
      <p class="description">{{ data.value.description }}</p>
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
import { reactive, onMounted } from 'vue';
import axios from 'axios'

const data = reactive({
  value: ''
});
onMounted(() => {
  axios.get(`http://8.130.69.208:8080/api/soil/crop`).then(res => {
    data.value = res.data;
  });
});
</script>

