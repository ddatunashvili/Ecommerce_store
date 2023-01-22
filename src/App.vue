<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <router-view />
  <Style/>
</template>
 

<script>
import Style from './style.vue'
// ლოკალისთვის სთორი დამჭირდა
import store from "./store/index"
export default {
  name: 'App',
  components: {
    Style
  },mounted(){
    // თუ რაიმე აითემია ლოკალში
    if(localStorage.getItem("cartItems")){
      // წამოიღებს ლოკალიდან და მასივად აქცევს parse მერე რიფლეის უგზავნის
      store.commit("replace",JSON.parse(localStorage.getItem("cartItems")))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
