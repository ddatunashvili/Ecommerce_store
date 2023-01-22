<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header/>
    <div class="home">
        <!-- ჩაწერილს დინამიურად წამოიღებს -->
        <input v-model="search" type="text" class="search" placeholder="search" name="" id="">
        <p v-if="error">NOT FOUND :(</p>
        <div v-else class="products">
            <!-- პროდუქტების გამოტანა -->
            <Product v-for="(item,index) in getData" :key="index" :data="item"/>
        </div>
    </div>
    
</template>
<script>
import Product from "../components/product.vue"
import Header from "../components/header.vue"
import prData from "../products.json"
export default{
    components:{
        Product,    
        Header

    },
    data(){
        return{
           products: prData,
        //    search word
           search:'',
           error : null,
        }
    },
    mounted(){
      
    },
    computed:{
        // დინამიური მონაცემების წამოღება
        getData(){
            // return this.products
            // პროდუქტებიდან გაიფილტროს თაითლის მიხედვით რომელიც შეიცავს searcword ს
            return this.products.filter(el => el.title.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    watch:{
        getData: function(){
                if (this.getData.length === 0){
                    this.error = true
                }else{
                    this.error = false
                }
        }
    }
}
</script>
<style scoped>
    .products{
        background-color: rgba(165, 154, 143, 0.176);
        margin: auto;
        margin-top: 50px;
        display: grid;
        height: fit-content;
        width:fit-content;
        border-radius: 20px;  
        transition: 0.3s;      
        grid-template-columns: 1fr 1fr 1fr ;
    }
    
</style>