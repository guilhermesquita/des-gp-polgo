<template>
  <section class="winners header-offset">
    <h2>Últimos ganhadores</h2>
    <ul role="list" aria-label="Últimos ganhadores">
      <li v-for="w in winners" :key="w._id">
        <CardBase role="article" aria-label="Ganhador">
          <strong>{{ w.nome }}</strong> — {{ w.premio }}
        </CardBase>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useApi } from "../composables/useApi";
import CardBase from "./CardBase.vue";

export default defineComponent({
  name: "WinnersSection",
  setup() {
    const winners = ref<any[]>([]);
    const api = useApi();

    onMounted(async () => {
      try {
        const res = await api.get("/ganhadores?order=DESC&limit=3");
        console.log(res.data);
        winners.value = res.data.data || [];
      } catch (err) {
        // silent
      }
    });

    return { winners };
  },
  components: { CardBase },
});
</script>

<style scoped>
.winners {
  padding: 2rem 0;
}
li {
  list-style-type: none;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>
