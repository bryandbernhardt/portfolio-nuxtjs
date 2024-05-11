<script setup lang="ts">
const { $i18n } = useNuxtApp();
const localePath = useLocalePath();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath()

const isOpen = ref(false)
const search = ref('')

// computed

const availableLocales = computed(() => {
  return (locales.value).filter(
    i => i.code !== locale.value
      && i.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .includes(
          search.value
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
        )
  )
})

const activeLocale = computed(() => {
  return (locales.value).find(i => i.code === locale.value)
})

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

    <div class="setting-content">
      <h2>{{ $t('settings.subtitles.theme') }}</h2>
      <ThemeChanger />
    </div>

    <div class="setting-content">
      <h2>{{ $t('settings.subtitles.languages') }}</h2>
      <UButton :label="activeLocale.name + ', ' + $t('settings.change_language')" @click="isOpen = true" color="white" />
      <USlideover v-model="isOpen">
        <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ $t('settings.subtitles.languages') }}
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>
          </template>
          <div style="margin-bottom: 0.2rem"><UInput color="white" variant="outline" placeholder="Search..." v-model="search" /></div>
          <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" :aria-label="locale.name">
            <div class="p-1">{{ locale.name }}</div>
            <UDivider />
          </NuxtLink>
        </UCard>
      </USlideover>
    </div>

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

    .setting-content {
      margin-bottom: 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
  }
}
</style>