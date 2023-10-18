<script setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://avatars.githubusercontent.com/u/77077402?v=4'
    },
  ]
})

useSeoMeta({
  title: 'Bryan Dietrich Bernhardt Developer',
  ogTitle: 'Bryan Dietrich Bernhardt Developer',
  description: 'Bryan Dietrich Bernhardt is a Full Stack developer/programmer studying Systemas Analysis and Development, he has great experience in Vue and NodeJS.',
  ogDescription: 'Bryan Dietrich Bernhardt is a Full Stack developer/programmer studying Systemas Analysis and Development, he has great experience in Vue and NodeJS.',
  ogImage: 'https://avatars.githubusercontent.com/u/77077402?v=4',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <ColorScheme placeholder="..." tag="span">
      <ThemeChanger />
      <NuxtPage />
    </ColorScheme>
  </div>
</template>

<style>
h1 {
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 1rem;
}

p {
  line-height: 1.5;
}
body {
  background-color: #fff;
  color: #212121;
  font-family: 'Roboto', sans-serif;
}
.dark-mode body {
  background-color: #212121;
  color: #f5f5f5;
}
</style>