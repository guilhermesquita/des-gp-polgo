<template>
  <section id="lojas-mapa" class="stores-map header-offset">
    <h2>Lojas Participantes</h2>
    <div class="map-controls">
      <div>Veja todas as lojas que participam da promoção!</div>
      <div v-if="nearest">
        Loja mais próxima: {{ nearest.nome }} — {{ nearest.cidade }} /
        {{ nearest.estado }}
      </div>
    </div>
    <ul>
      <li v-for="s in stores" :key="s._id">
        {{ s.nome }} — {{ s.endereco || "" }} ({{ s.cidade }} / {{ s.estado }})
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useApi } from "../composables/useApi";

export default defineComponent({
  name: "StoresMapSection",
  setup() {
    const api = useApi();
    const stores = ref<any[]>([]);
    const nearest = ref<any | null>(null);

    onMounted(async () => {
      try {
        const res = await api.get("/lojas");
        stores.value = res.data?.data || [];
      } catch (err) {}
    });

    return { stores, nearest };
  },
});
</script>

<style scoped>
.stores-map {
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  font-family: "Inter", sans-serif;
  color: #111827;
  text-align: center;
}

.stores-map h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  color: #1f2937;
}

.stores-map h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  margin: 0.75rem auto 0;
  background: #2563eb;
  border-radius: 3px;
}

.map-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #4b5563;
}

.map-controls div:first-child {
  font-weight: 500;
}

.map-controls div:last-child {
  font-weight: 600;
  color: #1f2937;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
}

li {
  list-style: none;
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  text-align: left;
}

li:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

li::before {
  content: "📍";
  margin-right: 0.5rem;
}

@media (max-width: 640px) {
  .stores-map h2 {
    font-size: 1.75rem;
  }
  ul {
    grid-template-columns: 1fr;
  }
  .map-controls {
    font-size: 0.95rem;
  }
}
</style>
