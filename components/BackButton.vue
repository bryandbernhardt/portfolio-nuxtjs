<template>
  <button class="back-button" :style="`--clr:${color};`">⬅</button>
</template>

<script>
export default {
  name: "BackButton",
  props: {
    color: {
      type: String,
      default: "#39FF14",
    },
  },
};
</script>

<style lang="scss">
.back-button {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: 0.2s;
  position: absolute;
  margin: 0.5rem;
  border: none;
  background: #eeeeee;
  color: #212121;
  transition: 0.2s;
}

.back-button:hover {
  animation: box 3s infinite;
}

@keyframes box {
  0% {
    box-shadow: #27272c;
  }
  50% {
    box-shadow: 0 0 20px var(--clr);
  }
  100% {
    box-shadow: #27272c;
  }
}

.dark-mode body {
  & .back-button {
    background: #424242;
    color: #f5f5f5;
  }
}
</style>