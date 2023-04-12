<template>
  <q-page padding>
    <BackBtn/>
    <div class="camera-container">
      <video ref="video" autoplay></video>
      <q-btn round @click="takePhoto" class="take-photo"></q-btn>
    </div>
    <q-dialog v-model="dialogVisible" persistent>
      <q-card style="width: 700px; max-width: 80vw;">
        <q-img :src="photoDataUrl" />
        <q-card-actions align="right">
          <q-btn label="取消" color="negative" @click="closeDialog" />
          <q-btn label="确定" color="positive" @click="submitPhoto" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BackBtn from '../../components/BackBtn.vue'
const video = ref(null);
const dialogVisible = ref(false);
const photoDataUrl = ref(null);

onMounted(() => {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then((stream) => (video.value.srcObject = stream));
});

function takePhoto() {
  const canvas = document.createElement("canvas");
  canvas.width = video.value.videoWidth;
  canvas.height = video.value.videoHeight;
  canvas.getContext("2d").drawImage(video.value, 0, 0);

  const img = new Image();
  img.src = canvas.toDataURL("image/png");

  photoDataUrl.value = img.src;
  dialogVisible.value = true;
}

function closeDialog() {
  dialogVisible.value = false;
}

function submitPhoto() {
  // Do something with the photo here, such as uploading it to a server
  dialogVisible.value = false;
}
</script>

<style scoped>
.camera-container {
  position: relative;
}

.camera-container video {
  width: 100%;
  height: auto;
}

.camera-container button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.take-photo{
  width: 40px;
  height: 40px;
  display: block;
  background: #fff;
  border: 6px solid grey;
}
</style>
