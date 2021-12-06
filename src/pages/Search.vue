<template>
  <Layout>
    <PageHeader>
      <template v-slot:content>
        <div class="bg-white shadow p-4 flex m-4">
          <span class="w-auto flex justify-end items-center text-gray-500 p-2">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="search w-6 h-6"><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input
            id="search"
            v-model="searchTerm"
            class="w-full rounded p-2 focus:outline-none"
            type="search"
            autocomplete="off"
            placeholder="Search topic or keywords...">
        </div>
      </template>
    </PageHeader>

    <div class="container px-5 py-12 mx-auto">
      <section>
        <div
          v-for="(groupElements, groupName) in results"
          :key="groupName"
          class="pb-12 last:pb-0">
          <p class="text-4xl">
            Search results for: {{ groupName }}
          </p>
          <div class="flex flex-wrap -m-4 my-4">
            <div
              v-for="result in groupElements"
              :key="result.id"
              class="border-2 border-gray-200 m-2"
            >
              <g-link
                :to="groupName == 'Tag' ? 'tags/' + result.node.slug.toLowerCase() : 'threads/' + result.node.issueDate"
              >
                <div class="w-full p-4">
                  <h3>{{result.node.name}}</h3>
                  <hr class="my-2"/>
                  <p v-if="groupName == 'Thread'">{{formatDate(result.node.issueDate)}}</p>
                </div>
              </g-link>
            </div>
          </div>
        </div>
        <div
          v-if="searchTerm==='' || searchTerm.length<3"
          class="flex flex-col text-center h-64 text-gray-200 ">
          <div>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="search-circle w-64 h-64 mx-auto">
              <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="text-gray-400">
            Type at least 3 characters to start the search...
          </div>
        </div>
        <div
          v-if="searchTerm.length>3 && Object.keys(results).length==0"
          class="flex flex-col text-center h-64 text-gray-200 ">
          <div>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="search-circle w-64 h-64 mx-auto">
              <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                clip-rule="evenodd" />
            </svg>
          </div>
          <div class="text-gray-400">
            We can't find a record which matches with your given search terms.
          </div>
        </div>
      </section>
      <Vssue title="Search" />
    </div>
  </Layout>
</template>

<script>
import ThreadCard from '~/components/ThreadCard'
import PageHeader from '~/components/PageHeader'
import moment from 'moment'
// Source
// https://gomakethings.com/a-vanilla-js-equivalent-of-lodashs-groupby-method/
var groupBy = function (arr, criteria) {
  return arr.reduce((obj, item) => {
    // Check if the criteria is a function to run on the item or a property of it
    var key = typeof criteria === 'function' ? criteria(item) : item[ criteria ];

    // If the key doesn't exist yet, create it
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[ key ] = [];
    }

    // Push the value to the object
    obj[ key ].push(item);

    // Return the object to the next item in the loop
    return obj;
  }, {});
};

export default {
  components: {
    ThreadCard,
    PageHeader
  },
  metaInfo: {
    title: 'Search'
  },
  data () {
    return {
      searchTerm: ''
    }
  },
  computed: {
    results () {
      return this.search(this.searchTerm)
    }
  },
  methods: {
    search (searchTerm) {
      if (searchTerm.length < 3) return []
      const results = this.$search.search({ query: searchTerm, limit: 5 })
      return groupBy(results, 'index')
    },
    formatDate (date) {
      return moment(date).format('MMMM Do YYYY')
    }
  }
}
</script>
