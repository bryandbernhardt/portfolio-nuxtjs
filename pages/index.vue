<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const colorMode = useColorMode();

const isDarkTheme = ref(true);

watch(colorMode, async() => isDarkTheme.value = colorMode.value === 'dark')
</script>

<template>
  <div class="home-page">
    <span>{{ $t('home.overview.title') }}</span>
    <h1>Bryan Dietrich Bernhardt</h1>
    <div class="welcome-text">
      <p>{{ $t('home.overview.content.1') }}</p>
      <br />
      <p>{{ $t('home.overview.content.2') }}</p>
      <p>{{ $t('home.overview.content.3') }}</p>
    </div>
    <h2>Stacks</h2>
    <h3>Front End</h3>
    <div class="stacks-content">
      <UTooltip text="HTML5" :popper="{ arrow: true }">
        <Icon name="devicon:html5" size="4rem" />
      </UTooltip>
      <UTooltip text="CSS3" :popper="{ arrow: true }">
        <Icon name="devicon:css3" size="4rem" />
      </UTooltip>
      <UTooltip text="Sass" :popper="{ arrow: true }">
        <Icon name="devicon:sass" size="4rem" />
      </UTooltip>
      <UTooltip text="JavaScript" :popper="{ arrow: true }">
        <Icon name="devicon:javascript" size="4rem" />
      </UTooltip>
      <UTooltip text="TypeScript" :popper="{ arrow: true }">
        <Icon name="devicon:typescript" size="4rem" />
      </UTooltip>
      <UTooltip text="Vue.js" :popper="{ arrow: true }">
        <Icon name="devicon:vuejs" size="4rem" />
      </UTooltip>
      <UTooltip text="Nuxt.js" :popper="{ arrow: true }">
        <Icon name="devicon:nuxtjs" size="4rem" />
      </UTooltip>
      <UTooltip text="Quasar" :popper="{ arrow: true }">
        <Icon name="devicon:quasar" size="4rem" />
      </UTooltip>
      <UTooltip text="Ionic" :popper="{ arrow: true }">
        <Icon name="devicon:ionic" size="4rem" />
      </UTooltip>
      <UTooltip text="Capacitor" :popper="{ arrow: true }">
        <Icon name="devicon:capacitor" size="4rem" />
      </UTooltip>
      <UTooltip text="RxJS" :popper="{ arrow: true }">
        <Icon name="devicon:rxjs" size="4rem" />
      </UTooltip>
      <UTooltip text="Webpack" :popper="{ arrow: true }">
        <Icon name="devicon:webpack" size="4rem" />
      </UTooltip>
      <UTooltip text="Vite" :popper="{ arrow: true }">
        <Icon name="devicon:vitejs" size="4rem" />
      </UTooltip>
    </div>

    <h3>Back End</h3>
    <div class="stacks-content">
      <UTooltip text="C" :popper="{ arrow: true }">
        <Icon name="devicon:c" size="4rem" />
      </UTooltip>
      <UTooltip text="C#" :popper="{ arrow: true }">
        <Icon name="devicon:csharp" size="4rem" />
      </UTooltip>
      <UTooltip text="JavaScript" :popper="{ arrow: true }">
        <Icon name="devicon:javascript" size="4rem" />
      </UTooltip>
      <UTooltip text="TypeScript" :popper="{ arrow: true }">
        <Icon name="devicon:typescript" size="4rem" />
      </UTooltip>
      <UTooltip text="Node.js" :popper="{ arrow: true }">
        <Icon name="devicon:nodejs" size="4rem" />
      </UTooltip>
      <UTooltip text="Express" :popper="{ arrow: true }">
        <Icon name="devicon:express" size="4rem" :class="{ invert: isDarkTheme }" />
      </UTooltip>
      <UTooltip text="Nest" :popper="{ arrow: true }">
        <Icon name="devicon:nestjs" size="4rem" />
      </UTooltip>
      <UTooltip text="GraphQL" :popper="{ arrow: true }">
        <Icon name="devicon-plain:graphql" size="4rem" color="#e10199" />
      </UTooltip>
      <UTooltip text="GCC" :popper="{ arrow: true }">
        <Icon name="devicon:gcc" size="4rem" />
      </UTooltip>
      <UTooltip text=".NET" :popper="{ arrow: true }">
        <Icon name="devicon:dot-net" size="4rem" />
      </UTooltip>
      <UTooltip text="NuGet" :popper="{ arrow: true }">
        <Icon name="devicon:nuget" size="4rem" />
      </UTooltip>
      <UTooltip text="Swagger" :popper="{ arrow: true }">
        <Icon name="devicon:swagger" size="4rem" />
      </UTooltip>
    </div>

    <h3>DevOps</h3>
    <div class="stacks-content">
      <UTooltip text="NPM" :popper="{ arrow: true }">
        <Icon name="devicon:npm-wordmark" size="4rem" />
      </UTooltip>
      <UTooltip text="Yarn" :popper="{ arrow: true }">
        <Icon name="devicon:yarn" size="4rem" />
      </UTooltip>
      <UTooltip text="Homebrew" :popper="{ arrow: true }">
        <Icon name="devicon:homebrew" size="4rem" />
      </UTooltip>
      <UTooltip text="ESLint" :popper="{ arrow: true }">
        <Icon name="devicon:eslint" size="4rem" />
      </UTooltip>
      <UTooltip text="Jest" :popper="{ arrow: true }">
        <Icon name="devicon-plain:jest" size="4rem" color="#97434f" />
      </UTooltip>
      <UTooltip text="Git" :popper="{ arrow: true }">
        <Icon name="devicon:git" size="4rem" />
      </UTooltip>
      <UTooltip text="GitHub" :popper="{ arrow: true }">
        <Icon name="devicon:github" size="4rem" :class="{ invert: isDarkTheme }" />
      </UTooltip>
      <UTooltip text="Bitbucket" :popper="{ arrow: true }">
        <Icon name="devicon:bitbucket" size="4rem" />
      </UTooltip>
      <UTooltip text="Jira" :popper="{ arrow: true }">
        <Icon name="devicon:jira" size="4rem" />
      </UTooltip>
      <UTooltip text="Confluence" :popper="{ arrow: true }">
        <Icon name="devicon:confluence" size="4rem" />
      </UTooltip>
      <UTooltip text="Trello" :popper="{ arrow: true }">
        <Icon name="devicon:trello" size="4rem" />
      </UTooltip>
    </div>

    <h3>Tools</h3>
    <div class="stacks-content">
      <UTooltip text="VSCode" :popper="{ arrow: true }">
        <Icon name="devicon:vscode" size="4rem" />
      </UTooltip>
      <UTooltip text="WebStorm" :popper="{ arrow: true }">
        <Icon name="devicon:webstorm" size="4rem" />
      </UTooltip>
      <UTooltip text="Android Studio" :popper="{ arrow: true }">
        <Icon name="devicon:androidstudio" size="4rem" />
      </UTooltip>
      <UTooltip text="XCode" :popper="{ arrow: true }">
        <Icon name="devicon:xcode" size="4rem" />
      </UTooltip>
      <UTooltip text="Postman" :popper="{ arrow: true }">
        <Icon name="devicon:postman" size="4rem" />
      </UTooltip>
      <UTooltip text="DBeaver" :popper="{ arrow: true }">
        <Icon name="devicon:dbeaver" size="4rem" />
      </UTooltip>
      <UTooltip text="Filezilla" :popper="{ arrow: true }">
        <Icon name="devicon:filezilla" size="4rem" />
      </UTooltip>
      <UTooltip text="Figma" :popper="{ arrow: true }">
        <Icon name="devicon:figma" size="4rem" />
      </UTooltip>
    </div>

    <h3>Infra</h3>
    <div class="stacks-content">
      <UTooltip text="Firebase" :popper="{ arrow: true }">
        <Icon name="devicon:firebase" size="4rem" />
      </UTooltip>
      <UTooltip text="Supabase" :popper="{ arrow: true }">
        <Icon name="devicon:supabase" size="4rem" />
      </UTooltip>
      <UTooltip text="Azure" :popper="{ arrow: true }">
        <Icon name="devicon:azure" size="4rem" />
      </UTooltip>
      <UTooltip text="Docker" :popper="{ arrow: true }">
        <Icon name="devicon:docker" size="4rem" />
      </UTooltip>
      <UTooltip text="MongoDB" :popper="{ arrow: true }">
        <Icon name="devicon:mongodb" size="4rem" />
      </UTooltip>
      <UTooltip text="SQL" :popper="{ arrow: true }">
        <Icon name="devicon:azuresqldatabase" size="4rem" />
      </UTooltip>
    </div>
  </div>
</template>

<style lang="scss">
body {
  .home-page {
    margin: 0 auto;
    max-width: 75rem;

    span {
      font-weight: 700;
    }

    .welcome-text {
      margin-bottom: 2rem;
    }

    .stacks-content {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;

      .invert {
        filter: invert(100%);
      }
    }
  }
  &.mobile {
    .stacks-content {
      justify-content: center;
    }
  }
}
</style>