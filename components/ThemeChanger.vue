<script setup>
const { $i18n } = useNuxtApp();
const colorMode = useColorMode()

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

const formattedOptions = computed(() => options.value.map(
  (option) => [
    {
      label: option.name,
      click: () => colorMode.preference = option.value,
    }
  ]
));

</script>

<template>
    <UDropdown :items="formattedOptions" :popper="{ placement: 'bottom-start' }" >
      <UButton color="white" :label="options.find((option) => option.value === $colorMode.preference).name" trailing-icon="i-heroicons-chevron-down-20-solid" block />
    </UDropdown>
</template>

<style scoped lang="scss">
button {
  justify-content: space-between;
}
</style>