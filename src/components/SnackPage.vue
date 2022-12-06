<template>
    <div>
        <div class="polaroid">
            <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/L5xeXc9T4xrtXUjqZtih.png" alt="Chicken Curry Puff" style="width:100%">
            <div class="container">
                <p>Chicken Curry Puff</p>
            </div>
        </div>
        <div class="polaroid">
            <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/GB2nZ0H8neIAfKUBh8Wd.png" alt="Butter Croissant" style="width:100%">
            <div class="container">
                <p>Butter Croissant</p>
            </div>
        </div>
        <div class="polaroid">
            <img src="https://nos.jkt-1.neo.id/mcdonalds/foods/September2019/MxJjX3fZYFo32vHjzr7x.png" alt="Klepon Cake" style="width:100%">
            <div class="container">
                <p>Klepon Cake</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SnackPage'
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