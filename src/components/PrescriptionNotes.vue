<template>
   <div class="PrescriptionNotes">
   <div class="top"><i class="el-icon-arrow-left" @click="back_to"></i><span>电子处方笺</span></div>
     <div class="PrescriptionNotes-background">
        <div class="PrescriptionNotes-one">
        <div>
            <span>本次处方笺有效期</span>
            <div>
                <span>{{lists.recipe.createDate == null ? "暂无":lists.recipe.createDate}}</span>
                <span>----</span>
                <span>{{lists.endDate}}</span>
            </div>
        </div>
        <div>
            <div>
                <div>
                   <img src="../assets/perscript/PrescriptionNotes-code.png">
                   <span>{{lists.recipe.doctor.hospitalName}}处方笺</span>
                </div>
                <div class="separate"></div>
                <div>
                   <span>姓名：</span>
                   <span>{{lists.yuyue.userName}}</span>
                   <span>性别：</span>
                   <span>{{lists.yuyue.gender == 1?"男":"女"}}</span>
                   <span>年龄：</span>
                   <span>{{lists.yuyue.age}}</span>
                </div>

                <div>
                   <span>就诊科室：</span>
                   <span>{{lists.recipe.doctor.unitsName}}</span>
                </div>
                <div>
                   <span>就诊日期：</span>
                   <span>{{lists.order.createDate}}</span>
                </div>
            </div>
        </div>
        </div>

        <div class="dividing-line"></div>

        <div class="PrescriptionNotes-two">
            <div>
               <div class="two-title">
                  <span></span>
                  <span>诊断</span>
               </div>
               <div>
                  <p>{{lists.yuyue.cld}}</p>
               </div>
            </div>

             <div class="dividing-line"></div>

              <div>
               <div class="two-title">
                  <span></span>
                  <span>Rp</span>
               </div>
               <div >
                  <ul>
                    <li v-for="list in lists.medicines">
                      <span>
                        <span>{{list.medicine.medicinePublic.medicineName}}</span>
                        <span>&nbsp;{{list.medicine.medicinePublic.specification}}</span>
                        <span>&nbsp;*{{list.quantity}}</span>
                      </span >
                        <span>用法用量：</span>
                        <span v-if="list.docdefined == ''">{{list.usage}}/</span>
                      <span>
                        <span v-if="list.docdefined == ''">一次
                           <span>{{list.dosage}}</span>
                           <span>{{list.unitDose}}/</span>
                        </span>
                        <span>{{list.docdefined != ''? list.docdefined :list.frequency}}</span>
                        <span v-if="list.docdefined == ''">/{{list.days}}日</span>
                      </span>
                    </li>
                  </ul>
               </div>
            </div>
             <div class="dividing-line"></div>
            <div>
               <div class="two-title">
                  <span></span>
                  <span>备注(医嘱)</span>
               </div>
               <div class="inner_content">
                   <p>{{lists.yuyue.pmr}}</p>
               </div>
            </div>

           <div class="dividing-line"></div>

        </div>

        <div class="PrescriptionNotes-three">
            <div>
                <div>医生：</div>
                <div>
                    <img :src="dase + lists.recipe.imgData" alt="" v-if="lists.recipe.imgData !='' && lists.recipe.imgData !=undefined">
                </div>
            </div>
            <div>
                <div>药师：</div> <!-- auditUserSignImage  -->
                <div>
                    <img :src="dase + lists.recipe.auditUserSignImage" alt="" v-if="lists.recipe.auditUserSignImage !='' && lists.recipe.auditUserSignImage !=undefined"> 
                </div>
            </div>
        </div>

     </div>
    <div class="PrescriptionNotes-four" v-if=" lists.pay === 'nopay'">
        <div>
            <div  @click="pay(lists.order.module,lists.order.orderId,lists.yuyue.hospitalId,lists.recipe.imgData,lists.endDate)">
                <span >去支付：</span>
                <span>{{lists.price}}</span>
                <span>元</span>
            </div>
        </div>
    </div>
    <div class="PrescriptionNotes-four" style="background-color:rgb(235,235,233);height:3rem;margin-top:1rem;"  v-else=" lists.pay === 'outtime'">
        <div>
            <div style="background-color:rgb(235,235,233);color:#606266">
                <span >该处方已过期</span>
            </div>
        </div>
    </div>
   </div>
</template>

