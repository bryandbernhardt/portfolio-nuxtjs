<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-main class="w-100" style="min-height: 300px;">
      <SettingsButton v-if="route.matched.some(({ path }) => !path.endsWith('/settings'))" />
      <slot />
    </v-main>
  </v-layout>
</template>