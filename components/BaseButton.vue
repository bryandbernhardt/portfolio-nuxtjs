<template>
  <button class="base-button" :style="`--clr:${color};`"><span>{{ label }}</span><i></i></button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#39FF14",
    },
  },
};
</script>

<style>
  & .base-button {
    width: 200px;
    height: 53px;
    position: relative;
    background: #eeeeee;
    color: #212121;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: 0.2s;
    border-radius: 0.5rem;
    cursor: pointer;

    & span {
      position: relative;
      z-index: 1;
    }

    & i {
      position: absolute;
      inset: 0;
      display: block;
    }
  }

  & .base-button:hover {
    background: var(--clr);
    /* box-shadow: 0 0 35px var(--clr); */
    animation: box 3s infinite;
  }

  & .base-button::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #eeeeee;
    border-radius: 0.5rem;
  }

  .base-button i::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    left: 80%;
    top: -2px;
    border: 2px solid var(--clr);
    background: #eeeeee;
    transition: 0.2s;
    border-radius: 0.5rem;
  }

  .base-button:hover i::before {
    width: 15px;
    left: 20%;
  }

  .base-button i::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    left: 20%;
    bottom: -2px;
    border: 2px solid var(--clr);
    background: #eeeeee;
    transition: 0.2s;
    border-radius: 0.5rem;
  }

  .base-button:hover i::after {
    width: 15px;
    left: 60%;
  }

  @keyframes box {
    0% {
      box-shadow: #27272c;
    }
    50% {
      box-shadow: 0 0 25px var(--clr);
    }
    100% {
      box-shadow: #27272c;
    }
  }

  .dark-mode body {
    & .base-button {
      background: #424242;
      color: #f5f5f5;
    }

    & .base-button::before {
      background: #424242;
    }

    & .base-button i::before {
      background: #424242;
    }

    & .base-button i::after {
      background: #424242;
    }
  }
</style>