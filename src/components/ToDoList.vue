<template>
    <ul>
        <todoitem v-for="(tmp,index) in list" 
        :ct="tmp" :key="index" :myIndex="index"></todoitem>
    </ul>
</template>

<script>
    export default{
        created:function(){
            console.log(this.list);
        },
        computed:{
            list:function(){
                return this.$store.getters.list
            }
        }
        
    }
</script>