<template>
  <Layout>
    <PageHeader class="h-96">
      <template v-slot:image>
        <TagChart 
          v-if="loaded"
          :chartdata="chartdata"
          :options="options"
          class="w-full absolute top-0 left-0 h-full -z-10"
        />
      </template>
      <template v-slot:content>
        <p class="text-4xl md:text-6xl -mt-20">
          #{{ $page.records.title }}
        </p>
        <p
          class="text-lg md:text-2xl">
          We have found {{ $page.records.belongsTo.totalCount }} threads with this tag
        </p>
      </template>
    </PageHeader>
    <div class="container px-5 py-12 mx-auto">
      <section>
        <div class="flex flex-wrap justify-center -m-4">
          <g-link
            v-for="edge in $page.records.belongsTo.edges"
            :to="'/threads/' + edge.node.path"
            :key="edge.node.id"
            class="inline-block md:w-1/2 lg:w-1/3 border-gray-200 border-2 m-2"
          >
           <div class="p-4">
              <div class="mt-2 text-base md:text-lg">
                {{ edge.node.title }}
              </div>
              <hr class="my-2"/>
              <div class="mt-2 text-base md:text-lg text-gray-400">
                {{ formatDate(edge.node.path) }}
              </div>
           </div>
          </g-link>
        </div>
      </section>
      <div
        v-if="$page.records.belongsTo.pageInfo.totalPages > 1"
        class="mt-12 flex justify-center">
        <Pagination
          :base-url="baseUrl"
          :current-page="$page.records.belongsTo.pageInfo.currentPage"
          :total-pages="$page.records.belongsTo.pageInfo.totalPages" />
      </div>
    </div>
    <Vssue title="Tags" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  records : tag(id: $id) {
    id
    title: name
    path: slug
    belongsTo {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          __typename
          ...on Thread {
            id
            title: name
            path: issueDate
            date
          }
        }
      }
    }
  }
  tags:allTag {
    edges {
      node {
        name
        calculationConvoWeekFromConversations
        past6Weeks
      }
    }
  }
}
</page-query>

<script>
import PageHeader from '~/components/PageHeader'
import RecordCard from '~/components/RecordCard'
import Pagination from '~/components/Pagination'
import TagChart from '~/components/TagChart'
import moment from 'moment'
export default {
  components: {
    PageHeader,
    RecordCard,
    Pagination,
    TagChart
  },
  data () {
    return {
      loaded: false,
      chartdata: null,
      options: {
        layout: {
          padding: {
            left: 20
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          fontColor: '#fff'
        },
        scales: {
          yAxes: [{
            ticks: {
                fontColor: '#fff'
            }
          }],
          xAxes: [{
            ticks: {
                fontColor: '#fff'
            }
          }]
        }
      }
    }
  },
  metaInfo () {
    return {
      title: `Tag result for: ${this.$page.records.id}`
    }
  },
  computed: {
    baseUrl () {
      return `/tag/${this.$page.records.id}`
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMMM Do YYYY')
    }
  },
  async mounted () {
    this.loaded = false
    try {
      this.chartdata = {
        labels: await this.$page.tags.edges.map(edge => edge.node.name),
        datasets: [
          {
            label: '# of mentions for ALL tags over the past 6 weeks',
            backgroundColor: '#f87979',
            data: await this.$page.tags.edges.map(edge => edge.node.past6Weeks)
          }
        ]
      }
      this.loaded = true
    } catch (error) {
      console.log(error)
    }
  }
};
</script>

<style>
#line-chart {
  opacity: .75;
}
</style>