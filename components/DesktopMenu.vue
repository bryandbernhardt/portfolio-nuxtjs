<template>
  <div class="desktop-menu">
    <div class="desktop-menu__item">
      <nuxt-link :to="localePath('index')" class="link">
        <font-awesome-icon :icon="['fa-solid', 'fa-home']" class="icon" />
        <span>{{ $t('home.home') }}</span>
      </nuxt-link>
    </div>
    <div class="desktop-menu__item">
      <nuxt-link :to="localePath('knowledges')" class="link">
        <font-awesome-icon :icon="['fa-solid', 'fa-book']" class="icon" />
        <span>{{ $t('home.knowledges') }}</span>
      </nuxt-link>
    </div>
    <div class="desktop-menu__item">
      <nuxt-link :to="localePath('achievements')" class="link">
        <font-awesome-icon :icon="['fa-solid', 'fa-clock-rotate-left']" class="icon" />
        <span>{{ $t('home.achievements') }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.desktop-menu {
  display: flex;
  justify-content: center;
  gap: 3.8rem;
  padding: 2.5rem;
  box-shadow: 0.06rem 0.06rem 0.6rem 0.3rem #0000000d;

  .desktop-menu__item {
    color: $color10;
    font-weight: 800;
  }

  .desktop-menu__item {

    .link {
      display: flex;
      gap: 0.25rem;
      align-items: center;
      
      .icon {
        width: 1rem;
      }
    }

    .link:hover {
      filter: brightness(1.2);
    }
  }
}
</style>