<template>
    <div>
      <v-app>
          <v-card>
              <v-layout>
                  <v-main style="height: 100vh;">
                    <div style="text-align: center; margin: auto; align-content: center; margin-top: 25%">
                      <h2>Selamat Datang di Aplikasi MacDonal</h2>
                      <h2>Silahkan Pesan Makanan Anda</h2>
                    </div>
                  </v-main>
              </v-layout>
          </v-card>
      </v-app>
    </div>
</template>

<script>
export default {
    name: 'MenuPage',
    data () {
      return {
        checkout: []
      }
    },
}
</script>