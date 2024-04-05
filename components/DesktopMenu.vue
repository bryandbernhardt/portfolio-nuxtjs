<template>
  <div class="desktop-menu">
    <div class="desktop-menu__item">
      <nuxt-link
        :to="localePath('index')"
        class="link"
        :aria-label="$t('home.home')"
      >
        <font-awesome-icon :icon="['fa-solid', 'fa-home']" class="icon" />
        <span>{{ $t('home.home') }}</span>
      </nuxt-link>
    </div>
    <div class="desktop-menu__item">
      <nuxt-link
        :to="localePath('knowledges')"
        class="link"
        :aria-label="$t('home.knowledges')"
      >
        <font-awesome-icon :icon="['fa-solid', 'fa-book']" class="icon" />
        <span>{{ $t('home.knowledges') }}</span>
      </nuxt-link>
    </div>
    <div class="desktop-menu__item">
      <nuxt-link
        :to="localePath('achievements')"
        class="link"
        :aria-label="$t('home.achievements')"
      >
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
  box-shadow: 0rem 0rem 9rem 3rem #ffffff0d;
  flex-wrap: wrap;

  .desktop-menu__item {
    color: $secoundaryText;
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
      color: $color10;
    }
  }
}
</style>