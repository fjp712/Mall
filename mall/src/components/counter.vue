<template>
    <div class="counter_container">
        <button class="button" @click="reduce">
            <i class="el-icon-minus"></i>
        </button>
        <div class="showData">
            {{count}}
        </div>
        <button class="button" @click="add">
            <i class="el-icon-plus"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: "counter",
        data(){
            return{
                count:0
            }
        },
        methods:{
            reduce(){
                this.count--;
                if(this.count<0)
                {
                    this.$message.warning('不能再减少了')
                    this.count=0
                }
                this.$emit("countChange",this.count)

            },
            add(){
                this.count++
                this.$emit("countChange",this.count)
            }
        }
    }
</script>

<style scoped>
.counter_container{
        display: flex;
    }
.button{
    width: 30px;
    height: 30px;
    border: transparent;
}
.showData{
    height: 20px;
    width: 40px;
    text-align: center;
}

</style>
