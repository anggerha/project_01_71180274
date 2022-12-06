<template>
    <div>
        <div>
            <div class="polaroid">
                <img src="https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off" alt="BigMac" style="width:100%">
                <div class="container">
                    <p>BigMac</p>
                </div>
            </div>
            <div class="polaroid">
                <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/Cmkum3XzOL5YOnBgDMTQ.png" alt="Chocolate Sundae" style="width:100%">
                <div class="container">
                    <p>Chocolate Sundae</p>
                </div>
            </div>
            <div class="polaroid">
                <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/October2022/bcp2nCLBZXHCLkf81S2q.png" alt="McFlurry Choco" style="width:100%">
                <div class="container">
                    <p>McFlurry Choco</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MakananPage',
    data(){
        return {
            
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
    margin-bottom: 25px;
    }

    div.container {
    text-align: center;
    padding: 10px 20px;
    font-size: 3rem;
    }
</style>