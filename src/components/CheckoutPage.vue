<template>
    <div class="checkout">
        <v-container v-if="item.tipe == 'makanan'">
            <v-row no-gutters justify="center">
                <v-col>
                    <v-sheet class="pa-2 ma-2 checkout">
                        <div style="text-align: center;">
                            <h2><b>Pedas/Tidak</b></h2>
                            <v-btn-toggle v-model="rasa" color="deep-purple-accent-3">
                                <v-btn value="pedas" @click="rasaFunct"><h2>Pedas</h2></v-btn>
                                <v-btn value="tidak" @click="rasaFunct"><h2>Tidak</h2></v-btn>
                            </v-btn-toggle>
                        </div>
                        <div style="text-align: center;">
                            <h2><b>Ekstra Kentang (+10.000)</b></h2>
                            <v-btn-toggle v-model="additional" color="deep-purple-accent-3">
                                <v-btn value="ekstra" @click="additionalFunct"><h2>Ya</h2></v-btn>
                                <v-btn value="tidak" @click="additionalFunct"><h2>Tidak</h2></v-btn>
                            </v-btn-toggle>
                        </div>
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-2 ma-2 checkout">
                        <div style="float: right; text-align: center;" >
                            <img :src="item.gambar" :alt="item.nama">
                            <h1>{{item.nama}}</h1>
                            <h1>Rp. {{item.harga}}</h1>
                            <router-link :to="{name: 'KeranjangPage', query: { keranjang: JSON.stringify(item)}}">
                                <div><v-btn id="btnPesan">Tambah ke Pesanan</v-btn></div>
                            </router-link>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-if="item.tipe == 'minuman'">
            <v-row no-gutters justify="center">
                <v-col>
                    <v-sheet class="pa-2 ma-2 checkout">
                        <div style="text-align: center;">
                            <h2><b>Ukuran Minuman</b></h2>
                            <v-btn-toggle v-model="ukuran" color="deep-purple-accent-3">
                                <v-btn value="kecil" @click="ukuranFunct"><h2>Kecil</h2></v-btn>
                                <v-btn value="sedang" @click="ukuranFunct"><h2>Sedang</h2></v-btn>
                                <v-btn value="besar" @click="ukuranFunct"><h2>Besar</h2></v-btn>
                            </v-btn-toggle>
                        </div>
                    </v-sheet>
                </v-col>
                <v-col>
                    <v-sheet class="pa-2 ma-2 checkout">
                        <div style="float: right; text-align: center;" >
                            <img :src="item.gambar" :alt="item.nama">
                            <h1>{{item.nama}}</h1>
                            <h1>Rp. {{item.harga}}</h1>
                            <router-link :to="{name: 'KeranjangPage', query: { keranjang: JSON.stringify(item)}}">
                                <div><v-btn id="btnPesan">Tambah ke Pesanan</v-btn></div>
                            </router-link>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-if="item.tipe == 'snack'">
            <v-row no-gutters justify="center">
                <v-col>
                    <v-sheet class="pa-2 ma-2 checkout">
                        <div style="text-align: center;" >
                            <img :src="item.gambar" :alt="item.nama">
                            <h1>{{item.nama}}</h1>
                            <h1>Rp. {{item.harga}}</h1>
                            <router-link :to="{name: 'KeranjangPage', query: { keranjang: JSON.stringify(item)}}">
                                <div><v-btn id="btnPesan">Tambah ke Pesanan</v-btn></div>
                            </router-link>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'CheckoutPage',
    props: ['data'],
    data() {
        return {
            item:{},
            hargaTemp: null,
            rasa: null,
            additional: null,
            ukuran: null
        }
    },
    created() {
        this.item = JSON.parse(this.data)
        this.hargaTemp = this.item.harga
    },
    methods: {
        additionalFunct(){
            if(this.additional === 'ekstra'){
                this.item.harga += 10000
            } else {
                this.item.harga = this.hargaTemp
            }
            this.item.additional = this.additional
        },
        rasaFunct(){
            this.item.rasa = this.rasa
        },
        ukuranFunct(){
            if(this.ukuran === 'sedang'){
                this.item.harga = this.hargaTemp + 3000
            } else if (this.ukuran === 'besar') {
                this.item.harga = this.hargaTemp + 5000
            } else {
                this.item.harga = this.hargaTemp
            }
        }
    },
}
</script>

<style>
span{
  margin: 3%;  
}
#btnPesan{
    bottom: 0;
    background-color: #f16464;
    color: white;
}
.checkout {
  font-family: "Exo 2", sans-serif;
  background: rgb(63, 161, 251);
  background: linear-gradient(
    142deg,
    rgba(63, 161, 251, 1) 0%,
    rgba(252, 70, 168, 1) 100%
  );
  height: 100%;
  color: white;
}
</style>