<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="main" >
    <ThemeChanger class="theme-changer" />
    <div class="page">
      <UContainer>
        <slot />
      </UContainer>
    </div>
    <SettingsButton class="settings-button" v-if="route.matched.some(({ path }) => !path.startsWith('/settings'))" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  min-height: 100vh;

  .page {
    padding: 3.5rem 0;
  }
}

.theme-changer {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
}

.settings-button {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>