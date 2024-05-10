<script setup>
const { $i18n } = useNuxtApp();

const options = computed(() => {
  return [
    {
      name: $i18n.t('theme_changer.system'),
      value: 'system'
    },
    {
      name: $i18n.t('theme_changer.light'),
      value: 'light',
    },
    {
      name: $i18n.t('theme_changer.dark'),
      value: 'dark'
    }
  ]
});

</script>

<template>
  <span>
    <USelect v-model="$colorMode.preference" :options="options" option-attribute="name" />
  </span>
</template>
