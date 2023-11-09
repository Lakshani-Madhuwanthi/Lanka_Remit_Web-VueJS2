<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 :root {
   --navbar-height: 10vh;
 }

 html, body, #app {
   overflow: hidden !important;
 }

 #main-nav {
   height: var(--navbar-height);
 }

 .expanded-col {
   min-width: 135px;
 }

</style>
