<template>
  <section class="hero">
    <div class="hero-inner">
      <h1 class="title">Participe da Promoção Polgo</h1>
      <p class="lead">
        Cadastre-se e concorra a prêmios incríveis nas nossas lojas parceiras.
      </p>
      <v-btn color="primary" href="#participar">Participar</v-btn>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ name: "HeroSection" });
</script>

<style scoped lang="scss">
.hero {
  background: linear-gradient(135deg, #4f46e5, #06b6d4);
  color: white;
  padding: 4rem 1rem;
  text-align: center;
}
.title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.lead {
  margin-bottom: 1rem;
}
.cta {
  display: inline-block;
  background: white;
  color: #111827;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  text-decoration: none;
}
</style>
