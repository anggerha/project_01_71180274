<template>
    <div class="container">
        <div v-for="item in Makanan" :key="item.nama">
            <router-link :to="{name: 'CheckoutPage', query: {data: JSON.stringify(item)}}">
                <div class="polaroid">
                    <img :src="item.gambar" style="width:100%">
                    <div class="container">
                        <p style="width:100%">{{item.nama}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MakananPage',
    data(){
        return {
            Makanan:[
                {
                    nama:'BigMac',
                    harga: 30000,
                    gambar: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off',
                    rasa: '',
                    additional: null,
                    tipe: 'makanan'
                },
                {
                    nama:'Chocolate Sundae',
                    harga: 20000,
                    gambar: 'https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/Cmkum3XzOL5YOnBgDMTQ.png',
                    rasa: '',
                    additional: null,
                    tipe: 'makanan'
                },
                {
                    nama:'McFlurry Choco',
                    harga:15000,
                    gambar:'https://nos.jkt-1.neo.id/mcdonalds/foods/October2022/bcp2nCLBZXHCLkf81S2q.png',
                    rasa: '',
                    additional: null,
                    tipe: 'makanan'
                }
            ]
        }
        
    },
    methods: {
        add(){
            
        }
    }
}
</script>

<style>
    div.polaroid {
    width: 30%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 25px;
    width:20%;
    float: left;
    }

    div.container {
    text-align: center;
    padding: 10px 20px;
    font-size: 3rem;
    width: 100%;
    }
</style>