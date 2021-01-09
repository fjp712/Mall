<template>
<div style="margin-top: 80px">
    <div class="outer0">
        <el-carousel type="card">
            <el-carousel-item v-for="(item,index) in carouselImgList" :key="index">
                <img :src="item" style="height: 300px;width: 600px">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="outer1">
        <div  class="a1">新品推荐，精心挑选</div>
        <div  class="a2"><span >家居必备实用小单品</span></div>
        <div class="inter1">
            <div  class="zuo"><i class="icon iconfont icon-pc-zuo"></i></div>
            <div  class="you"><i class="icon iconfont icon-pc-you"></i></div>
            <div class="bbb">
                <ul>
                    <li v-for="item in newRecommendData" :key="item.id" @click="loadDeatil(item)">
                       <img :src="item.picture_url" alt="" :title="item.name">
                        <p>{{item.name}}</p>
                       <span>￥{{item.price}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="outer2">
        <p class="outer2_p1">专题活动，现实促销</p>
        <div class="inter2">
            <p>严选材质，用心设计，精致家居生活</p>
        </div>
        <div class="inter3">
            <div  v-for="(item,index) in activityCommodityData" :key="item.id" :class="classlist[index]">
                <img :src="item.picture_url" alt="" :class="index===0?'bigImg':''">
                <span class="border1"></span>
            </div>
        </div>
    </div>
    <div class="box">
        <p class="p1">青竹良品，你的首选</p>
        <div class="box1">
            <p>天然之源，诚挚之礼，严格质检</p>
        </div>
        <div class="box2">
            <ul>
                <div class="start">
                    <img :src="productData[0].picture_url" alt="">
                </div>
                <div class="start1">
                   <img :src="productData[1].picture_url" alt="">
                </div>
                <div class="end">
                    <li class="l1" v-for="item in productData[0].products" :key="item.id" >
                        <img :src="item.picture_url" alt="" style="height: 100%;width: 100%">
                        <p class="p11">{{item.name}}</p>
                        <p class="p22">{{item.price}}</p>
                        <div  class="a11" ><div class="d11" @click="loadDeatil(item)">查看详情</div></div>
                    </li>
                    <li class="l1" v-for="item in productData[1].products" :key="item.id" >
                       <img :src="item.picture_url" alt="" style="height: 100%;width: 100%">
                        <p class="p11">{{item.name}}</p>
                        <p class="p22">{{item.price}}</p>
                        <div class="a11"><div class="d11" @click="loadDeatil(item)">查看详情</div></div>
                    </li>
                </div>
            </ul>
        </div>

    </div>
    <div class="outer3">
        <p class="p1">全球大牌优选，买手用心挑选</p>
        <div class="inter1">
            <p>全球好货 原装正品 海外直邮 自有保税仓</p>
        </div>
        <div class="inter2">
            <div class="left" style="margin-left: 140px">
                    <img
                        :src="famousBrandData[0].picture_url"
                        alt=""
                        style="width: 504px;height: 358px"
                        @click="loadDeatil(famousBrandData[0])"
                >
                <span class="border1"></span>
            </div>
            <div class="mid">
                <div class="mid1">
                        <img
                            :src="famousBrandData[1].picture_url"
                            alt=""
                            style="width: 411px;height: 172px"
                            @click="loadDeatil(famousBrandData[1])"
                    >
                    <span class="border2"></span>
                </div>
                <div class="mid2">
                        <img
                            :src="famousBrandData[2].picture_url"
                            alt=""
                            style="width: 411px;height: 172px"
                            @click="loadDeatil(famousBrandData[2])"
                        >
                    <span class="border3"></span>
                </div>
            </div>
            <div class="right" style="margin-right: 200px">
                    <img :src="famousBrandData[3].picture_url"
                         alt="" style="height: 358px;width: 197px" @click="loadDeatil(famousBrandData[3])">
                <span class="border4"></span>
            </div>
        </div>
        <div class="inter3">
            <ul>
                <li v-for="item in brandData" :key="item.id">
                    <div class="a1"><img :src="item.brand_url" alt=""></div>
                    <p>{{item.brand_name}}</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="outer5">
        <div class="inter1" style="margin-left: 140px">
            <div class="left">
                <img src="images/logo.png" alt="">
                <p>青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活</p>
            </div>
            <div class="center">
                <dl>
                    <dt><a href="">关于我们</a></dt>
                    <dd><a href="">我的品牌</a></dd>
                    <dd><a href="">公司动态</a></dd>
                    <dd><a href="">经历发展</a></dd>
                    <dd><a href="">商品推广</a></dd>
                </dl>
                <dl>
                    <dt><a href="">支付方式</a></dt>
                    <dd><a href="">微信支付</a></dd>
                    <dd><a href="">支付宝</a></dd>
                    <dd><a href="">百度钱包</a></dd>
                    <dd><a href="">货到付款</a></dd>
                </dl>
                <dl>
                    <dt><a href="">相关服务</a></dt>
                    <dd><a href="">退货政策</a></dd>
                    <dd><a href="">购物流程</a></dd>
                    <dd><a href="">客服服务</a></dd>
                    <dd><a href="">商务合作</a></dd>
                </dl>
            </div>
            <div class="right">
                <img src="../../assets/weixin.png" alt="">
                <img src="../../assets/weibo.png" alt="">
                <span>微信公众号</span>
                <span>微博公众号</span>
            </div>
        </div>
        <hr>
        <div class="inter2">

        </div>
    </div>
</div>
</template>

<script>
    import {
        getCarousalData,
        getNewRecommend,
        getAcitivityInfo,
        getProductInfo,
        getFamousBrand,
        getRecommendBrand
    } from "./service";
    import middleware from "../../utils/middleware";
    export default {
        name: "index",

        data(){
            return{
                type:['a','b','c','d'],
                carouselImgList:[],
                newRecommendData:[],
                activityCommodityData:[],
                productData:[],
                famousBrandData:[],
                brandData:[],
                classlist:['left','right1','right2']
            }
        },
        async created() {
           await this.datahandler()
        },
        methods:{
            loadProduction(command) {
                this.$router.push({name: '产品', query: {productname: command}})
            },
            async datahandler(){
                try {
                    let carouseldata=await getCarousalData()
                    let newRecommendData=await getNewRecommend()
                    let activityDatatemplate=await getAcitivityInfo()
                    let productInfotemplate=await getProductInfo()
                    let famousBrandtemplate=await getFamousBrand()
                    let brandInfo=await getRecommendBrand()
                    console.log(famousBrandtemplate)
                    for(let item of carouseldata.data)
                        this.carouselImgList.push(item.picture_url)
                    for(let item of newRecommendData.data)
                        this.newRecommendData.push(item)
                    for(let item of activityDatatemplate.data)
                        this.activityCommodityData.push(item)
                    for(let item of productInfotemplate.data)
                        this.productData.push(item)
                    for(let item of famousBrandtemplate.data)
                        this.famousBrandData.push(item)
                    for(let item of brandInfo.data)
                        this.brandData.push(item)
                }
                catch (e) {
                    this.$message.warning(e.message)
                }

            },
            loadDeatil(item){
                middleware.productInfo=item
                this.$router.push({name:'商品详情',query:{productName:item.name}})
            }
        }
    }
</script>

<style scoped lang="scss">
@import "./style/青竹0.css";
@import "./style/青竹1.css";
@import "./style/青竹2.css";
@import "./style/青竹3.css";
@import "./style/青竹4.css";
@import "./style/青竹5.css";
@import "./style/青竹6.css";
    .outer0{
        margin:80px 140px 0 140px;
    }
    .bigImg{
        height: 380px;
        width: 680px;
    }
</style>
