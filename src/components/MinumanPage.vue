<template>
    <div>
        <div class="polaroid">
            <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/October2022/PR9LTm017Im54PLWGqHn.png" alt="Apple Fizz" style="width:100%">
            <div class="container">
                <p>Apple Fizz</p>
            </div>
        </div>
        <div class="polaroid">
            <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/D8LeTajQpFSuUbAsugUq.png" alt="Coca Cola" style="width:100%">
            <div class="container">
                <p>Coca Cola</p>
            </div>
        </div>
        <div class="polaroid">
            <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/4ANlG5rmRU06y7H2hgos.png" alt="Fanta McFloat" style="width:100%">
            <div class="container">
                <p>Apple Fizz</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MinumanPage'
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