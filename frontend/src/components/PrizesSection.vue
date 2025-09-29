<template>
  <section id="premios" class="prizes header-offset">
    <h2>Prêmios</h2>
    <div class="cards">
      <CardBase v-for="p in prizes" :key="p.id">
        <div class="card-image">
          <img :src="p.image" :alt="p.nome" loading="lazy" />
        </div>
        <h3>{{ p.nome }}</h3>
        <p>{{ p.descricao }}</p>
      </CardBase>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useApi } from "../composables/useApi";
import CardBase from "./CardBase.vue";

export default defineComponent({
  name: "PrizesSection",
  setup() {
    const api = useApi();
    const prizes = ref<any[]>([
      {
        id: 1,
        nome: "Carro 0km",
        descricao: "Um carro 0km para o grande vencedor",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf",
      },
      {
        id: 2,
        nome: 'TV 65"',
        descricao: "TV 65 polegadas 4K",
        image: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb",
      },
    ]);

    onMounted(async () => {
      try {
        const res = await api.get("/premios");
        if (res.data) prizes.value = res.data;
      } catch (err) {}
    });

    return { prizes };
  },
  components: { CardBase },
});
</script>

<style scoped>
.prizes {
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  text-align: center;
  color: #111827;
}

.prizes h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #1f2937;
  position: relative;
}

.prizes h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  margin: 0.75rem auto 0;
  background: #2563eb;
  border-radius: 3px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

/* Container da imagem */
.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* preserva proporção */
}

/* Mobile */
@media (max-width: 640px) {
  .card-image {
    height: 180px; /* reduz altura no mobile */
  }
}

.card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 1rem 0.5rem;
  color: #111827;
  text-align: center;
}

.card p {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.5;
  padding: 0 1rem 1.25rem;
  text-align: center;
}
</style>
