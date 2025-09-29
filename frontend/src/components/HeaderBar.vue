<template>
  <header class="header-bar" role="banner">
    <div class="brand">Polgo Promo</div>
    <nav
      :class="{ open: mobileOpen }"
      role="navigation"
      aria-label="Main Navigation"
    >
      <a href="#" @click.prevent="goHome" :class="{ active: active === 'home' }"
        >Home</a
      >
      <a
        href="#como-participar"
        @click.prevent="scrollTo('como-participar')"
        :class="{ active: active === 'como-participar' }"
        >Como Participar</a
      >
      <a
        href="#premios"
        @click.prevent="scrollTo('premios')"
        :class="{ active: active === 'premios' }"
        >Prêmios</a
      >
      <a
        href="#faq"
        @click.prevent="scrollTo('faq')"
        :class="{ active: active === 'faq' }"
        >FAQ</a
      >
      <a
        href="#ganhadores-detalhado"
        @click.prevent="scrollTo('ganhadores-detalhado')"
        :class="{ active: active === 'ganhadores-detalhado' }"
        >Ganhadores</a
      >
      <a
        href="#lojas-mapa"
        @click.prevent="scrollTo('lojas-mapa')"
        :class="{ active: active === 'lojas-mapa' }"
        >Lojas</a
      >
      <a
        href="#participar"
        @click.prevent="scrollTo('participar')"
        :class="{ active: active === 'participar' }"
        >Participar</a
      >
    </nav>
    <div class="actions">
      <button class="login">Login</button>
      <button class="signup">Cadastrar</button>
      <button
        class="hamburger"
        @click="mobileOpen = !mobileOpen"
        aria-label="Open menu"
      >
        ☰
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "HeaderBar",
  setup() {
    const mobileOpen = ref(false);
    const active = ref("home");
    const router = useRouter();

    function goHome() {
      mobileOpen.value = false;
      router.push("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function scrollTo(id: string) {
      mobileOpen.value = false;
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 64; // offset for header
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    if (typeof window !== "undefined") {
      const sections = [
        "como-participar",
        "premios",
        "faq",
        "ganhadores-detalhado",
        "lojas-mapa",
        "participar",
      ];
      const observer = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              active.value = e.target.id || "home";
            }
          }
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    }

    return { mobileOpen, goHome, scrollTo, active };
  },
});
</script>

<style scoped>
.header-bar {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  z-index: 50;
}
.header-bar .brand {
  font-weight: 700;
}
.header-bar nav {
  display: flex;
  gap: 0.75rem;
}
.header-bar nav a {
  text-decoration: none;
  color: #111827;
  font-weight: 600;
}

.header-bar nav a:hover {
  color: #2563eb;
}
.header-bar .actions {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.hamburger {
  display: none;
}
a {
  color: #111827;
}
a:hover {
  color: #2563eb;
}
.header-bar .actions .login,
.header-bar .actions .signup {
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.375rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.header-bar .actions .login {
  background-color: #2563eb; /* azul */
  color: #fff;
}

.header-bar .actions .login:hover {
  background-color: #1e40af; /* azul escuro */
}

.header-bar .actions .signup {
  background-color: #fff;
  color: #2563eb;
  border-color: #2563eb;
}

.header-bar .actions .signup:hover {
  background-color: #2563eb;
  color: #fff;
}

@media (max-width: 720px) {
  .header-bar nav {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 56px;
    background: #fff;
    flex-direction: column;
    padding: 1rem;
  }
  .header-bar nav.open {
    display: flex;
  }
  .hamburger {
    display: inline-block;
  }
}
</style>
