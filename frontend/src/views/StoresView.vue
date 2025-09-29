<template>
  <div class="page container">
    <h1>Lojas</h1>
    <StoresSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StoresSection from "../components/StoresSection.vue";
export default defineComponent({ components: { StoresSection } });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
