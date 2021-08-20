<template>
  <footer class="text-white body-font">
    <div class="bg-shark-500">
      <div class="container px-5 py-6 mx-auto flex items-center md:flex-row flex-col">
        <g-link
          to="/"
          class="flex title-font font-medium items-center md:justify-start justify-center">
          <g-image class="w-10" src="~/assets/images/logos/logo_black_on_white.png" />
          <!-- <span class="ml-2 text-xl">{{ $static.metadata.siteName }}</span> -->
        </g-link>
        <div class="text-sm md:ml-6 md:mt-0 mt-4">
          © {{ currentYear }} {{ $static.metadata.siteName }}
        </div>
        <div class="footer-links inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
          <!-- <g-link
            to="/pages/sample-page-1"
            class="mr-4">
            Sample Page 1
          </g-link>

          <g-link
            to="/pages/sample-page-2"
            class="mr-4">
            Sample Page 2
          </g-link> -->

          <g-link to="/credits">
            Credits
          </g-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
