<script setup>
const { $i18n } = useNuxtApp();
const colorMode = useColorMode()

import { useTheme } from 'vuetify'

const theme = useTheme()

const options = computed(() => {
  return [
    {
      title: $i18n.t('theme_changer.system'),
      value: 'system'
    },
    {
      title: $i18n.t('theme_changer.light'),
      value: 'light',
    },
    {
      title: $i18n.t('theme_changer.dark'),
      value: 'dark'
    }
  ]
});

watch(colorMode, () => {
  theme.global.name.value = colorMode.value
})
</script>

<template>
  <v-select
    v-model="$colorMode.preference"
    :items="options"
    transition="fade-transition"
  />
</template>