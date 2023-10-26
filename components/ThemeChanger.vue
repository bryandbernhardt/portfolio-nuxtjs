<template>
  <select v-model="$colorMode.preference" class="theme-changer" aria-label="Theme color">
    <option value="system">⛅️ {{ $t('theme_changer.system') }}</option>
    <option value="light">☀️ {{ $t('theme_changer.light') }}</option>
    <option value="dark">🌙 {{ $t('theme_changer.dark') }}</option>
  </select>
</template>

<style>
.theme-changer {
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: #eeeeee;
  color: #212121;
  border-color: #f5f5f5;
  border-radius: 1rem;
}

.dark-mode body {
  & .theme-changer {
    background-color: #424242;
    color: #f5f5f5;
    border-color: #424242;
  }
}
</style>