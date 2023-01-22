<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="product">
        <!-- ლინკის დადება -->
        
        <img @click="openItem" :src="data.url" alt="">
        <h2 >{{ data.title }}</h2>
        <div class="details">
            <p>{{ data.desc }}</p>
             <p> {{ data.price }} Gel</p>
            <p>{{ data.amount }}x</p>
        </div>
        <span class="btn" @click="reduce">reduce</span> <span style="background:lime; color:black" class="btn" @click="increase">increase</span>  <button @click="sendID">Delete</button>

    </div>

</template>
<script>
export default {
    props: {
        data: {
            required: true,
            type: Object,
        }
    },
    data() {
        return {

        }
    },methods:{
        openItem(){
            this.$router.push({path: "inner", query: {plan: this.data.id}})
        },
        sendID(){
            this.$emit("getId",this.data.id)
        },reduce(){
            this.$emit("decrement",this.data.id)
        },increase(){
            this.$emit("increment",this.data.id)
        }
    }

}

</script>
<style scoped>
.btn{
    border: none;
    padding: 10px 20px;
    color: white;
    background: black;
    cursor: pointer;
    margin-right: 20px;
}
.product {
    display: block;
    border-radius: 10px;
    padding: 40px;
    width: fit-content;
    background-color: rgba(165, 154, 143, 0.176);
    backdrop-filter: blur(1);
}
button{
    margin-top: 50px;
    background-color: rgb(175, 3, 3);
}
.details p:nth-of-type(3) {
    background: rgb(134, 118, 118);
    width: fit-content;
    margin: auto;
    height: fit-content;
    padding: 2px 20px;
    border-radius: 20px;
    display: flex;
    color: white;
    letter-spacing: 1px;
}
.product img{
    border-radius:20px;
    filter: grayscale(0.5);
    cursor: pointer;
}
.product img:hover{
    filter: grayscale(0);
}

</style>