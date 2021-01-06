import home from "./route/home";
import production from "./route/production";
import detail from "./route/detail";
import shoppingCart from "./route/shoppingCart";
import login from "./route/login";

export default [
        ...home,
    ...production,
    ...detail,
    ...shoppingCart,
    ...login
]
