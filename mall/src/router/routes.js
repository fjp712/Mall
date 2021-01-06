import home from "./route/home";
import production from "./route/production";
import detail from "./route/detail";


export default [
        ...home,
    ...production,
    ...detail
]
