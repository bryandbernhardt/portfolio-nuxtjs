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
  <div class="language-changer">
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" :aria-label="locale.name">
      <UTooltip :text="locale.name" :popper="{ arrow: true }">
        <Icon size="2em" :name="localesFlags[locale.code]" />
      </UTooltip>
    </NuxtLink>
  </div>

</template>

<style lang="scss">
.language-changer {
  display: flex;
  gap: 0.2rem;
}
</style>