import {createStore} from 'vuex'

// გლობალური ცვლადი
export default createStore({
    state:{
        cart_prod:[]
    },
    mutations:{
        add_product(state,item){
           this.push = true 
            for( var el of state.cart_prod){
                 if (el.id == item.id){
                    el.price += item.price
                    el.amount += item.amount
                    this.push = false
                    
                }
            }
           if (this.push === true){
             state.cart_prod.push(item)
           }
           
        },
        del_product(state,id){
            state.cart_prod = state.cart_prod.filter(el => el.id !== id)// აჩვენე ის რომელიც არ არის ეს 
        },reduce_count(state,id){
            for( var el of state.cart_prod){
                if (el.id == id & el.amount != 1){
                    el.price -= el.price / el.amount
                    el.amount -= 1
                }
           }
        }
        ,increase_count(state,id){
            for( var el of state.cart_prod){
                if (el.id == id){
                    el.price += el.price / el.amount
                    el.amount += 1
                }
           }
        },
        // ლოკალიდან წამოღებულით ანაცვლებს კარტის პროდუქტებს
        replace(state,product){
            state.cart_prod = product
        }
    },
    getters:{
        get_roducts: state =>{
            return state.cart_prod
        }
    }
})