<script setup>
import '~/assets/styles/reset.scss'

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
    {
      rel: 'stylesheet',
      as: 'style',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
    },
    {
      rel: 'stylesheet',
      as: 'style',
      href: 'assets/styles/reset.css'
    }
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