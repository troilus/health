<template>
    <div class="index">
        <div>
            <div>
                <img src="../assets/authorize.png">
            </div>
            <div>
                <strong>授权成功</strong>
            </div>
            <div>
                已授权权限:
            </div>
            <ul>
                <li>纤细管理权限</li>
                <li>网页服务权限</li>
            </ul>
        </div>
    </div>
</template>
<style scoped lang="less">
.index{
    & > div:first-child{
        width:200px;
        height: 400px;
        position: fixed;
        left: calc(~"50% - 100px");
        top: calc(~"50% - 260px");
        font-family: "汉仪旗黑";
        text-align: center;
        & > div:first-child{
            font-size: 24px;
            color: rgb(98,98,98);
        }
        & > div:nth-child(2){
            font-size:22px;
            color: rgb(98,98,98);
            border-bottom: 1px solid #ccc;
            padding-bottom: 25px;
            font-weight: bolder;
        }
        & > div:nth-child(3){
            font-size: 14px;
            margin-top: 20px;
            color: #ccc;
        }
        & > ul{
            width: 88px;
            margin: 16px auto 0;
            text-align: center;
            & > li{
                font-size: 14px;
                min-width: 88px;
                text-align: center;
                line-height:20px;
                color: #909399;
                font-weight: bolder;
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
    created(){
        //console.log(window.navigator)
    },
    methods:{

    }
}
</script>