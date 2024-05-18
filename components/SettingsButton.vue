<script setup lang="ts">
const colorMode = useColorMode();

const isDarkTheme = ref(true);

watch(colorMode, async() => isDarkTheme.value = colorMode.value === 'dark')
</script>

<template>
  <span class="settings-button">
    <nuxt-link
      class="d-flex ma-2 justify-end"
      :to="localePath('settings')"
      :aria-label="$t('settings.title')"
    >
      <Icon name="ic:round-settings" size="2rem" :class="{ invert: !isDarkTheme }" />
    </nuxt-link>
  </span>
</template>

<style scoped lang="scss">
.mobile-menu-item {
  .invert {
    filter: invert(100%);
  }
}
</style>