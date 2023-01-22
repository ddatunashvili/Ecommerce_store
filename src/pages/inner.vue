<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header/>
    <div>
        <img :src="data.url" alt="">
        <p>{{ data.title }}</p>
        <p>{{ data.desc }}</p>
        <p>{{ data.price * product_count }} Gel</p>

        <button @click="product_count--">-</button>
        {{ product_count }}
        <button @click="product_count++">+</button>
        <br>
        <button class="add"  @click="addItem">Add to bag </button>
    </div>
</template>
<script>
import prData from "../products.json"
import store from "../store/index"
import Header from "../components/header.vue"
export default {
    components:{
        Header
    },  
    data() {
        return {
            data: prData,
            product_count: 1,
            itemToadd:{},
            disabled:false
        }
    },
    methods:{
        addItem(){
            this.itemToadd = {
                id:this.data.id,
                title:this.data.title,
                desc:this.data.desc,
                url:this.data.url,
                price: this.data.price * this.product_count,
                amount: this.product_count
            }
            // დამატება სთორში
            store.commit("add_product",this.itemToadd)
            // ლოკალში შენახვა cartItems სახელზე
            localStorage.setItem("cartItems", JSON.stringify(store.state.cart_prod))
            // console.log(store.state.cart_prod)

        }
    },
    mounted() {
        // მიღებული როუტის ინფო
        //   console.log(this.$route.query.plan);
        this.data = prData.filter(el => el.id === parseInt(this.$route.query.plan))[0]
    },
    // გააკონტროლოს product count 
    watch: {
        product_count: function () {
                if (this.product_count < 1) {
                    this.product_count = 1
                }
        },
        
    }
}
</script>
<style scoped>
    img{
        width: 20%;
        border-radius: 30px;
    }.add{
        margin-top: 50px;
        width: 200px;
        background-color: rgb(164, 89, 234);
        height: 50px;
        border: none;
        color: white;
        cursor: pointer;
        border-radius: 40px;
    }
  
</style>