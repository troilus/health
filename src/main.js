// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import Calendar from 'vue2-datepick'
import { get } from './utils/api.js'
import { postRequest } from './utils/api.js'
import { deleteRequest } from './utils/api.js'
import { putRequest } from './utils/api.js'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui';

Vue.prototype.axios = axios
Vue.prototype.get = get;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Calendar);
Vue.use(Mint);

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem("userid") != null && localStorage.getItem("userequal")=="true") { // 通过vuex state获取当前的token是否存在
      next();
    }else if (localStorage.getItem("AccessToken") !== undefined && localStorage.getItem("AccessToken") !== null){
      next();
    }else{
      next({
        path: './',
        //query: { redirect: "./" } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else {
    next();
  }
  //对不是微信浏览器做处理
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      //console.log("微信浏览器");
  } else {
    //console.log("不是微信浏览器");
    if (to.path == '/unauthorize' || to.path == '/authorize'){
      next()
    }else{
      //location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx09452bae3045ad46&redirect_uri=http://weixintest.jkscw.com.cn/sk-h-inquiry/weixinFHW/consultation/consultationInfo?hospital_code=4b33a965e6d046bba5b49841bbc023e6&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect"
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
