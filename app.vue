<script setup>
const route = useRoute();
const { t } = useI18n();
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
        <div class="app-container">
          <ColorScheme placeholder="..." tag="span">
            <DesktopMenu v-if="$device.isDesktop" />
            <MobileMenu v-else />

            <NuxtLayout>
              <NuxtPage class="page-container" />
            </NuxtLayout>
          </ColorScheme>
        </div>
      </Body>
    </Html>
</template>

<style lang="scss">
.app-container {
  display: flex;
  flex-flow: column;
}
</style>