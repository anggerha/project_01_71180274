<template>
  <div>
    <v-app >
          <v-card>
              <v-layout style="height: 100vh;">
                  <v-navigation-drawer permanent location="left" id="drawer" >
                      <template v-slot:prepend>
                          <router-link to="/" style="text-decoration: none; color: inherit;"><v-list-item lines="two">Daftar Menu</v-list-item></router-link>
                      </template>

                      <v-divider></v-divider>

                      <v-list nav>
                          <router-link class="menu" to="/Makanan"><v-list-item>Makanan</v-list-item></router-link>
                          <router-link class="menu" to="/Minuman"><v-list-item>Minuman</v-list-item></router-link>
                          <router-link class="menu" to="/Snack"><v-list-item>Snack</v-list-item></router-link>
                      </v-list>

                      <template v-slot:append>
                        <router-link to="KeranjangPage"><v-btn color="warning" style="width: 90%; margin: 5%">Checkout</v-btn></router-link>
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
    background-color: #f16464; 
    color: white;
    font-size: large;
}
.menu{
  text-decoration: none; color: inherit;
}
.menu:hover{
  text-decoration: underline;
}
</style>