<template>
  <Layout>
    <PageHeader>
      <template v-slot:content>
        <h1 class="text-4xl lg:text-6xl">
          {{ titlePlatform }}
        </h1>
        <h2 class="text-3xl lg:text-4xl">
          {{ titleDate }}
        </h2>
      </template>
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap lg:flex-row-reverse py-12">
        <div class="w-full lg:w-1/4 px-5">
          <PageSidebar :record="$page.entry" />
        </div>

        <div class="w-full lg:w-3/4 px-5 prose lg:prose-xl max-w-none">
          <div
            class="content"
            v-html="$page.entry.content" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    entry : article(id: $id) {
      title
      content,
      excerpt,
      createdAt(format:"Do MMMM YYYY"),
      timeToRead,
      tags {
          title,
          path
      },
      headings {
        depth,
        value,
        anchor
      },
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import PageSidebar from '~/components/PageSidebar'

export default {
  components: {
    PageHeader,
    PageSidebar
  },
  data() {
    return {
      titlePlatform: "",
      titleDate: "",
    }
  },
  


  metaInfo () {
    const parsedTitle = this.$page.entry.title.split('|')
    this.titlePlatform = parsedTitle[0]
    this.titleDate = parsedTitle[1]
    return {
      title: this.$page.entry.title,
      meta: [
        { property: 'og:title', content: this.$page.entry.title },
        { property: 'og:description', content: this.$page.entry.excerpt },
        { property: 'og:image', content: '~/favicon.png' }
      ],
    };
  }
};
</script>
