import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from "./routes";
import {enterShoppingCart} from "./guard";

Vue.use(VueRouter)

const router=new VueRouter({
    mode:"history",
    routes,
})
router.beforeEach(enterShoppingCart)

export default router
