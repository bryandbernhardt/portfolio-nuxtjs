<script setup>
const localePath = useLocalePath()
</script>

<template>
  <LazyNuxtLink :to="localePath('/')"><BackButton /></LazyNuxtLink>
  <div class="achievements-container">
    <h1>{{ $t('achievements.title') }}</h1>
    <p>{{ $t('achievements.coming_soon') }}</p>
  </div>
</template>

<style>
.achievements-container {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>