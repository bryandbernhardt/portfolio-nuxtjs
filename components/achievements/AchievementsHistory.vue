<template>
  <div class="achievements-history">
    <div class="achievement-title">
      <div class="history-pin"><font-awesome-icon :icon="['fa', 'fa-trophy']" /></div>
      <div>
        <p><span class="achievement-author">Bryan Dietrich Bernhardt</span> {{ achievement.title }}</p>
        <small>{{ achievement.date }}</small>
      </div>
    </div>
    <div class="achievement-content">
      <hr />
      <p class="achievement-info">{{ achievement.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    achievement: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.achievements-history {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 50rem;

  .achievement-title {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.75rem;
    line-height: 0.7rem;
    margin: 0.2rem 0;

    small {
      font-size: 0.6rem;
    }

    .history-pin {
      background-color: $color10;
      border-radius: 50%;
      color: $color60;
      width: 1.5rem;
      height: 1.5rem;
      min-width: 1.5rem;
      min-height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .fa-trophy {
        width: 1rem;
      }
    }

    .achievement-author {
      font-weight: bold;
      color: $color10;
    }
  }

  .achievement-content {
    display: flex;

    hr {
      margin: 0 0.6rem;
      border: 3px solid $color30;
      height: inherit;
      width: 0.125rem;
      border-radius: 1rem;
    }

    .achievement-info {
      background-color: $color30;
      color: $color60;
      padding: 0.6rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      margin-bottom: 1.5rem;
    }
  }
}
</style>