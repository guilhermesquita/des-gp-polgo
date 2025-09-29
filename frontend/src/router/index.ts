import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Winners from "../views/WinnersView.vue";
import Stores from "../views/StoresView.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/ganhadores", name: "winners", component: Winners },
  { path: "/lojas", name: "stores", component: Stores },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const titles: Record<string, string> = {
    home: 'Polgo Promoção — Ganhe prêmios nas lojas participantes',
    winners: 'Ganhadores — Polgo',
    stores: 'Lojas Participantes — Polgo',
  };
  const descriptions: Record<string, string> = {
    home: 'Participe da promoção Polgo: confira prêmios, lojas participantes e ganhadores.',
    winners: 'Veja os ganhadores recentes da promoção Polgo.',
    stores: 'Confira as lojas participantes e encontre a mais próxima de você.',
  };
  const title = titles[to.name as string] || 'Polgo Promoção';
  const desc = descriptions[to.name as string] || 'Participe da promoção Polgo.';
  if (title) document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', desc);
});

export default router;
