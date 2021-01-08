import axios from "../../utils/axios";


export const getReommendActivity=function(){
    const data=axios.get('/api/product/getcommend')
    return data
}
