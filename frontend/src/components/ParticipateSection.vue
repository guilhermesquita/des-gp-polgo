<template>
  <section id="participar" class="participate header-offset">
    <h2>Participe</h2>
    <form @submit.prevent="onSubmit">
      <input v-model="nome" placeholder="Seu nome" required />
      <input v-model="email" placeholder="Seu email" type="email" required />
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useApi } from "../composables/useApi";

export default defineComponent({
  name: "ParticipateSection",
  setup() {
    const nome = ref("");
    const email = ref("");

    const onSubmit = async () => {
      alert("Obrigado por participar!");
    };

    return { nome, email, onSubmit };
  },
});
</script>

<style scoped>
.participate {
  padding: 3rem 1rem;
  border-radius: 12px;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #111827;
}

.participate h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  color: #1f2937;
}

.participate h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  margin: 0.75rem auto 0;
  background: #2563eb;
  border-radius: 3px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

button {
  padding: 0.75rem 1.5rem;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

button:hover {
  background-color: #1e40af;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .participate h2 {
    font-size: 1.75rem;
  }
  form {
    width: 100%;
  }
  input,
  button {
    font-size: 0.95rem;
  }
}
</style>
