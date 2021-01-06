import Vue from 'vue'
import Vuex from 'vuex'
import shoppingCart from "./modules/shoppingcart";
Vue.use(Vuex)

const store=new Vuex.Store(
    {
        state:{
            userInfo:{}
        },
        modules:{
            shoppingCart
        }
    }
)

export default store
