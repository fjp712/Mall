import axios from "../../utils/axios";
export const login= async function () {
    const data=await axios.get('/api/user/getall')
    console.log(data)
}
