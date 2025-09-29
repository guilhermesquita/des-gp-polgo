<template>
  <section id="como-participar" class="howto header-offset">
    <h2>Como Participar</h2>
    <ol>
      <li>Visite uma loja participante.</li>
      <li>Compre um produto da promoção.</li>
      <li>Cadastre seu cupom no formulário de participação.</li>
      <li>Acompanhe os ganhadores nesta página.</li>
    </ol>
    <p class="note">
      Regras completas e termos estão disponíveis no regulamento.
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ name: "HowToParticipate" });
</script>

<style scoped>
.howto {
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  color: #111827;
}

.howto h2 {
  font-size: 1.9rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #1f2937;
  position: relative;
}

.howto h2::after {
  content: "";
  display: block;
  width: 70px;
  height: 4px;
  margin: 0.75rem auto 0;
  background: #2563eb;
  border-radius: 3px;
}

.howto ol {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 700px;
  counter-reset: step-counter;
  display: grid;
  gap: 1.2rem;
}

.howto li {
  position: relative;
  padding: 1.25rem 1rem 1.25rem 4rem;
  background: #fff;
  border-left: 6px solid #2563eb;
  border-radius: 10px;
  font-size: 1rem;
  line-height: 1.5;
  counter-increment: step-counter;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.howto li:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
}

.howto li::before {
  content: counter(step-counter);
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  width: 2.2rem;
  height: 2.2rem;
  background: #2563eb;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.3);
}

.note {
  margin-top: 2.5rem;
  font-size: 0.95rem;
  color: #374151;
  background: #f0f9ff;
  padding: 1rem 1.25rem;
  border-left: 5px solid #2563eb;
  border-radius: 8px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.note::before {
  content: "ℹ️ ";
  font-weight: bold;
  margin-right: 0.25rem;
}
</style>
