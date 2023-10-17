<template>
  <div class="initial-page">
    <div class="presentation-card">
      <div class="aboutme-wrapper">
        <NuxtImg preload class="profile-image" src="https://avatars.githubusercontent.com/u/77077402?v=4" alt="Bryan Dietrich Bernhardt" width="150" height="150" />
        <p class="main-message">Olá👋 Meu nome é Bryan Dietrich Bernhardt, sou desenvolvedor Full Stack e analista de sistemas. <br>Seja bem vindo ao meu portfólio!<br><br>Explore-o utilizando o menu a seguir...</p>
      </div>
      <div class="menu-wrapper">
        <NuxtLink to="aboutme"><BaseButton label="Sobre Mim" /></NuxtLink>
        <NuxtLink to="knowledges"><BaseButton label="Conhecimentos" /></NuxtLink>
        <NuxtLink to="achievements"><BaseButton label="Conquistas"/></NuxtLink>
      </div>
    </div>
    <div class="footer">
      <a
        href="https://github.com/bryandbernhardt/"
        aria-label="Bryan Dietrich Bernhardt's GitHub"
        target="_blank"
      >
        <Icon class="icon-button" size="2em" name="uil:github" :color="colorTheme" />
      </a>
      <a
        href="https://www.linkedin.com/in/bryandbernhardt/"
        aria-label="Bryan Dietrich Bernhardt's LinkedIn"
        target="_blank"
      >
        <Icon class="icon-button" size="2em" name="uil:linkedin" :color="colorTheme" />
      </a>
      <a
        href="https://www.instagram.com/baiaaam/"
        aria-label="Bryan Dietrich Bernhardt's Instagram"
        target="_blank"
      >
        <Icon class="icon-button" size="2em" name="uil:instagram" :color="colorTheme" />
      </a>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/BaseButton.vue'

export default {
  components: {
    BaseButton
  },

  computed: {
    colorTheme() {
      return this.$colorMode.value === 'dark' ? '#eeeeee' : '#424242';
    }
  }
}
</script>

<style lang="scss">
.initial-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .profile-image {
    border-radius: 50%;
  }

  & .presentation-card {
    max-width: 830px;
    padding: 2rem;
    padding-bottom: 4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    overflow-x: auto;

    & .aboutme-wrapper {
      grid-column: span 3;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;

      & .main-message {
        max-width: 350px;
      }
    }

    & .menu-wrapper {
      display: flex;
      gap: 0.5rem;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      height: fit-content;
    }
  }

  & .footer {
    gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
    bottom: 0;
    width: 100%;
    padding: 0.5em;
    margin-top: 0.5rem;
    background-color: #eeeeee;
    color: #212121;

    & .icon-button {
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        filter: drop-shadow(0 0 10px #39FF14);
      }
    }
  }
}

.dark-mode body {
  & .initial-page {
    & .footer {
      background-color: #424242;
      color: #f5f5f5;
    }
  }
}
</style>