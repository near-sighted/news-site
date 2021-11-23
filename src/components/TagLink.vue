<template>
  <div class="thread--tags-container">
    <ul class="thread--tags ">
      <li v-for="tag in tags" :key="tag.path" class="inline-flex m-2 p-2 border-gray-200 bg-gray-200">
        <g-link 
          :to="'/tags/' + tag.path"
        >
          <span>{{ tag.title }}</span>
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      required: true,
      type: [Array, Object]
    }
  }
}
</script>

<style>

</style>