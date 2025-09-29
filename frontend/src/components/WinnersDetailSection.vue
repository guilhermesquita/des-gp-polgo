<template>
  <section id="ganhadores-detalhado" class="winners-detail header-offset">
    <h2>Ganhadores</h2>
    <div class="map-and-list">
      <!-- Mapa com totalizadores -->
      <div class="map">
        <div
          id="brazil-map"
          class="map-container"
          aria-label="Mapa do Brasil"
        ></div>
        <!-- <ul class="state-totals">
          <li v-for="(count, uf) in totalsByUf" :key="uf">
            {{ uf }}: {{ count }}
          </li>
        </ul> -->
      </div>

      <!-- Lista detalhada com filtros -->
      <div class="list">
        <input v-model="filterNome" placeholder="Filtrar por nome" />
        <input v-model="filterPremio" placeholder="Filtrar por prêmio" />
        <input v-model="filterUf" placeholder="Filtrar por Estado (UF)" />

        <ul>
          <li v-for="w in items" :key="w._id">
            <strong>{{ w.nome }}</strong> — {{ w.premio }} — {{ w.cidade }} /
            {{ w.estado }}
          </li>
        </ul>

        <!-- Paginação -->
        <div class="pagination">
          <button @click="prev" :disabled="page === 1">Anterior</button>
          <span>{{ page }} / {{ totalPages }}</span>
          <button @click="next" :disabled="page === totalPages">Próximo</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, nextTick } from "vue";
import { useApi } from "../composables/useApi";

export default defineComponent({
  name: "WinnersDetailSection",
  setup() {
    const api = useApi();
    const items = ref<any[]>([]);
    const totalsByUf = ref<Record<string, number>>({});
    const page = ref(1);
    const totalPages = ref(1);
    const limit = 10;

    const filterNome = ref("");
    const filterPremio = ref("");
    const filterUf = ref("");

    const fetchWinners = async () => {
      try {
        const res = await api.get(
          `/ganhadores?limit=${limit}&page=${
            page.value
          }&nome=${encodeURIComponent(
            filterNome.value
          )}&premio=${encodeURIComponent(
            filterPremio.value
          )}&estado=${encodeURIComponent(filterUf.value)}`
        );

        items.value = res.data.data || [];
        totalPages.value = res.data.pagination?.totalPages || 1;

        const map: Record<string, number> = {};
        for (const w of items.value) {
          const uf = w.estado || "--";
          map[uf] = (map[uf] || 0) + 1;
        }
        totalsByUf.value = map;
      } catch (err) {
        console.error("Erro ao buscar ganhadores:", err);
      }
    };

    watch([filterNome, filterPremio, filterUf, page], fetchWinners, {
      immediate: true,
    });

    const prev = () => {
      if (page.value > 1) page.value--;
    };
    const next = () => {
      if (page.value < totalPages.value) page.value++;
    };

    const mapRef = ref<any>(null);
    let geoJsonLayer: any = null;

    function getColor(d: number) {
      return d > 50
        ? "#800026"
        : d > 20
        ? "#bd0026"
        : d > 10
        ? "#e31a1c"
        : d > 5
        ? "#fc4e2a"
        : d > 0
        ? "#fd8d3c"
        : "#ffffb2";
    }

    function styleFeature(feature: any) {
      const uf =
        feature.properties &&
        (feature.properties.sigla ||
          feature.properties.state ||
          feature.properties.name);
      const count = totalsByUf.value[uf] || 0;
      return {
        fillColor: getColor(count),
        weight: 1,
        opacity: 1,
        color: "#444",
        fillOpacity: 0.8,
      };
    }

    async function initMap() {
      try {
        const L = (await import("leaflet")) as any;

        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css";
          document.head.appendChild(link);
        }

        await nextTick();
        mapRef.value = L.map("brazil-map", { preferCanvas: true }).setView(
          [-14.235, -51.9253],
          4
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
        }).addTo(mapRef.value);

        const geoUrl =
          "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";
        const resp = await fetch(geoUrl);
        const geojson = await resp.json();

        geoJsonLayer = L.geoJSON(geojson, {
          style: styleFeature,
          onEachFeature: function (feature: any, layer: any) {
            const uf =
              feature.properties &&
              (feature.properties.sigla ||
                feature.properties.state ||
                feature.properties.name);
            const count = totalsByUf.value[uf] || 0;
            layer.bindTooltip(`${uf}: ${count}`, { sticky: true });
            layer.on({
              click: () => {
                mapRef.value.fitBounds(layer.getBounds());
              },
            });
          },
        }).addTo(mapRef.value);

        const legend = L.control({ position: "bottomright" });
        legend.onAdd = function () {
          const div = L.DomUtil.create("div", "info legend");
          const grades = [0, 1, 6, 11, 21, 51];
          const labels: string[] = [];
          for (let i = 0; i < grades.length; i++) {
            const from = grades[i];
            const to = grades[i + 1] - 1;
            const color = getColor(from + 1);
            labels.push(
              `<i style="background:${color}"></i> ${from}${
                to ? "–" + to : "+"
              }`
            );
          }
          div.innerHTML = labels.join("<br>");
          return div;
        };
        legend.addTo(mapRef.value);
      } catch (e) {}
    }

    onMounted(async () => {
      await initMap();
    });

    watch(totalsByUf, () => {
      if (geoJsonLayer && geoJsonLayer.setStyle) {
        geoJsonLayer.setStyle(styleFeature as any);
        geoJsonLayer.eachLayer((layer: any) => {
          const uf =
            layer.feature.properties &&
            (layer.feature.properties.sigla ||
              layer.feature.properties.state ||
              layer.feature.properties.name);
          const count = totalsByUf.value[uf] || 0;
          if (layer.setTooltipContent)
            layer.setTooltipContent(`${uf}: ${count}`);
        });
      }
    });

    return {
      items,
      totalsByUf,
      page,
      totalPages,
      filterNome,
      filterPremio,
      filterUf,
      prev,
      next,
    };
  },
});
</script>

<style scoped>
.winners-detail {
  padding: 2rem 1rem;
  font-family: "Inter", sans-serif;
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
  color: #111827;
  border-radius: 12px;
}

.winners-detail h2 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1f2937;
  text-align: center;
  position: relative;
}

.winners-detail h2::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin: 0.5rem auto 0;
  background: #2563eb;
  border-radius: 2px;
}

.map-and-list {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.map {
  flex: 1 1 40%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.map-container {
  width: 100%;
  height: 500px;
  border-radius: 12px;
}

.list {
  flex: 1 1 55%;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
}

.list input {
  display: block;
  margin-bottom: 0.75rem;
  padding: 0.6rem 0.8rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.list input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25);
}

.list ul {
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.list li {
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  background: #f9fafb;
  transition: background 0.2s ease;
  cursor: pointer;
}

.list li:hover {
  background: #e5e7eb;
}

.list li strong {
  color: #111827;
  font-weight: 600;
}

.pagination {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
}

.pagination button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  background: #2563eb;
  color: white;
  transition: background 0.2s ease, transform 0.1s ease;
}

.pagination button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.pagination button:hover:not(:disabled) {
  background: #1e40af;
  transform: translateY(-1px);
}

.pagination span {
  font-size: 0.95rem;
  color: #374151;
}

/* Responsividade */
@media (max-width: 900px) {
  .map-and-list {
    flex-direction: column;
  }
  .map,
  .list {
    width: 100%;
    flex: unset;
  }
}
</style>
