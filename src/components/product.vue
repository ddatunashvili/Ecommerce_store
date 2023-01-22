<!-- eslint-disable vue/multi-word-component-names -->
<template>
    
   <div class="product">
    <!-- ლინკის დადება -->
    <img :src="data.url" alt="">
    <p>{{ data.title }}</p>
    <p>{{ data.desc }}</p>
    <p>{{ data.price }} Gel</p>
    <button @click="openPost">view product</button>
   </div> 
</template>
<script>
export default{
    props:{
        data:{
            required:true,
            type:Object
        }
    },
    data(){

    },
    methods:{
        openPost(){
            // როუტერს გადავცემთ ობიექტს
            this.$router.push({path: "inner", query: {plan: this.data.id}})
        }
    }
}
</script>

<style>
    .product{
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.166);
    }
    .product img{
        width:300px;
        height: auto;
        
    }
</style>