<script setup lang="ts">
const { $i18n } = useNuxtApp();
const localePath = useLocalePath();

const links = computed(() => [
  {
    label: '',
    icon: 'i-heroicons-home-solid',
    to: localePath('index')
  },
  {
    label: $i18n.t('settings.title'),
    icon: 'i-heroicons-cog-6-tooth-solid'
  }
]);
</script>

<template>
  <div class="settings-page">
    <UBreadcrumb :links="links" class="breadcrumb" />
    <h1>{{ $t('settings.title') }}</h1>
    <h2>{{ $t('settings.subtitles.languages') }}</h2>
    <LanguageChanger />
  </div>
</template>

<style scoped lang="scss">
body {
  .settings-page {
    margin: 0 auto;
    max-width: 75rem;

    .breadcrumb {
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;
      max-width: calc(100vw - 8.5rem);
    }
  }
}
</style>