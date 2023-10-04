<template>
  <div>
    <ColorScheme placeholder="..." tag="span">
      <ThemeChanger />
      <NuxtPage />
    </ColorScheme>
  </div>
</template>

<script>
import '~/assets/styles/reset.scss'
</script>

<style>
h1 {
  font-size: 2rem;
  line-height: 1.5;
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