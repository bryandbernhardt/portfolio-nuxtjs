<template>
  <div class="apresentation-card">
    <div class="apresentation-wrapper">
      <nuxt-img
        preload
        format="webp"
        class="profile-image"
        src="https://avatars.githubusercontent.com/u/77077402?v=4"
        alt="Bryan Dietrich Bernhardt"
        width="150"
        height="150"
        sizes="150px"
        loading="lazy"
        preset="profileImage"
      />
      <p class="apresentation-text">
        {{ $t('home.hello') }}<br />
        {{ $t('home.welcome') }}<br /><br />
        {{ $t('home.explore') }}
      </p>
    </div>
    <div class="apresentation-links">
      <a href="https://www.instagram.com/baiaaam/" target="_blank" aria-label="Instagram">
        <font-awesome-icon :icon="['fa-brands', 'fa-square-instagram']" class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/bryandbernhardt/" target="_blank" aria-label="LinkedIn">
        <font-awesome-icon :icon="['fa-brands', 'fa-linkedin']" class="icon" />
      </a>
      <a href="https://github.com/bryandbernhardt/" target="_blank" aria-label="GitHub">
        <font-awesome-icon :icon="['fa-brands', 'fa-square-github']" class="icon" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.apresentation-card {
  background-color: $color30;
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  padding: 2rem;
  border-radius: 1rem;
  gap: 2rem;

  .apresentation-wrapper {
    display: flex;
    gap: 1.5rem;

    & .profile-image {
      border-radius: 50%;
    }

    .apresentation-text {
      color: $clearText;
    }
  }

  .apresentation-links {
    display: flex;
    justify-content: flex-end;
    gap: 1.3rem;
    color: $color10;
    filter: drop-shadow(0px 0px 3px #ADAC9A);

    .icon {
      width: 1.75rem;
    }
  }
}

@media (max-width: 500px) {
  .apresentation-card {
    .apresentation-wrapper {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .apresentation-links {
      justify-content: center;
    }
  }
}
</style>