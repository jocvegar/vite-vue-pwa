<script setup>
import { ref, onMounted } from "vue";
defineProps({
  msg: String,
});
const count = ref(0);
const location = ref(null);
const gettingLocation = ref(false);
const errorStr = ref(null);

onMounted(() => {
  getStuff();
});

function getStuff() {
  if (!("geolocation" in navigator)) {
    errorStr.value = "Geolocation is not available.";
    return;
  }
  gettingLocation.value = true;
  navigator.geolocation.getCurrentPosition(
    (position) => {
      location.value = position.coords;
      gettingLocation.value = false;
    },
    (error) => {
      errorStr.value = error.message;
      gettingLocation.value = false;
    }
  );
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div v-if="errorStr">
    Sorry, but the following error occurred: {{ errorStr }}
  </div>
  <div v-if="gettingLocation">
    <i>Getting your location...</i>
  </div>
  <div v-if="location">
    Your location data is {{ location.coords.latitude }},
    {{ location.coords.longitude }}
  </div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>
  <p>TIME: {{ new Date() }}</p>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
