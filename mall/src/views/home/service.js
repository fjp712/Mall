import axios from "../../utils/axios";


export const getCarousalData=async function () {
    const data=await axios.get('/api/banner/getshow')
    return data.data
}
export const getNewRecommend=async function () {
    const data=await axios.get('/api/product/getnew')
    return data.data
}

export const getAcitivityInfo=async function () {
    const data=await axios.get("/api/activityproduct/getshow")
    return data.data
}

export const getProductInfo=async function () {
    const data=await axios.get("/api/producttype/getshow")
    return data.data
}

export const getFamousBrand=async function(){
    const data=await axios.get('/api/product/getcommend')
    return data.data
}

export const getRecommendBrand=async function () {
    const data=await axios.get("/api/brandtype/getcommend")
    return data.data
}
