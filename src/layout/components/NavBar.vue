<template>
  <b-navbar
    type="is-primary"
  >
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/dashboard' }">
        <img
            src="../../assets/lanka_remit_logo.png"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item>
        <p class="navbar-title">Duty Free Admin Portal</p>
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <b-icon icon="account-circle" size="is-medium"></b-icon>
        <b-navbar-dropdown :label="getUsername">
          <b-navbar-item @click="logout()">
            Logout
          </b-navbar-item>
        </b-navbar-dropdown>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import JwtUtils from "@/helpers/jwtUtils"

export default {
  name: "NavBar",
  data() {
    return {
      user: null,
    }
  },

  computed: {
    getUsername(){
      return this.user !== null ? this.user.username : 'User'
    }
  },

  methods: {
    logout: function (){
      JwtUtils.logoutTheUser(true)
    }
  },

  mounted() {
    this.user = JwtUtils.loadToken().jwtObj
  }
}
</script>

<style scoped>
  .navbar-title {
    font-size: x-large;
    font-weight: bold;
  }
</style>
