<template>
  <div class="mobile-menu">
    <nuxt-link class="mobile-menu-item" :to="localePath('knowledges')">
      <font-awesome-icon :icon="['fa-solid', 'fa-book']" class="icon" />
    </nuxt-link>
    <nuxt-link class="mobile-menu-item" :to="localePath('index')">
      <font-awesome-icon :icon="['fa-solid', 'fa-home']" class="icon" />
    </nuxt-link>
    <nuxt-link class="mobile-menu-item" :to="localePath('achievements')">
      <font-awesome-icon class="icon" :icon="['fa-solid', 'fa-clock-rotate-left']" />
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.mobile-menu {
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

  .mobile-menu-item {
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;

    .icon {
      width: 2rem;
      padding: 0.5rem;
    }

    &:hover {
      filter: brightness(1.2);
    }
  }
}
</style>