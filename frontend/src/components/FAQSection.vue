<template>
  <v-container class="faq py-12">
    <v-row>
      <v-col cols="12">
        <h2>FAQ</h2>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="q"
          label="Buscar pergunta..."
          outlined
          dense
          clearable
        />
      </v-col>

      <v-col cols="12">
        <v-list>
          <v-list-item
            v-for="item in filtered"
            :key="item.q"
            class="faq-item"
          >
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                {{ item.q }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.a }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";

export default defineComponent({
  name: "FAQSection",
  setup() {
    const q = ref("");
    const items = ref([
      { q: "Quem pode participar?", a: "Clientes maiores de 18 anos das lojas participantes." },
      { q: "Como resgatar o prêmio?", a: "Entraremos em contato com os ganhadores via e-mail e telefone." },
    ]);

    const filtered = computed(() => {
      if (!q.value) return items.value;
      return items.value.filter(
        (it) =>
          it.q.toLowerCase().includes(q.value.toLowerCase()) ||
          it.a.toLowerCase().includes(q.value.toLowerCase())
      );
    });

    const jsonLd = computed(() => {
      const faqs = items.value.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      }));
      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs,
      });
    });

    onMounted(() => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = jsonLd.value;
      document.head.appendChild(script);
    });

    return { q, filtered };
  },
});
</script>

<style scoped>
.faq {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
}
</style>
