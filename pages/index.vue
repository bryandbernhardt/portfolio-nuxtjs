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
      <UTooltip v-if="$device.isDesktop" text="HTML5" :popper="{ arrow: true }">
        <Icon name="devicon:html5" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:html5" size="4rem" />

        <template #panel>
          <div class="p-1">
            HTML5
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="CSS3" :popper="{ arrow: true }">
        <Icon name="devicon:css3" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:css3" size="4rem" />

        <template #panel>
          <div class="p-1">
            CSS3
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Sass" :popper="{ arrow: true }">
        <Icon name="devicon:sass" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:sass" size="4rem" />

        <template #panel>
          <div class="p-1">
            Sass
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="JavaScript" :popper="{ arrow: true }">
        <Icon name="devicon:javascript" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:javascript" size="4rem" />

        <template #panel>
          <div class="p-1">
            JavaScript
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="TypeScript" :popper="{ arrow: true }">
        <Icon name="devicon:typescript" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:typescript" size="4rem" />

        <template #panel>
          <div class="p-1">
            TypeScript
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Vue.js" :popper="{ arrow: true }">
        <Icon name="devicon:vuejs" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:vuejs" size="4rem" />

        <template #panel>
          <div class="p-1">
            Vue.js
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Nuxt.js" :popper="{ arrow: true }">
        <Icon name="devicon:nuxtjs" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:nuxtjs" size="4rem" />

        <template #panel>
          <div class="p-1">
            Nuxt.js
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Quasar" :popper="{ arrow: true }">
        <Icon name="devicon:quasar" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:quasar" size="4rem" />

        <template #panel>
          <div class="p-1">
            Quasar
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Ionic" :popper="{ arrow: true }">
        <Icon name="devicon:ionic" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:ionic" size="4rem" />

        <template #panel>
          <div class="p-1">
            Ionic
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Capacitor" :popper="{ arrow: true }">
        <Icon name="devicon:capacitor" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:capacitor" size="4rem" />

        <template #panel>
          <div class="p-1">
            Capacitor
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="RxJS" :popper="{ arrow: true }">
        <Icon name="devicon:rxjs" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:rxjs" size="4rem" />

        <template #panel>
          <div class="p-1">
            RxJS
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Webpack" :popper="{ arrow: true }">
        <Icon name="devicon:webpack" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:webpack" size="4rem" />

        <template #panel>
          <div class="p-1">
            Webpack
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Vite" :popper="{ arrow: true }">
        <Icon name="devicon:vitejs" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:vitejs" size="4rem" />

        <template #panel>
          <div class="p-1">
            Vite
          </div>
        </template>
      </UPopover>
    </div>

    <h3>Back End</h3>
    <div class="stacks-content">
      <UTooltip v-if="$device.isDesktop" text="C" :popper="{ arrow: true }">
        <Icon name="devicon:c" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:c" size="4rem" />

        <template #panel>
          <div class="p-1">
            C
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="C#" :popper="{ arrow: true }">
        <Icon name="devicon:csharp" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:csharp" size="4rem" />

        <template #panel>
          <div class="p-1">
            C#
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="JavaScript" :popper="{ arrow: true }">
        <Icon name="devicon:javascript" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:javascript" size="4rem" />

        <template #panel>
          <div class="p-1">
            JavaScript
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="TypeScript" :popper="{ arrow: true }">
        <Icon name="devicon:typescript" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:typescript" size="4rem" />

        <template #panel>
          <div class="p-1">
            TypeScript
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Node.js" :popper="{ arrow: true }">
        <Icon name="devicon:nodejs" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:nodejs" size="4rem" />

        <template #panel>
          <div class="p-1">
            Node.js
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Express" :popper="{ arrow: true }">
        <Icon name="devicon:express" size="4rem" :class="{ invert: isDarkTheme }" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:express" size="4rem" :class="{ invert: isDarkTheme }" />

        <template #panel>
          <div class="p-1">
            Express
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Nest" :popper="{ arrow: true }">
        <Icon name="devicon:nestjs" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:nestjs" size="4rem" />

        <template #panel>
          <div class="p-1">
            Nest
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="GraphQL" :popper="{ arrow: true }">
        <Icon name="devicon-plain:graphql" size="4rem" color="#e10199" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon-plain:graphql" size="4rem" color="#e10199" />

        <template #panel>
          <div class="p-1">
            GraphQL
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="GCC" :popper="{ arrow: true }">
        <Icon name="devicon:gcc" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:gcc" size="4rem" />

        <template #panel>
          <div class="p-1">
            GCC
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text=".NET" :popper="{ arrow: true }">
        <Icon name="devicon:dot-net" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:dot-net" size="4rem" />

        <template #panel>
          <div class="p-1">
            .NET
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="NuGet" :popper="{ arrow: true }">
        <Icon name="devicon:nuget" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:nuget" size="4rem" />

        <template #panel>
          <div class="p-1">
            NuGet
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Swagger" :popper="{ arrow: true }">
        <Icon name="devicon:swagger" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:swagger" size="4rem" />

        <template #panel>
          <div class="p-1">
            Swagger
          </div>
        </template>
      </UPopover>
    </div>

    <h3>DevOps</h3>
    <div class="stacks-content">
      <UTooltip v-if="$device.isDesktop" text="NPM" :popper="{ arrow: true }">
        <Icon name="devicon:npm-wordmark" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:npm-wordmark" size="4rem" />

        <template #panel>
          <div class="p-1">
            NPM
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Yarn" :popper="{ arrow: true }">
        <Icon name="devicon:yarn" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:yarn" size="4rem" />

        <template #panel>
          <div class="p-1">
            Yarn
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Homebrew" :popper="{ arrow: true }">
        <Icon name="devicon:homebrew" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:homebrew" size="4rem" />

        <template #panel>
          <div class="p-1">
            Homebrew
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="ESLint" :popper="{ arrow: true }">
        <Icon name="devicon:eslint" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:eslint" size="4rem" />

        <template #panel>
          <div class="p-1">
            ESLint
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Jest" :popper="{ arrow: true }">
        <Icon name="devicon-plain:jest" size="4rem" color="#97434f" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon-plain:jest" size="4rem" color="#97434f" />

        <template #panel>
          <div class="p-1">
            Jest
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Git" :popper="{ arrow: true }">
        <Icon name="devicon:git" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:git" size="4rem" />

        <template #panel>
          <div class="p-1">
            Git
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="GitHub" :popper="{ arrow: true }">
        <Icon name="devicon:github" size="4rem" :class="{ invert: isDarkTheme }" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:github" size="4rem" :class="{ invert: isDarkTheme }" />

        <template #panel>
          <div class="p-1">
            GitHub
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Bitbucket" :popper="{ arrow: true }">
        <Icon name="devicon:bitbucket" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:bitbucket" size="4rem" />

        <template #panel>
          <div class="p-1">
            Bitbucket
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Jira" :popper="{ arrow: true }">
        <Icon name="devicon:jira" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:jira" size="4rem" />

        <template #panel>
          <div class="p-1">
            Jira
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Confluence" :popper="{ arrow: true }">
        <Icon name="devicon:confluence" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:confluence" size="4rem" />

        <template #panel>
          <div class="p-1">
            Confluence
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Trello" :popper="{ arrow: true }">
        <Icon name="devicon:trello" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:trello" size="4rem" />

        <template #panel>
          <div class="p-1">
            Trello
          </div>
        </template>
      </UPopover>
    </div>

    <h3>Tools</h3>
    <div class="stacks-content">
      <UTooltip v-if="$device.isDesktop" text="VSCode" :popper="{ arrow: true }">
        <Icon name="devicon:vscode" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:vscode" size="4rem" />

        <template #panel>
          <div class="p-1">
            VSCode
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="WebStorm" :popper="{ arrow: true }">
        <Icon name="devicon:webstorm" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:webstorm" size="4rem" />

        <template #panel>
          <div class="p-1">
            WebStorm
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Android Studio" :popper="{ arrow: true }">
        <Icon name="devicon:androidstudio" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:androidstudio" size="4rem" />

        <template #panel>
          <div class="p-1">
            Android Studio
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="XCode" :popper="{ arrow: true }">
        <Icon name="devicon:xcode" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:xcode" size="4rem" />

        <template #panel>
          <div class="p-1">
            XCode
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Postman" :popper="{ arrow: true }">
        <Icon name="devicon:postman" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:postman" size="4rem" />

        <template #panel>
          <div class="p-1">
            Postman
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="DBeaver" :popper="{ arrow: true }">
        <Icon name="devicon:dbeaver" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:dbeaver" size="4rem" />

        <template #panel>
          <div class="p-1">
            DBeaver
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Filezilla" :popper="{ arrow: true }">
        <Icon name="devicon:filezilla" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:filezilla" size="4rem" />

        <template #panel>
          <div class="p-1">
            Filezilla
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Figma" :popper="{ arrow: true }">
        <Icon name="devicon:figma" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:figma" size="4rem" />

        <template #panel>
          <div class="p-1">
            Figma
          </div>
        </template>
      </UPopover>
    </div>

    <h3>Infra</h3>
    <div class="stacks-content">
      <UTooltip v-if="$device.isDesktop" text="Firebase" :popper="{ arrow: true }">
        <Icon name="devicon:firebase" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:firebase" size="4rem" />

        <template #panel>
          <div class="p-1">
            Firebase
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Supabase" :popper="{ arrow: true }">
        <Icon name="devicon:supabase" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:supabase" size="4rem" />

        <template #panel>
          <div class="p-1">
            Supabase
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Azure" :popper="{ arrow: true }">
        <Icon name="devicon:azure" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:azure" size="4rem" />

        <template #panel>
          <div class="p-1">
            Azure
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="Docker" :popper="{ arrow: true }">
        <Icon name="devicon:docker" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:docker" size="4rem" />

        <template #panel>
          <div class="p-1">
            Docker
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="MongoDB" :popper="{ arrow: true }">
        <Icon name="devicon:mongodb" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:mongodb" size="4rem" />

        <template #panel>
          <div class="p-1">
            MongoDB
          </div>
        </template>
      </UPopover>

      <UTooltip v-if="$device.isDesktop" text="SQL" :popper="{ arrow: true }">
        <Icon name="devicon:azuresqldatabase" size="4rem" />
      </UTooltip>
      <UPopover overlay v-if="!$device.isDesktop" :popper="{ arrow: true }">
        <Icon name="devicon:azuresqldatabase" size="4rem" />

        <template #panel>
          <div class="p-1">
            SQL
          </div>
        </template>
      </UPopover>
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