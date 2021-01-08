import axios from "../../utils/axios";
import qs from 'querystring'

export const getProductInformation=async function(data){
    const result=await axios.post('/api/producttype/getalltype',qs.stringify(data))
    return result.data
}
