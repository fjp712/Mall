<template>
    <div class="counter_container">
        <button class="button"></button>
        <div class="showData"></div>
        <button class="button"></button>
    </div>
</template>

<script>
    export default {
        name: "counter",
        data(){
            return{
                count:0
            }
        }
    }
</script>

<style scoped>
.counter_container{
        display: flex;
    }
.button{
    width: 20px;
    height: 20px;
    border: transparent;
}
.showData{}

</style>
