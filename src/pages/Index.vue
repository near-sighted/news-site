<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          We cut through the NOISE
        </p>
        <p class="text-lg md:text-2xl">
           so you don't have to
        </p>
      </template>
    </PageHeader>
    <div class="container text-center mx-auto">
      <SectionLatestThreads />
    </div>
<!-- 
    <SectionContribute />

    <SectionCutThroughNoise /> -->
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SectionLatestThreads from '~/components/sections/LatestThreads'
// import SectionLatestNews from '~/components/sections/LatestNews'
import SectionContribute from '~/components/sections/Contribute'
import SectionCutThroughNoise from '~/components/sections/CutThroughNoise'

export default {
  metaInfo: {
    title: 'Learn something new'
  },
  components: {
    PageHeader,
    SectionLatestThreads,
    // SectionLatestNews,
    SectionContribute,
    SectionCutThroughNoise
  }
};
</script>