<style scoped lang="less" scoped>
    .PrescriptionNotes{width:100%;height:100%;}
    .PrescriptionNotes-background{
            background-color: #fff;
            width:100%;height:calc(~"100% - 8rem") ;
            overflow-y: scroll;

        }
    .top{
            width: 100%;
            height: 4rem;
            line-height: 4rem;
            font-size: 17px;
            text-align: center;
            border-bottom: 0.1rem solid #e7e7e7;
            color: #444444;
            & > i{
                position: absolute;
                left: 1.2rem;
                top: 1.0rem;
                font-size: 24px;
            }
            & >img{
                position: absolute;
                right: 1.5rem;
                top: 1.4rem;
            }
    }
    .inner_content{
        width: 100%;
        min-height: 4rem!important;
        & > span{
            padding-left: 4%;
            color: #538dd3;
        }
        & > p{
            padding-left: 1.5rem;
            min-height: 2rem;
            line-height: 2rem;
        }
    }
    .PrescriptionNotes-one{
            background-image:url(./../assets/perscript/PrescriptionNotes-oneBG.png);
            background-size:cover;
            width:100%;
            height: 50%;
            & > div:nth-child(1){
                height: 20%;
                padding-top: 5%;
                & > span:nth-child(1){
                    width: 100%;
                    display: block;
                    text-align: center;
                    margin-bottom: 2%;
                    color: #6d6d6d;
                    font-size: 1.2rem;
                }
                & > div{
                    text-align: center;
                    margin-top: 1%;
                    color: #6d6d6d;
                    font-size: 1.0rem;
                }
            }
            & > div:nth-child(2){
                    height: 70%;
                    & > div:nth-child(1){
                        height: 94%;
                        width: 94%;
                        background-image:url(./../assets/perscript/PrescriptionNotes-oneBG2.png);
                        background-size:100% 100%;
                        margin-left:3%;
                        & > div:nth-child(1){
                            height: 21%;
                            text-align: left;
                            & > img{
                                margin-left: 5%;
                                margin-top: 5%;
                                float:left;
                                width: 2.5rem;
                            }
                            & > span{
                                margin-left: 3%;
                                font-size: 1.4rem;
                                float: left;
                                margin-top: 6%;
                            }
                        }
                        & > div:nth-child(2){
                                height: 7%;
                                border-bottom: 2px dashed #c9c9c9;
                                width: 85%;
                                margin-left: 7.5%;
                        }
                        & > div:nth-child(3){
                                height: 15%;
                                margin-top: 1.5%;
                                margin-left: 16%;
                                border-bottom: 1px solid #c9c9c9;
                                width: 70%;
                                line-height: 2.5rem;
                                & > span:nth-child(1){
                                    float: left;
                                    color: #3a3a3a;
                                    font-size: 1.2rem;
                                }
                                & > span:nth-child(2){
                                    float: left;
                                    color: #6d6d6d;
                                    font-size: 1.2rem;
                                    margin-right: 5%;
                                }
                                & > span:nth-child(3){
                                    float: left;
                                    color: #3a3a3a;
                                    font-size: 1.2rem;
                                    margin-left: 3%;
                                }
                                & > span:nth-child(4){
                                    float: left;
                                    color: #6d6d6d;
                                    font-size: 1.2rem;
                                    margin-right: 5%;
                                }
                                & > span:nth-child(5){
                                    float: left;
                                    color: #3a3a3a;
                                    font-size: 1.2rem;
                                    margin-left: 3%;
                                }
                                & > span:nth-child(6){
                                    float: left;
                                    color: #6d6d6d;
                                    font-size: 1.2rem;
                                }
                        }
                        & > div:nth-child(4){
                                height: 15%;
                                margin-top: 1.5%;
                                margin-left: 16%;
                                border-bottom: 1px solid #c9c9c9;
                                width: 70%;
                                line-height: 2.5rem;
                                & > span:nth-child(1){
                                    float: left;
                                    color: #3a3a3a;
                                    font-size: 1.2rem;
                                }
                                & > span:nth-child(2){
                                    float: left;
                                    color: #6d6d6d;
                                    font-size: 1.2rem;
                                    margin-right: 5%;
                                }
                        }
                        & > div:nth-child(5){
                                height: 15%;
                                margin-top: 1.5%;
                                margin-left: 16%;
                                border-bottom: 1px solid #c9c9c9;
                                width: 70%;
                                line-height: 2.5rem;
                                & > span:nth-child(1){
                                    float: left;
                                    color: #3a3a3a;
                                    font-size: 1.2rem;
                                }
                                & > span:nth-child(2){
                                    float: left;
                                    color: #6d6d6d;
                                    font-size: 1.2rem;
                                    margin-right: 5%;
                                }
                        }
                    }
            }
    }
    .PrescriptionNotes-two{
        width: 100%;
        height: auto;
        & > div:nth-child(1){
            margin-top:2%;
            background-color:#fff;
            width:100%;
            height: auto;
            & > div:nth-child(1){
                width:100%;
                height: 3.5rem;
                & > span:nth-child(2){
                width:4rem;
                }
            }
            & > div:nth-child(2){
                & > p{
                    margin-left: 5%;
                    margin-right: 5%;
                    margin-top: 1%;
                    color:#444444;
                    margin-bottom: 5%;
                }
            }
        }

        & > div:nth-child(3){
            margin-top:2%;
            background-color:#fff;
            width:100%;
            height: auto;
            & > div:nth-child(1){
                width:100%;
                height: 3.5rem;
                & > span:nth-child(2){
                width:2.5rem;
                }
            }
            & > div:nth-child(2){
                margin-bottom: 5%;
                & > ul{
                    & > li{
                        margin-bottom: 2rem;
                        & > span:nth-child(1){
                            margin-left:5%;
                            width:90%;
                            display: block;
                            margin-top: 1%;
                            color:#000000;
                            font-size: 1.2rem;
                        }
                        & > span:nth-child(2){
                            margin-left:5%;
                            width:90%;
                            display: block;
                            margin-top: 1%;
                            margin-bottom:2%;
                            color:#538dd3;
                        }
                        & > span:nth-child(3){
                            margin-left:5%;
                            width:90%;
                            color:#444444;

                        }
                        & > span:nth-child(4){

                            width:90%;
                            color:#444444;
                        }
                    }
                }
            }
        }

        & > div:nth-child(5){
            margin-top:2%;
            background-color:#fff;
            width:100%;
            height: auto;
            & > div:nth-child(1){
                    width:100%;
                    height: 3.5rem;
                & > span:nth-child(2){
                    width: 7.5rem;;
                }
            }

        & > div:nth-child(2){
                & > p{
                    margin-right: 5%;
                    margin-top: 1%;
                    color:#444444;
                }
            }
        }

    }
    .two-title{
        & > span:nth-child(1){
            margin-left: 5%;
            width: 0.5rem;
            height: 2rem;
            margin-top: 2%;
            background-image:url(./../assets/perscript/PrescriptionNotes-title.png);
            background-size:100% 100%;
            float:left;
        }
        & > span:nth-child(2){
            margin-left: 2%;
            height: 2rem;
            margin-top: 2%;
            background-image:url(./../assets/perscript/PrescriptionNotes-title.png);
            background-size:100% 100%;
            float:left;
            text-align:center;
            color:#fff;
            line-height:2rem;
            font-size:1.2rem;
        }
    }

    .PrescriptionNotes-three{
        margin-top: 1%;
        width: 100%;
        background-color: #fff;
        margin-bottom: 1%;
        margin-right: 1%;
        & > div:nth-child(1){
            margin-left:5%;
            width:45%;
            float:left;
            & > div:nth-child(1){
                width:30%;
                float:left;
                color:#444444;
                height: 4rem;
                line-height: 4rem;
            }
            & > div:nth-child(2){
                width:70%;
                height:4rem;
                float:left;
                & > img{
                    width: 4rem;
                    height: 4rem;
                } 
            }
        }
        & > div:nth-child(2){
            margin-left:5%;
            width:45%;
            float:left;
            & > div:nth-child(1){
                width:30%;
                float:left;
                color:#444444;
                height: 4rem;
                line-height: 4rem;
            }
            & > div:nth-child(2){
                width:70%;
                height:4rem;
                float:left;
                & > img{
                    width: 4rem;
                    height: 4rem;
                } 
            }
        }
    }

    .PrescriptionNotes-four{
        background-color:#f7f7f8;
        height: 4rem;
        width:100%;
        position: relative;
        & > div{
            background-color: #4d76b2;
            width: 90%;
            margin: 0 auto;
            height: 3rem;
            border-radius: 6px;
            text-align: center;
            & > div:nth-child(1){
                height: 3rem;
                line-height: 3rem;
                text-align: center;
                font-size: 1.3rem;
                color: #fff;

                & > span:nth-child(2){
                color: #fff;
                }
            }
        }
    }

    .dividing-line{
        background-color:#f7f7f8;
        width:100%;
        height:0.5rem;

    }

