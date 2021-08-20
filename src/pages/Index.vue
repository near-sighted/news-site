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
      <SectionLatestArticles />
    </div>

    <SectionContribute />

    <SectionCutThroughNoise />
    
    <!-- <div class="container text-center mx-auto">
      <SectionLatestNews />
    </div> -->

    

    <!-- <SectionOpenSource /> -->
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SectionLatestArticles from '~/components/sections/LatestArticles'
// import SectionLatestNews from '~/components/sections/LatestNews'
import SectionContribute from '~/components/sections/Contribute'
import SectionCutThroughNoise from '~/components/sections/CutThroughNoise'
// import SectionOpenSource from '~/components/sections/OpenSource'

export default {
  metaInfo: {
    title: 'Learn something new'
  },
  components: {
    PageHeader,
    SectionLatestArticles,
    // SectionLatestNews,
    SectionContribute,
    SectionCutThroughNoise,
    // SectionOpenSource
  }
};
</script>
