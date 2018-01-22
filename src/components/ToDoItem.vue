<template>
    <div>
        <button @click="deleteFromList">delete</button>
        <span>{{ct}}</span>
    </div>
</template>

<script>
    export default{
        props:['myIndex','ct'],
        methods:{
            deleteFromList:function(){
                this.$store.commit('delete',this.myIndex);
            }
        }
    }
</script>