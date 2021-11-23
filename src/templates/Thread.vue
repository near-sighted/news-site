<template>
  <Layout>
    <PageHeader>
      <template v-slot:content>
        <h1 class="text-4xl lg:text-6xl">
          {{ $page.entry.title }}
        </h1>
      </template>
    </PageHeader>

    <div class="container text-left mx-auto">
      <div class="flex flex-wrap lg:flex-row-reverse py-12">
        <div class="w-full lg:w-1/4 px-5">
          <PageSidebar :record="$page.entry" />
        </div>

        <div class="w-full lg:w-3/4 px-5 prose lg:prose-xl max-w-none">
          <ThreadDetails :record="$page.entry" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    entry : thread(id: $id) {
      id
      date
      path: issueDate
      title: name
      tags {
        id
        title: name
        path: slug
      }
      channelName
      channelId
      summaryComplete
      ignoreConversation
      status
      additionalLabels
      confusionSummary
      resolutionSummary
      contentRollup
      allMessageAttachments {
        id
        width
        height
        url
        size
        type
        thumbnails {
          small {
            url
          }
          large {
            url
          }
          full {
            url
          }
        }
      }
      firstMessageLink
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import PageSidebar from '~/components/PageSidebar'
import ThreadDetails from '~/components/ThreadDetails'

export default {
  components: {
    PageHeader,
    PageSidebar,
    ThreadDetails
  },

  metaInfo () {
    return {
      title: this.$page.entry.title 
    };
  }
};
</script>
