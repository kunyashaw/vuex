<template>
        <div>
            <h1>待做事项列表</h1>  
            <input type='text' v-model="myInput"/>
            <button @click="addToList">add</button>
        </div>
</template>

<script>
    export default{
        data:function(){
            return {
                myInput:''
            }
        },
        methods:{
            addToList:function(){
                this.$store.commit('add',this.myInput);
            }
        }
    }
</script>