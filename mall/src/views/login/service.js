import axios from "../../utils/axios";
export const login= async function (data) {
    const result=await axios.get('/api/user/getall',{
        data:{
            ...data
        }
    })
    return result
}
