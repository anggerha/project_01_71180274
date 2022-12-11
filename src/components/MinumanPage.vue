<template>
    <div class="container">
        <div v-for="item in Minuman" :key="item.nama">
            <router-link :to="{name: 'CheckoutPage', query: { data: JSON.stringify(item)}}">
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
    name: 'MinumanPage',
    data() {
        return {
            Minuman:[
                {
                    nama:'Apple Fizz',
                    harga: 10000,
                    gambar: 'https://nos.jkt-1.neo.id/mcdonalds/foods/October2022/PR9LTm017Im54PLWGqHn.png',
                    ukuran: null,
                    tipe: 'minuman'
                },
                {
                    nama:'Coca Cola',
                    harga: 8000,
                    gambar: 'https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/D8LeTajQpFSuUbAsugUq.png',
                    ukuran: null,
                    tipe: 'minuman'
                },
                {
                    nama:'McFloat',
                    harga: 12000,
                    gambar: 'https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/4ANlG5rmRU06y7H2hgos.png',
                    ukuran: null,
                    tipe: 'minuman'
                },
            ]
        }
    },
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