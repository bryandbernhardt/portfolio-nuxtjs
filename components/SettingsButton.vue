<script setup lang="ts">
const colorMode = useColorMode();

const isDarkTheme = ref(true);

watch(colorMode, async() => isDarkTheme.value = colorMode.value === 'dark')
</script>

<template>
  <span class="settings-button">
    <nuxt-link
        class="mobile-menu-item"
        :to="localePath('settings')"
        :aria-label="$t('settings.title')"
    >
      <Icon name="ic:round-settings" size="2rem" class="settings-icon" :class="{ invert: !isDarkTheme }" />
    </nuxt-link>
  </span>
</template>

<style scoped lang="scss">
.settings-button {

  .mobile-menu-item {
    display: flex;
    width: 100%;
    height: 100%;

    .settings-icon {
      margin: 0.5rem;
    }

    .invert {
      filter: invert(100%);
    }
  }
}
</style>