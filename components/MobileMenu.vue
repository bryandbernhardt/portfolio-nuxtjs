<template>
  <div class="mobile-menu">
    <nuxt-link
      class="mobile-menu-item"
      :to="localePath('knowledges')"
      :aria-label="$t('knowledges.title')"
    >
      <font-awesome-icon :icon="['fa-solid', 'fa-book']" class="icon" />
    </nuxt-link>
    <nuxt-link
      class="mobile-menu-item"
      :to="localePath('index')"
      :aria-label="$t('home.home')"
    >
      <font-awesome-icon :icon="['fa-solid', 'fa-home']" class="icon" />
    </nuxt-link>
    <nuxt-link
      class="mobile-menu-item"
      :to="localePath('achievements')"
      :aria-label="$t('achievements.title')"
    >
      <font-awesome-icon class="icon" :icon="['fa-solid', 'fa-clock-rotate-left']" />
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.mobile-menu {
  z-index: 1;
  color: $color10;
  background-color: $color60;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  align-items: center;
  box-shadow: 0.6rem 0.06rem 0.6rem 0.3rem #0000000d;

  .mobile-menu-item {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;

    .icon {
      height: 4rem;
      padding: 1rem;
    }

    &:hover {
      filter: brightness(1.2);
    }
  }
}
</style>