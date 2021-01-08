import axios from "../../utils/axios";
import qs from 'querystring'

export const addCommodity=async function(data){
    const Postdata=qs.stringify(data)
    await axios.post('/api/shoppingcart/addcart',Postdata)
}
