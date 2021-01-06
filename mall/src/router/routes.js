import home from "./route/home";
import production from "./route/production";
import detail from "./route/detail";
import shoppingCart from "./route/shoppingCart";


export default [
        ...home,
    ...production,
    ...detail,
    ...shoppingCart
]
