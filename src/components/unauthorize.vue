<template>
    <div class="index">
        <div> 
            <div>
                <span>
                    <img src="../assets/logo2.png" >
                </span>
                <span>
                    <strong>互联网医院开放平台</strong>
                </span>
            </div>
            <div>
                <span @click="enter()">
                    <a href="http://weixin.jkscw.com.cn/wxopen/wop/api/auth/goto_auth_url">
                    进入授权</a>                
                </span>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
*{
    margin: 0;
    padding: 0;
}
.index{
    & > div{
        width:420px;
        height: 130px;
        position: fixed;
        left: calc(~"50% - 210px");
        top: calc(~"30% - 65px");
        font-family: "方正";
        box-shadow: 0 5px 10px -1px #d9d9d9;
        & > div:first-child{
            width:90%;
            margin:14px auto 0;
            height:66px;
            font-size:0;
            line-height: 66px;
            & > span:first-child{
                display: inline-block;
                width:30%;   
                height:66px;
                & > img{
                    width:120px;
                    padding-left: 20px;
                }             
            }
            & > span:nth-child(2){
                width:70%;
                display: inline-block;
                vertical-align: top;
                font-family: "方正";
                font-size: 26px;
                letter-spacing: 2px;
                color: rgb(102,102,102);
            }
        }
        & > div:nth-child(2){
            width:90%;
            margin:20px auto 0;
            height:66px;
            font-size:0;
            text-align: right;
            & > span{
                color: rgb(38,180,230);
                border-bottom: 1px solid rgb(38,180,230);
                font-size: 14px;
                margin-right: 12px;
                cursor:pointer;
                & > a{
                    text-decoration:none;
                    color:rgb(38,180,230);
                }
            }
        }
    }
}

</style>
<script>
export default {   
    data(){
        return{

        }
    },
    methods:{
        enter(){
            
            this.axios.get("http://weixin.jkscw.com.cn/wxopen/wop/api/auth/goto_auth_url",{
                params:{
                    hospitalCode:this.$route.query.hospitalCode
                }}
            )
             .then(res=>{
                 //console.log(55555555)
             })
        }
    }
}
</script>