import axios from "../../utils/axios"
import qs from 'querystring'

export const login= async function (data) {
    const Data=qs.stringify(data)
    return await axios.post('/api/user/login', Data)

}
