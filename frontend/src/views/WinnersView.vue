<template>
  <div class="page container">
    <h1>Ganhadores</h1>
    <WinnersSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WinnersSection from "../components/WinnersSection.vue";
export default defineComponent({ components: { WinnersSection } });
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
