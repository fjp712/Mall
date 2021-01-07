import Axios from "axios";
const axios=Axios.create({
})
axios.defaults.headers.post['Content-Type']= 'application/x-www-form-urlencoded';
console.log(axios.defaults.headers)
export default axios
