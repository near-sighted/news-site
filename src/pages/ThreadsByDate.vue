<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          Threads
        </p>
        <p class="text-3xl md:text-5xl">
          {{formattedDate}}
        </p>
        <p class="text-lg md:text-2xl">
          We have currently {{ focusedThreads.length }} threads for the above date.
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
          <ThreadCard
            v-for="item in focusedThreads"
            :key="item.node.id"
            :thread="item.node" />
        </div>
      </section>
      <!-- <div
        v-if="$page.records.pageInfo.totalPages > 1"
        class="mt-12 flex justify-center">
        <Pagination
          base-url="/threads"
          :current-page="$page.records.pageInfo.currentPage"
          :total-pages="$page.records.pageInfo.totalPages" />
      </div> -->
    </div>
  </Layout>
</template>
<page-query>
  query thread {
    threads: allThread  (sort: [{ by: "date", order: DESC }, { by: "name", order: ASC }]) {
      edges {
        node {
          id
          title: name
          date
          path: issueDate
          tags {
            id
            title: name
            path: slug
          }
          channelName
          channelId
          summaryComplete
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
    }
  }
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import ThreadCard from '~/components/ThreadCard'
import Pagination from '~/components/Pagination'
import moment from 'moment'
export default {
  metaInfo: {
    title: 'Browse Threads'
  },
  components: {
    PageHeader,
    Pagination,
    ThreadCard
  },
  computed: { 
    formattedDate() {
      return moment(this.$context.date).format('MMMM Do, YYYY')
    },
    // applying multiple to the query
    focusedThreads() { 
      return this.$page.threads.edges
    } 
  }
};
</script>
