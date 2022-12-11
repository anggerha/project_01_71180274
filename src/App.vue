<template>
  <div>
    <v-app>
          <v-card>
              <v-layout>
                  <v-navigation-drawer permanent location="left" id="drawer">
                      <template v-slot:prepend>
                          <router-link to="/" style="text-decoration: none; color: inherit;"><v-list-item lines="two">Daftar Menu</v-list-item></router-link>
                      </template>

                      <v-divider></v-divider>

                      <v-list nav>
                          <router-link to="/Makanan" style="text-decoration: none; color: inherit;"><v-list-item>Makanan</v-list-item></router-link>
                          <router-link to="/Minuman" style="text-decoration: none; color: inherit;"><v-list-item>Minuman</v-list-item></router-link>
                          <router-link to="/Snack" style="text-decoration: none; color: inherit;"><v-list-item>Snack</v-list-item></router-link>
                      </v-list>

                      <template v-slot:append>
                        <v-btn color="warning" style="width: 90%; margin: 5%">Checkout</v-btn>
                      </template>
                  </v-navigation-drawer>
                  <v-main style="height:100%">
                    <router-view></router-view>
                  </v-main>
              </v-layout>
          </v-card>
      </v-app>
  </div>
</template>

<script>
// import MenuPage from './components/MenuPage.vue'
export default {
  name: 'App',
  components:{
    // MenuPage
  }
}
</script>

<style>
#drawer{
    background-color: red; 
    color: white;
    font-size: large;
}
</style>