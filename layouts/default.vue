<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="main" >
    <SettingsButton class="settings-button" v-if="route.matched.some(({ path }) => !path.endsWith('/settings'))" />
    <div class="page">
      <UContainer>
        <slot />
      </UContainer>
    </div>
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

.settings-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>