<page-query>
  query tag {
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
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>