</style>
 <script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      dase:"data:image/png;base64,",
      url_s:  this.$store.state.skyUrl,     /* 四凯测试 */
      notice:"",
      lists: {
        yuyue: {
          createDate: ""
        },
        medicines: {},
        recipe: {
          doctor: {}
        },
        order:{
            status:"",
        }
      }
    };
  },
  created() {
    this.getToken();    
    
  },
  methods: {
    getToken(){
        if(window.location.href.includes('?scene')){
            var href = window.location.href
            var del = href.substring(href.indexOf('?scene'),href.indexOf("#"))
            window.location.href = window.location.href.replace(del,'')
        }
        //当从微信其他方式进来的时候
        if(localStorage.getItem('openId') === undefined || localStorage.getItem("openId") === null){
            localStorage.setItem("openId", this.$route.query.openId)
        }
        //当从医院过来时，判断hospitialid
        if(this.$route.query.hospitalId !==undefined ){
            localStorage.setItem("hospitalId", this.$route.query.hospitalId)
            localStorage.setItem("hospitalCode", this.$route.query.hospitalId)
        }
        this.get(this.url_s+ "/messageService/getToken",{
            openId:  localStorage.getItem('openId')
        }).then(res=>{
            if(res.data.status === "1"){
                localStorage.setItem("AccessToken",res.data.token)
                this.query();
                this.yyClick();
            }else if(res.data.status === "0"){
                //Toast("")
            }
        })
    },
    yyClick() {
      let _this = this;
      var _url = location.href;
      if (location.hash.length) {
        _url = _url.substr(0, _url.indexOf(location.hash));
      }
      //_this.info.url = _url;
      this.get(
          this.$store.state.weChatUrl + "/weixinFHW/consultation/openWxJs",
          {
            url: _url,
            openId:  localStorage.getItem('openId')
          }
        )
        .then(function(response) {
          wx.config({
            debug: false, //调试阶段建议开启
            appId: response.data.appid, //APPID
            timestamp: response.data.timestamp, //上面main方法中拿到的时间戳timestamp
            nonceStr: response.data.noncestr, //上面main方法中拿到的随机数nonceStr
            signature: response.data.signature, //上面main方法中拿到的签名signature
            jsApiList: [
              //所有要调用的 API 都要加到这个列表中
              "chooseImage", //从本地的相册、图库选择图片
              "uploadImage",
              "chooseWXPay"
            ]
          });
        });
    },
    query() {
      let recipeId = ""
      // 在notice页面过来加 个参数，来判断是从哪个页面过来的
      if(this.$route.query.notice == undefined||this.$route.query.notice == null){
          this.notice = false
      }else{
          this.notice = true
      }
      //从消息界面过来，参数取值为relatedId, 从其他界面过来，参数取值为recipeId

      Indicator.open("加载中...");
        this.get( this.url_s+"/recipeController/findOneRecipe", {
                recipeId: this.$route.query.recipeId,
                openId:  localStorage.getItem('openId')
            })
            .then(res => {
                Indicator.close();
                this.lists = res.data;
            })
            .catch(err => {
                Indicator.close();
            });
    },
    back_to() {
        if( this.notice === true){
            this.$router.push("../notice");
        }else{
            this.$router.push({name:"prescription",query:this.$route.query});
        }
    },
    getNowFormatDate() {
        var date = new Date();
        var sign1 = "-";
        var sign2 = ":";
        var year = date.getFullYear() // 年
        var month = date.getMonth() + 1; // 月
        var day  = date.getDate(); // 日
        var hour = date.getHours(); // 时
        var minutes = date.getMinutes(); // 分
        var seconds = date.getSeconds() //秒
        // 给一位数数据前面加 “0”
        if (month >= 1 && month <= 9) {
        month = "0" + month;
        }
        if (day >= 0 && day <= 9) {
        day = "0" + day;
        }
        if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
        }
        if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
        }
        var currentdate = year + sign1 + month + sign1 + day + " " + hour + sign2 + minutes + sign2 + seconds 
        return currentdate;
    },
    pay(module,orderId,hospitalId,imgData,endDate) {
        let today = this.getNowFormatDate()
        if(today > endDate){
            return Toast("处方已过期...")
        }
        if(imgData == '' || imgData == undefined || imgData == null){
            Toast("医生还没签章，不能支付")
        }else{
            //window.location.href = window.location.href.replace(/perscript\/PrescriptionNotes/,"PrescriptionPay")
            localStorage.setItem("hospitalId",hospitalId)
            this.$router.push({name:"PrescriptionPay",query:{"recipeId":this.$route.query.recipeId}});
        }
    }
  }
};
</script>
