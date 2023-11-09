<template>
    <b-sidebar
        position="static"
        :mobile="mobile"
        :expand-on-hover="expandOnHover"
        :reduce="reduce"
        :delay="expandWithDelay ? 500 : null"
        type="is-white"
        fullheight
        open
    >
      <div class="p-1">
        <div class="block">
          <img
              src="../../assets/lanka_remit_logo.png"
          />
        </div>

        <b-menu class="is-custom-mobile" style="text-align: left" :activable="false">
          <b-menu-list label="Menu" style="text-align: left">
            <div v-for="item in menuItems" >
              <b-menu-item v-if="item.isVisible()" :icon="item.meta.icon" :label="item.meta.title" :active="item.children.length > 1 ? false : item.meta.isActive" :expanded="item.meta.isActive" @click="menuClick(item.redirect())">
                <div v-for="child in item.children" >
                  <b-menu-item v-if="child.isVisible()" :icon="child.meta.icon" :label="child.meta.title" :active="child.meta.isActive" @click="menuClick(child.name)"></b-menu-item>
                </div>
              </b-menu-item>
            </div>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
</template>

<script>
import routes from "@/router/routes"
import {MenuItem} from "@/layout/components/Support"

export default {
  name: 'SideBar',
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false,
      currentRoute: this.$router.currentRoute,

      menuItems: []
    }
  },

  methods: {
    checkPermissions: function (){

    },

    menuClick: function (name){
      if(name !== null && name !== undefined && name !== ''){
        this.navigateTo(name)
      }
    },

    loadMenuItems: function (){
      this.menuItems = []

      for(let i = 0; i < routes.length; i++){
        let item = routes[i]
        if(item.meta){
          if(item.meta.type === 'menu'){
            let menuItem = new MenuItem()
            menuItem.name = item.name
            menuItem.isVisible = item.isVisible
            menuItem.redirect = item.redirect
            menuItem.meta = item.meta
            menuItem.meta.isActive = false

            item.children.forEach(function (child){
              if(child.meta.type === 'menu-item'){
                child.meta.isActive = false
                menuItem.children.push(child)
              }
            })

            this.menuItems.push(menuItem)
          }
        }
      }
    }

  },

  watch: {
    $route (to, from){
      console.log('Route changed to: ' + to.name)
      let activeParent = null
      this.menuItems.forEach(function (item){
        if(item.redirect === to.name){
          activeParent = item
        }
        else {
          item.meta.isActive = false
        }

        if(item.children !== null && item.children !== undefined) {
          item.children.forEach(function (child){
            if(child.name === to.name){
              child.meta.isActive = true
              activeParent = item
            }
            else {
              child.meta.isActive = false
              item.meta.isActive = false
            }
          })
        }
      })

      if(activeParent !== null){
        console.log(activeParent.name)
        activeParent.meta.isActive = true
      }
    }
  },

  mounted() {
    this.loadMenuItems()
    this.$router.push({path: this.$router.currentRoute.path + '#'})
  }
}
</script>

<style lang="scss">
html {
  overflow: hidden;
}

.p-1 {
  padding: 1em;
}
.sidebar-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  // min-height: 100vh;
  .sidebar-layout {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    // min-height: 100vh;
  }
}
@media screen and (max-width: 1023px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
.is-mini-expand {
  .menu-list a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
