<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <span class="settings-button">
    <nuxt-link
        class="mobile-menu-item"
        :to="localePath('settings')"
        :aria-label="$t('settings.title')"
    >
      <font-awesome-icon :icon="['fas', 'gear']" class="icon" />
    </nuxt-link>
  </span>
</template>

<style scoped lang="scss">
.settings-button {

  .mobile-menu-item {
    display: flex;
    width: 100%;
    height: 100%;

    .icon {
      height: 3.5rem;
      padding: 1rem;
    }
  }
}
</style>