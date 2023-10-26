<script setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :to="localePath('/')"><BackButton /></NuxtLink>
  <div class="aboutme-container">
    <h1>{{ $t('about_me.title') }}</h1>
    <p>
      {{ $t('about_me.resume') }}<br>
      {{ $t('about_me.work') }}<br>
      {{ $t('about_me.college') }}<br><br>
      🎓 {{ $t('about_me.topics.learning') }}<br>
      🧑‍🚀 {{ $t('about_me.topics.languages') }}<br>
      🚀 {{ $t('about_me.topics.frameworks') }}<br>
      🛰️ {{ $t('about_me.topics.tools') }}<br>
      💻 {{ $t('about_me.topics.so') }}<br>
  </p>
  </div>
</template>

<style>
.aboutme-container {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>