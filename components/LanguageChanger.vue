<script setup>
const { locale, locales } = useI18n();

const switchLocalePath = useSwitchLocalePath()

const value = ref('');

const formattedLocales = locales.value.map(l => {
  return {
    title: l.name,
    value: l.code
  }
})

watch(value, async (newValue, oldValue) => {
  if (newValue !== oldValue)
    navigateTo(switchLocalePath(newValue))
})

onMounted(() => {
  value.value = locale.value
})
</script>

<template>
  <div class="w-100">
    <v-autocomplete
      :label="$t('settings.subtitles.languages')"
      :items="formattedLocales"
      v-model="value"
      transition="fade-transition"
      clearable
    />
  </div>
</template>