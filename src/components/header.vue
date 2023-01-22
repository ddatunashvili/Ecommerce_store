<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
    <header>
        <router-link to="/">
            <h1> Add some shit to bag :)</h1>
        </router-link>

        <router-link to="/cart">
            <span :class="{ 'active': active }">
                <i class="fa badge fa-lg" :value="count_products">&#xf07a;</i>

            </span>
        </router-link>
    </header>
</template>


<script>
import store from "../store/index"
// ორი hook data და methods
export default {
    data() {
        return {
            count_: 0,
            active: false,
            timer: null
        }
    }, computed: {
        count_products() {
            return store.getters.get_roducts.length
        }
    }, watch: {
        count_products: function () {
            this.active = true
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.active = false
            }, 1000);

        }

    }
}
</script>

<!-- scope მხოლოდ ამ ფაილში სტილი -->
<style scoped>
header {
    display: flex;
    width: 1300px;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin-bottom: 50px;
}

h1 {
    color: orange;
}

span {
    transition: 0.06s all;
}

span.active {
    display: block;
    transform: scale(1.2);

}

.button {
    width: 100px;
    height: 100px;
    background: red;
}

.func {
    width: 100px;
    height: 100px;
    background: blue;
    color: aquamarine;
}

/* count */
.badge:after {
    content: attr(value);
    font-size: 12px;
    color: #fff;
    background: red;
    border-radius: 50%;
    padding: 0 5px;
    position: relative;
    left: -8px;
    top: -10px;
    opacity: 0.9;
}
</style>

