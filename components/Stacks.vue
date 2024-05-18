<script setup lang="ts">
import { useDisplay } from 'vuetify'

const colorMode = useColorMode();
const isDarkTheme = ref(true);
const { width, platform } = useDisplay();

// watch
watch(colorMode, async() => isDarkTheme.value = colorMode.value === 'dark')

// computed
const maxMobileSize = computed(() => width.value <= 425);
const isTouch = computed(() => platform.value.touch);
const stacks = computed(() => ({
  frontEnd: [
    {
      text: 'HTML5',
      icon: 'devicon:html5'
    },
    {
      text: 'CSS3',
      icon: 'devicon:css3'
    },
    {
      text: 'Sass',
      icon: 'devicon:sass'
    },
    {
      text: 'JavaScript',
      icon: 'devicon:javascript'
    },
    {
      text: 'TypesScript',
      icon: 'devicon:typescript'
    },
    {
      text: 'Vue.js',
      icon: 'devicon:vuejs'
    },
    {
      text: 'Nuxt.js',
      icon: 'devicon:nuxtjs'
    },
    {
      text: 'Quasar',
      icon: 'devicon:quasar'
    },
    {
      text: 'Ionic',
      icon: 'devicon:ionic'
    },
    {
      text: 'Capacitor',
      icon: 'devicon:capacitor'
    },
    {
      text: 'RxJS',
      icon: 'devicon:rxjs'
    },
    {
      text: 'Webpack',
      icon: 'devicon:webpack'
    },
    {
      text: 'Vite',
      icon: 'devicon:vitejs'
    },
  ],
    backEnd: [
    {
      text: 'C',
      icon: 'devicon:c'
    },
    {
      text: 'C#',
      icon: 'devicon:csharp'
    },
    {
      text: 'JavaScript',
      icon: 'devicon:javascript'
    },
    {
      text: 'TypeScript',
      icon: 'devicon:typescript'
    },
    {
      text: 'Node.js',
      icon: 'devicon:nodejs'
    },
    {
      text: 'Express',
      icon: 'devicon:express',
      invert: isDarkTheme
    },
    {
      text: 'Nest',
      icon: 'devicon:nestjs'
    },
    {
      text: 'GraphQL',
      icon: 'devicon-plain:graphql',
      color: '#E10098'
    },
    {
      text: 'GCC',
      icon: 'devicon:gcc'
    },
    {
      text: '.NET',
      icon: 'devicon:dot-net'
    },
    {
      text: 'NuGet',
      icon: 'devicon:nuget'
    },
    {
      text: 'Swagger',
      icon: 'devicon:swagger'
    },
  ],
    devOps: [
    {
      text: 'NPM',
      icon: 'devicon:npm-wordmark'
    },
    {
      text: 'Yarn',
      icon: 'devicon:yarn'
    },
    {
      text: 'Homebrew',
      icon: 'devicon:homebrew'
    },
    {
      text: 'ESLint',
      icon: 'devicon:eslint'
    },
    {
      text: 'Jest',
      icon: 'devicon-plain:jest',
      color: '#C63D14'
    },
    {
      text: 'Git',
      icon: 'devicon:git'
    },
    {
      text: 'GitHub',
      icon: 'devicon:github',
      invert: isDarkTheme
    },
    {
      text: 'Bitbucket',
      icon: 'devicon:bitbucket'
    },
    {
      text: 'Jira',
      icon: 'devicon:jira'
    },
    {
      text: 'Confluence',
      icon: 'devicon:confluence'
    },
    {
      text: 'Trello',
      icon: 'devicon:trello'
    },
    {
      text: 'VSCode',
      icon: 'devicon:vscode'
    },
    {
      text: 'WebStorm',
      icon: 'devicon:webstorm'
    },
    {
      text: 'Android Studio',
      icon: 'devicon:androidstudio'
    },
    {
      text: 'XCode',
      icon: 'devicon:xcode'
    },
    {
      text: 'Postman',
      icon: 'devicon:postman'
    },
    {
      text: 'DBeaver',
      icon: 'devicon:dbeaver'
    },
    {
      text: 'Filezilla',
      icon: 'devicon:filezilla'
    },
    {
      text: 'Figma',
      icon: 'devicon:figma'
    },
  ],
    infra: [
    {
      text: 'Firebase',
      icon: 'devicon:firebase'
    },
    {
      text: 'Supabase',
      icon: 'devicon:supabase'
    },
    {
      text: 'Azure',
      icon: 'devicon:azure'
    },
    {
      text: 'Docker',
      icon: 'devicon:docker'
    },
    {
      text: 'MongoDB',
      icon: 'devicon:mongodb'
    },
    {
      text: 'SQL',
      icon: 'devicon:azuresqldatabase'
    },
  ]
})
);
</script>

<template>
  <h2 class="text-h5 text-md-h4">Stacks</h2>
  <h3 class="text-h7 text-md-h6">Front End</h3>
  <div
    class="d-flex ga-2 flex-wrap mb-4"
    :class="{ 'justify-center': maxMobileSize}"
  >
    <v-tooltip
      v-for="stack in stacks.frontEnd"
      :text="stack.text"
      location="bottom"
      :open-on-hover="!isTouch"
      :open-on-click="isTouch"
      scroll-strategy="close"
    >
      <template #activator="{ props }">
        <Icon v-bind="props" :name="stack.icon" size="4rem" class="icon" />
      </template>
    </v-tooltip>
  </div>

  <h3 class="text-h7 text-md-h6">Back End</h3>
  <div
    class="d-flex ga-2 flex-wrap mb-4"
    :class="{ 'justify-center': maxMobileSize}"
  >
    <v-tooltip
      v-for="stack in stacks.backEnd"
      :text="stack.text"
      location="bottom"
      :open-on-hover="!isTouch"
      :open-on-click="isTouch"
      scroll-strategy="close"
    >
      <template #activator="{ props }">
        <Icon v-bind="props" :name="stack.icon" size="4rem" class="icon" :color="stack?.color" :class="{ invert: stack?.invert}"/>
      </template>
    </v-tooltip>
  </div>

  <h3 class="text-h7 text-md-h6">DevOps</h3>
  <div
    class="d-flex ga-2 flex-wrap mb-4"
    :class="{ 'justify-center': maxMobileSize}"
  >
    <v-tooltip
      v-for="stack in stacks.devOps"
      :text="stack.text"
      location="bottom"
      :open-on-hover="!isTouch"
      :open-on-click="isTouch"
      scroll-strategy="close"
    >
      <template #activator="{ props }">
        <Icon v-bind="props" :name="stack.icon" size="4rem" class="icon" :color="stack?.color" :class="{ invert: stack?.invert}" />
      </template>
    </v-tooltip>
  </div>

  <h3 class="text-h7 text-md-h6">Infra</h3>
  <div
    class="d-flex ga-2 flex-wrap mb-4"
    :class="{ 'justify-center': maxMobileSize}"
  >
    <v-tooltip
      v-for="stack in stacks.infra"
      :text="stack.text"
      location="bottom"
      :open-on-hover="!isTouch"
      :open-on-click="isTouch"
      scroll-strategy="close"
    >
      <template #activator="{ props }">
        <Icon v-bind="props" :name="stack.icon" size="4rem" class="icon" />
      </template>
    </v-tooltip>
  </div>
</template>

<style scoped lang="scss">
.icon {
  &:focus {
    outline: none;
  }
}
</style>