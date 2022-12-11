<template>
    <div class="container">
        <div v-for="item in Snack" :key="item.nama">
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
    name: 'SnackPage',
    data() {
        return {
            Snack:[
                {
                    nama:'Chicken Curry Puff',
                    harga: 5000,
                    gambar: 'https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/L5xeXc9T4xrtXUjqZtih.png',
                    tipe: 'snack'
                },
                {
                    nama:'Butter Corissant',
                    harga: 8000,
                    gambar: 'https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/GB2nZ0H8neIAfKUBh8Wd.png',
                    tipe: 'snack'
                },
                {
                    nama:'Klepon Cake',
                    harga: 6000,
                    gambar: 'https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/MxJjX3fZYFo32vHjzr7x.png',
                    tipe: 'snack'
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