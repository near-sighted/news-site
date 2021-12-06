<template>
  <Layout>
    <PageHeader>
      <template v-slot:image>
        <g-image src="~/assets/images/janko-ferlic-specialdaddy-sfL_QOnmy00-unsplash.jpg" />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl">
          All Threads
        </p>
        <!-- <p class="text-3xl md:text-5xl">
          {{formattedDate}}
        </p> -->
        <p class="text-lg md:text-2xl">
          We currently have {{ focusedThreads.length }} threads grouped by date from the last 6 weeks
        </p>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap -m-4">
          <RecordCard
            v-for="record in groupedByDate"
            :key="record.path"
            :record="record" />
        </div>
      </section>
      <Vssue title="All Threads" />
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
    threads: allThread(sort: [{ by: "date", order: DESC }, { by: "name", order: ASC }]) {
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
import RecordCard from '~/components/RecordCard'
import Pagination from '~/components/Pagination'
import moment from 'moment'
export default {
  metaInfo: {
    title: 'Browse Threads'
  },
  components: {
    PageHeader,
    Pagination,
    RecordCard
  },
  computed: { 
    formattedDate() {
      return moment(this.$context.date).format('MMMM Do, YYYY')
    },
    // applying multiple to the query
    focusedThreads() { 
      return this.$page.threads.edges
    },
    groupedByDate() {
      let records = {}
      this.$page.threads.edges.forEach(el => {
        
        if(!el.node.tags.length) return
        records[el.node.path] = records[el.node.path] || {}
        records[el.node.path].threadCount = records[el.node.path].threadCount || 0
        records[el.node.path].path = records[el.node.path].path || `/threads/${el.node.path}`
        records[el.node.path].formattedDate = records[el.node.path].formattedDate || moment(el.node.date).format('MMMM Do, YYYY')
        records[el.node.path].threadCount += 1
        records[el.node.path].tags = records[el.node.path].tags || new Set()
        for (let tag of el.node.tags) {
          let formattedTag = tag.title.replace(/[(\s+)(.)]/g, '').toLowerCase()
          if (!records[el.node.path].tags.has(tag.title)) {
            records[el.node.path].tags.add(tag.title)
            records[el.node.path].tags.add(tag.title)
            records[el.node.path].tagsMetadata = records[el.node.path].tagsMetadata || {}
            records[el.node.path].tagsMetadata[formattedTag] = {
              title: tag.title,
              path: formattedTag
            } 
          }
        }
      })
      for (let obj in records) {
        records[obj].tags = Array.from(records[obj].tags)
        // records[obj].tags = {}
        // records[obj].tags.slug = 

        // records[obj].tags = records[obj].tags.sort((a,b) => a-b)
      }
      console.log(records)
      return records
    } 
  }
};
</script>
