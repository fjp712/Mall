import axios from "../../utils/axios";
import qs from 'querystring'


export const getAllCommodity=async function () {
    const result=await axios.get('/api/shoppingcart/getall/1')
    return result.data
}

export const DeleteCommodity=async function (data) {
    const Postdata=qs.stringify(data)
    await axios.post('/api/shoppingcart/deletecartbyid',Postdata)
}
