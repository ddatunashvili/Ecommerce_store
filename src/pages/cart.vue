<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />
    <div class="bar">
        <h2 >Items</h2>
        <h2 v-show="getData.length == 0">There is no item :(</h2>
        <p v-show="countTotal">Total Cost: <span style="color:red !important">{{ countTotal }} Gel</span></p>
    </div>


    <div class="items">
        <!-- როცა ვაკლიკებ მოაქვს დაკლიკებული პროდუქტი -->
        <cart_item v-for="(item, index) in getData" :key="index" :data="item" @getId="delete_product" @decrement="reduce_count" @increment="increase_count"/>
    </div>
</template>

<script>
import store from "../store/index"
import cart_item from "../components/cartItem.vue"
import Header from "../components/header.vue"

export default {
    components: {
        cart_item,
        Header
    },
    data() {
        return {
            total: 0
        }
    },
    methods:{
        delete_product(id){
            // console.log(id,"this is id");
            store.commit("del_product",id)
            // ვააფდეითებთ  ლოკალს
            localStorage.setItem("cartItems",JSON.stringify(store.state.cart_prod))
        },
        reduce_count(id){
            store.commit("reduce_count",id)
            localStorage.setItem("cartItems", JSON.stringify(store.state.cart_prod))

        },increase_count(id){
            store.commit("increase_count",id)
            localStorage.setItem("cartItems", JSON.stringify(store.state.cart_prod))
        }
    }, computed: {
        getData() {
            return store.getters.get_roducts
        }, countTotal() {
            let sum = 0
            this.getData.forEach(el => {
                sum += el.price
            })
            return sum

        }
    }

}
</script>
<style scoped>
.items {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: fit-content;
    align-items: flex-start;
    justify-content: start;
}

p {
    font-weight: bold;
    font-size: 20px;
    font-family: cursive;
    color: blueviolet;
    
}
.bar{
    display: flex;
    width: 1200px;
    margin: auto;
    justify-content: center;
    align-items: center;
    gap: 140px;
}

</style>