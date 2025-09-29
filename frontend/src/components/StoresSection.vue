<template>
  <section class="stores header-offset">
    <h2>Loja mais próxima de você</h2>
    <div v-if="nearestStore" class="nearest-store">
      <CardBase>
        <strong>{{ nearestStore.nome }}</strong>
        <span> é a loja mais próxima de você!</span>
        <div>Endereço: {{ nearestStore.endereco || "" }}</div>
        <div>{{ nearestStore.cidade }} / {{ nearestStore.estado }}</div>
      </CardBase>
    </div>
    <p v-else class="fallback">
      Não foi possível determinar a loja mais próxima. <br />
      Certifique-se de permitir a localização ou tente novamente.
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useApi } from "../composables/useApi";
import CardBase from "./CardBase.vue";

export default defineComponent({
  name: "StoresSection",
  components: { CardBase },
  setup() {
    const api = useApi();
    const stores = ref<any[]>([]);
    const nearestStore = ref<any | null>(null);

    function getDistance(
      lat1: number,
      lon1: number,
      lat2: number,
      lon2: number
    ) {
      const R = 6371;
      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLon = ((lon2 - lon1) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    }

    async function geocode(address: string) {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
            address
          )}&format=json&limit=1`
        );
        const data = await res.json();
        if (data.length) {
          return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
        }
      } catch (e) {
        console.error("Erro no geocoding:", e);
      }
      return null;
    }

    async function findNearestStore(userLat: number, userLng: number) {
      let nearest = null;
      let minDistance = Infinity;

      for (const s of stores.value) {
        const coords = await geocode(`${s.endereco}, ${s.cidade}, ${s.estado}`);
        if (!coords) continue;

        const dist = getDistance(userLat, userLng, coords.lat, coords.lng);
        if (dist < minDistance) {
          minDistance = dist;
          nearest = s;
        }
      }
      nearestStore.value = nearest;
    }

    onMounted(async () => {
      try {
        const res = await api.get("/lojas");
        stores.value = res.data?.data || [];

        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(
          async (position) => {
            await findNearestStore(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (err) => {
            console.warn("Usuário não permitiu geolocalização:", err);
          }
        );
      } catch (err) {
        console.error("Erro ao buscar lojas:", err);
      }
    });

    return { stores, nearestStore };
  },
});
</script>

<style scoped>
.stores {
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  font-family: "Inter", sans-serif;
  color: #111827;
  text-align: center;
}

.stores h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  position: relative;
  color: #1f2937;
}

.stores h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  margin: 0.75rem auto 0;
  background: #2563eb;
  border-radius: 3px;
}

.nearest-store {
  max-width: 400px;
  margin: 0 auto;
}

.fallback {
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-top: 1rem;
}
</style>
