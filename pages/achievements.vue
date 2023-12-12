<template>
  <div class="achievements-page">
    <div class="achievements-page-header">
      <h2>{{ $t('achievements.title') }}</h2>
      <p>{{ $t('achievements.coming_soon') }}</p>
    </div>
    <div class="achievements-container">
      <AchievementsHistory
        v-for="achievement in achievements"
        :key="achievement.title"
        :achievement="achievement"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievements: [
        {
          title: this.$t('achievements.items.1.title'),
          date: this.$t('achievements.items.1.date'),
          description: this.$t('achievements.items.1.description'),
        },
        {
          title: this.$t('achievements.items.2.title'),
          date: this.$t('achievements.items.2.date'),
          description: this.$t('achievements.items.2.description'),
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.achievements-page {
  padding: 2rem;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;

  .achievements-page-header {
    margin-bottom: 2rem;
  }

  .achievements-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
}
</style>