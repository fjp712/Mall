import axios from "../../utils/axios";
import qs from 'querystring'


export const getAllCommodity=async function (id) {
    const result=await axios.get(`/api/shoppingcart/getall/${id}`)
    return result.data
}

export const DeleteCommodity=async function (data) {
    const Postdata=qs.stringify(data)
    await axios.post('/api/shoppingcart/deletecartbyid',Postdata)
}

export const Pay=async function(data,token){
    const result=await axios.post(`/api/order/addorder/${data}`,qs.stringify(token))
    return result
}
