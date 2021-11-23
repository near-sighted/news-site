<template>
  <!-- This is the thread Card Preview Component-->
  <div
    class="thread--card"
    :style="{
      border: '3px solid ' + color,
    }"
  >
    <time class="thread--date">{{ thread.path }}</time>
    <p>{{thread.channelName[0]}}</p>
    <p>status - <span :style="{color: thread.status == 'Resolved' ? hrColors[3] : hrColors[2]}">{{thread.status}}</span></p>
    <div class="thread--tags-container">
      <TagLink :tags="thread.tags" class="mt-4 mb-12"/>
    </div>
    <div class="thread--summary">
      <p v-if="thread.confusionSummary" class="my-4"><b class="text-gray-800 underline">confusion summary: </b>{{thread.confusionSummary}}</p>
      <p v-if="thread.resolutionSummary" class="my-4"><b class="text-gray-800 underline">resolution summary: </b>{{thread.resolutionSummary}}</p>
    </div>
    <hr class="my-4"/>
    <div class="thread--content-container"> 
      <button @click="toggleActive" class="mb-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">{{active ? 'collapse thread' : 'view thread'}}</button>
      <slide-up-down :active="active" :duration="500">
        <vue-markdown :source="thread.contentRollup" class="thread--content overflow-y-auto"/>
        <div class="thread--attachments" v-for="attachment in thread.allMessageAttachments">
          <div v-if="attachment && attachment.thumbnails && attachment.thumbnails.large">
            <img :src="attachment.thumbnails.large.url" />
          </div>
        </div>
      </slide-up-down>
    </div>
    <div class="link--joinThread absolute bottom-2 right-0">
      <a :href="thread.firstMessageLink" target="_blank">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join Thread</button>
      </a>
    </div>
  </div>
</template>

<script>
import TagLink from '~/components/TagLink';
export default {
  name: "ThreadDetails",
  props: {
    thread: Object,
    color: String,
  },
  components: {
    TagLink,
  },
  data() {
    return {
      active: false,
      hrColors: [
        "#FCB400", // Airtable Yellow
        "#18BFFF", // Airtable Blue
        "#D92654", // Airtable Red
        "#249225", // Green
      ],
    };
  },
  computed: {
    // The variety of dates is intended as an example of ways to use Moment to get different date formats.
    // Unused computed values should be removed.
  },
  methods: {
    toggleActive() {
      console.log(this.active)
      this.active = !this.active;
    }
  },
};
</script>

<style>
.thread--title {
  margin: 0;
}

.thread--date {
  margin: 0;
  color: hsl(0, 0%, 35%);
}

.thread--tags {
  margin: 0;
  color: hsl(0, 0%, 35%);
}

.link--joinThread {
  display: block;
  padding-right: 25px;
  text-align: right;
}

.thread--summary {
  /** This converts the `\n`'s into line breaks when *
  *   pulled from Airtable's Long text fields        */
  white-space: pre-wrap;
}

.thread--content-container pre, .thread--content-container code {
  white-space: normal;  
}

.thread--content {
  /** This converts the `\n`'s into line breaks when *
  *   pulled from Airtable's Long text fields        */
  white-space: normal;
}

.thread--content p {
  /** This converts the `\n`'s into line breaks when *
  *   pulled from Airtable's Long text fields        */
  margin-bottom: 1rem;
}

.thread--attachments {
  /** This converts the `\n`'s into line breaks when *
  *   pulled from Airtable's Long text fields        */
  margin: 2rem 0;
}

.thread--attachments img {
  /** This converts the `\n`'s into line breaks when *
  *   pulled from Airtable's Long text fields        */
  max-width: 100%;
  margin: 2rem 0;
  border: 1px solid hsl(0, 0%, 35%);
}

.thread--card {
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 15px;
}

@media only screen and (min-width: 500px) {
  .thread--card {
    padding: 12px 24px;
  }
}
</style>
