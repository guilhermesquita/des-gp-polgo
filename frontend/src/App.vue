<template>
  <v-app class="app-root">
    <HeaderBar />
    <main class="app-main">
      <router-view />
    </main>
    <FooterBar />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default defineComponent({
  name: "App",
  components: { HeaderBar, FooterBar },
});
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
