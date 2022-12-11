<template>
    <div class="container">
        <div v-if="totalKeranjang.length != 0">{{totalKeranjang}}</div>
        <div v-else>Keranjang Anda Kosong</div>
    </div>
</template>

<script>

export default {
    name: 'KeranjangPage',
    props:['keranjang'],
    data() {
        return {
            totalKeranjang:[]
        }
    },
    created() {
        if(this.keranjang)
            this.totalKeranjang.push(JSON.parse(this.keranjang))
    }
}
</script>