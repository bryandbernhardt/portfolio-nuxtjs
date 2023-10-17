<template>
  <select v-model="$colorMode.preference" class="theme-changer" aria-label="Theme color">
    <option value="system">⛅️ System</option>
    <option value="light">☀️ Light</option>
    <option value="dark">🌙 Dark</option>
  </select>
</template>

<style>
.theme-changer {
  position: absolute;
  right: 0;
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