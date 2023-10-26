<script setup lang="ts">
const props = defineProps({
  error: Object
})
const localePath = useLocalePath()

const handleError = () => clearError({ redirect: localePath('/') })
</script>

<template>
  <div class="error-page">
    <div class="error-info">
      <h1>{{ error!.statusCode }}</h1>
      <h2>{{ $t('error.message') }} {{ error!.statusMessage }}</h2>
    </div>
    <BaseButton
      class="btn-return"
      :label="$t('error.return')"
      @click="handleError"
    />
  </div>
</template>

<style lang="scss">
.error-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .error-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
  }

  & .btn-return {
    justify-self: flex-end;
  }
}
</style>