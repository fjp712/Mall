import {Message} from "element-ui";

export const enterShoppingCart=function (to,from,next) {
    if(to.name==='购物车')
    {
        const user=sessionStorage.getItem('user')||[]
        if(user.length===0)
        {
            Message.warning('您还没有登录，无法访问购物车')
            next({name:'登录'})
        }
        else
            next()
    }
    next()
}
