<template>
    <div style="margin-top: 80px" >

    </div>
</template>

<script>
    import {login} from "./service";
    export default {
        name: "index",
        created() {
            console.log('chufa')
            login()
        }
    }
</script>

<style scoped>

</style>
