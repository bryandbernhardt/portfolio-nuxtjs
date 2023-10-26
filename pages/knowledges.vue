<script setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath('/')"><BackButton /></NuxtLink>
  <div class="knowledges-container">
    <h1>{{ $t('knowledges.title') }}</h1>
    <p>{{ $t('knowledges.coming_soon') }}</p>
  </div>
</template>

<style>
.knowledges-container {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>