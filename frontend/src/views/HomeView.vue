<template>
  <main class="container">
    <HeroSection />
    <WinnersSection />
    <WinnersDetailSection />
    <HowToParticipate />
    <PrizesSection />
    <FAQSection />
    <StoresSection />
    <StoresMapSection />
    <ParticipateSection />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroSection from "../components/HeroSection.vue";
import WinnersSection from "../components/WinnersSection.vue";
import WinnersDetailSection from "../components/WinnersDetailSection.vue";
import HowToParticipate from "../components/HowToParticipate.vue";
import PrizesSection from "../components/PrizesSection.vue";
import FAQSection from "../components/FAQSection.vue";
import StoresSection from "../components/StoresSection.vue";
import StoresMapSection from "../components/StoresMapSection.vue";
import ParticipateSection from "../components/ParticipateSection.vue";

export default defineComponent({
  components: {
    HeroSection,
    WinnersSection,
    WinnersDetailSection,
    HowToParticipate,
    PrizesSection,
    FAQSection,
    StoresSection,
    StoresMapSection,
    ParticipateSection,
  },
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
