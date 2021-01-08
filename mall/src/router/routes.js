import home from "./route/home";
import production from "./route/production";
import detail from "./route/detail";
import shoppingCart from "./route/shoppingCart";
import login from "./route/login";
import register from "./route/register";
import userInfo from "./route/userInfo";
import pay from "./route/pay";
export default [
        ...home,
    ...production,
    ...detail,
    ...shoppingCart,
    ...login,
    ...register,
    ...userInfo,
    ...pay
]
