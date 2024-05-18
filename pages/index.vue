<template>
  <v-container>
    <span class="font-weight-bold">{{ $t('home.overview.title') }}</span>
    <h1 class="text-h4 text-md-h3 mb-4">Bryan Dietrich Bernhardt</h1>
    <div class="mb-8">
      <p class="text-body-2 text-md-body-1">{{ $t('home.overview.content.1') }}</p>
      <br />
      <p class="text-body-2 text-md-body-1">{{ $t('home.overview.content.2') }}</p>
      <p class="text-body-2 text-md-body-1">{{ $t('home.overview.content.3') }}</p>
    </div>
    <Stacks />
  </v-container>
</template>