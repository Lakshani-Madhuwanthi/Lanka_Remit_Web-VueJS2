<template>
  <section>
    <nav-bar/>
    <div class="columns">
      <div class="column is-one-fifth">
        <side-bar style="height: 90vh" />
      </div>
      <div class="column">
        <app-main class="card app-main" />
      </div>
    </div>
  </section>
</template>

<script>
import AppMain from "@/layout/components/AppMain"
import NavBar from "@/layout/components/NavBar"
import SideBar from "@/layout/components/SideBar"

export default {
  name: "Layout",
  components: {
    AppMain,
    NavBar,
    SideBar
  },

  mounted() {
    const self = this

    // this.startTokenTimer()
    setTimeout(() => {
      self.hideFullScreenLoader()
    }, 500)
  }
}
</script>

<style scoped>
  .app-main {
    overflow: hidden;
    height: 88vh;
    width: 79vw;
    margin: 10px 10px 10px 0;
  }
</style>
