const shoppingCart={
    namespaced:true,
    state:{
        shoppingCart:[]
    },
    mutations:{
        add(state,payload){
            state.shoppingCart.push({...payload})
            console.log(state.shoppingCart)
        },
        delete(state,payload){
            delete  state.shoppingCart[payload.index]
            console.log(state.shoppingCart)
        }
    }
}
export default shoppingCart
