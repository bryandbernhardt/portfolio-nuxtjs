<script setup lang="js">
const { $i18n } = useNuxtApp();
const localePath = useLocalePath();

const links = computed(() => [
  {
    title: $i18n.t('home.overview.title'),
    icon: 'ic:baseline-home',
    href: '/'
  },
  {
    title: $i18n.t('settings.title'),
    disabled: true,
  }
]);
</script>

<template>
  <v-container>
    <v-breadcrumbs :items="links" divider=">" class="d-flex my-2 px-0 py-5 text-caption">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :disabled="item.disabled"
          :to="localePath(item.href)"
        >
          <span class="d-flex align-center">
            <Icon v-if="item?.icon" :name="item.icon" size="1.5rem" />
            <span>{{ item.title }}</span>
          </span>
        </v-breadcrumbs-item>
      </template>
      <template v-slot:divider>
        <v-breadcrumbs-divider  class="pa-0"/>
      </template>
    </v-breadcrumbs>
    <h1 class="text-h4 text-md-h3 mb-4">{{ $t('settings.title') }}</h1>

    <h2 class="text-h8 text-md-h6">{{ $t('settings.subtitles.theme') }}</h2>
    <ThemeChanger />

    <h2 class="text-h8 text-md-h6">{{ $t('settings.subtitles.languages') }}</h2>
    <LanguageChanger />

  </v-container>
</template>>

<style lang="scss" scoped>
.v-breadcrumbs {
  line-height: initial;
}
</style>