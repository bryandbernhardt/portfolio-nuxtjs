<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
const title = computed(() => t('header.title'))

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: 'https://avatars.githubusercontent.com/u/77077402?v=4'
    },
  ],
})

useSeoMeta({
  title: 'Bryan Dietrich Bernhardt Developer',
  ogTitle: 'Bryan Dietrich Bernhardt Developer',
  description: 'Bryan Dietrich Bernhardt is a Full Stack developer/programmer studying Systemas Analysis and Development, he has great experience in Vue and NodeJS.',
  ogDescription: 'Bryan Dietrich Bernhardt is a Full Stack developer/programmer studying Systemas Analysis and Development, he has great experience in Vue and NodeJS.',
  ogImage: 'https://avatars.githubusercontent.com/u/77077402?v=4',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="'https://www.bryandbernhardt.com' + link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <div>
          <ColorScheme placeholder="..." tag="span">
            <div class="floating-options">
              <ThemeChanger />
            </div>

            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
          </ColorScheme>
        </div>
      </Body>
    </Html>
</template>

<style>
h1 {
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 1rem;
}

p {
  line-height: 1.5;
}
body {
  background-color: #fff;
  color: #212121;
  font-family: 'Roboto', sans-serif;
}
.dark-mode body {
  background-color: #212121;
  color: #f5f5f5;
}

.floating-options {
  position: absolute;
  right: 0;
}
</style>