<template>
  <footer class="footer-bar">
    <div class="cols">
      <div>
        <h4>Polgo Promo</h4>
        <p>Contato: contato@polgo.com.br • Telefone: (11) 4000-0000</p>
      </div>
      <div>
        <h4>Links</h4>
        <ul>
          <li><a href="#premios">Prêmios</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="/regulamento.pdf">Regulamento</a></li>
        </ul>
      </div>
      <div>
        <h4>Siga</h4>
        <p>Instagram • Facebook • X</p>
      </div>
    </div>
    <div class="copyright">© {{ year }} Polgo Promoções</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterBar",
  data() {
    return { year: new Date().getFullYear() };
  },
});
</script>

<style scoped>
.footer-bar {
  background: #111827;
  color: #f3f4f6;
  padding: 3rem 1rem;
  font-family: "Inter", sans-serif;
}

.footer-bar .cols {
  display: flex;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-bar h4 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #f9fafb;
}

.footer-bar p {
  font-size: 0.9rem;
  color: #d1d5db;
  line-height: 1.5;
}

.footer-bar a {
  color: #60a5fa;
  text-decoration: none;
  transition: color 0.25s ease;
}

.footer-bar a:hover {
  color: #2563eb;
}

.footer-bar ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.footer-bar li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.footer-bar .social {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.95rem;
}

.footer-bar .social a {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  transition: background 0.25s ease;
}

.footer-bar .social a:hover {
  background: rgba(37, 99, 235, 0.25);
}

.footer-bar .copyright {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #9ca3af;
}

@media (max-width: 720px) {
  .footer-bar .cols {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-bar .social {
    justify-content: center;
  }
}
</style>
