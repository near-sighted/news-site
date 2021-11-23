<template>
  <section>
    <div class="container px-5 py-12 mx-auto">
      <div class="text-center pb-12 ">
        <h2 class="text-4xl">
          Latest Threads
        </h2>
        <p
          class="text-2xl">
          Curious what's been talked about in DISCORD, lately? Check out some of the highlight.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <RecordCard
          v-for="record in groupedByDate"
          :key="record.path"
          :record="record" />
      </div>
    </div>
  </section>
</template>

<static-query>
  query {
    records: allThread(filter: {date: {gte: "2021-10-14"}}sortBy:"date") {
      edges {
        node {
          id
          title : name
          date
          path: issueDate
          tags {
            id
            title: name
            path: slug
          }
          channelName
          channelId
          status
        }
      }
    }
  }
</static-query>

<script>
import RecordCard from '~/components/RecordCard'
import moment from 'moment'
export default {
  components: {
    RecordCard
  },
  computed: {
    // formattedRecords() {
    //   return this.$static.records.edges
    // }
    groupedByDate() {
      let records = {}
      this.$static.records.edges.forEach(el => {
        
        if(!el.node.tags.length) return
        records[el.node.path] = records[el.node.path] || {}
        records[el.node.path].path = records[el.node.path].path || `/threads/${el.node.path}`
        records[el.node.path].formattedDate = records[el.node.path].formattedDate || moment(el.node.date).format('MMMM Do, YYYY')
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
