<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const localesFlags = {
  en: 'emojione:flag-for-united-states',
  es: 'emojione:flag-for-argentina',
  pt: 'emojione:flag-for-brazil',
}
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
    <Icon size="2em" :name="localesFlags[locale.code]" />
  </NuxtLink>

</template>