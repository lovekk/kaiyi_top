(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ecd9fb16"],{"46d6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"container",staticClass:"my-order"},[a("div",{staticClass:"header bg-color-red"},[a("div",{staticClass:"picTxt acea-row row-between-wrapper"},[a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v("订单信息")]),a("div",[t._v("\n          累计订单："+t._s(t.orderData.order_count||0)+" 总消费：￥"+t._s(t.orderData.sum_price||0)+"\n        ")])]),t._m(0)])]),a("div",{staticClass:"nav acea-row row-around"},[a("div",{staticClass:"item",class:{on:0===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/0"})}}},[a("div",[t._v("待付款")]),a("div",{staticClass:"num"},[t._v(t._s(t.orderData.unpaid_count||0))])]),a("div",{staticClass:"item",class:{on:1===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/1"})}}},[a("div",[t._v("待发货")]),a("div",{staticClass:"num"},[t._v(t._s(t.orderData.unshipped_count||0))])]),a("div",{staticClass:"item",class:{on:2===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/2"})}}},[a("div",[t._v("待收货")]),a("div",{staticClass:"num"},[t._v(t._s(t.orderData.received_count||0))])]),a("div",{staticClass:"item",class:{on:3===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/3"})}}},[a("div",[t._v("待评价")]),a("div",{staticClass:"num"},[t._v(t._s(t.orderData.evaluated_count||0))])]),a("div",{staticClass:"item",class:{on:4===t.type},on:{click:function(e){return t.$router.replace({path:"/order/list/4"})}}},[a("div",[t._v("已完成")]),a("div",{staticClass:"num"},[t._v(t._s(t.orderData.complete_count||0))])])]),a("div",{staticClass:"list"},t._l(t.orderList,function(e){return a("div",{key:e.id,staticClass:"item"},[a("div",{staticClass:"title acea-row row-between-wrapper"},[a("div",{staticClass:"acea-row row-middle"},[e.combination_id>0?a("span",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("拼团")]):t._e(),e.seckill_id>0?a("span",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("秒杀")]):t._e(),e.bargain_id>0?a("span",{staticClass:"sign cart-color acea-row row-center-wrapper"},[t._v("砍价")]):t._e(),t._v("\n          "+t._s(e._add_time)+"\n        ")]),a("div",{staticClass:"font-color-red"},[t._v(t._s(e._status._title))])]),a("div",{on:{click:function(a){return t.$router.push({path:"/order/detail/"+e.order_id})}}},t._l(e.cartInfo,function(e){return a("div",{key:e.id,staticClass:"item-info acea-row row-between row-top"},[a("div",{staticClass:"pictrue"},[0===e.combination_id&&0===e.bargain_id&&0===e.seckill_id?a("img",{attrs:{src:e.productInfo.image},on:{click:function(a){return a.stopPropagation(),t.$router.push({path:"/detail/"+e.productInfo.id})}}}):e.combination_id>0?a("img",{attrs:{src:e.productInfo.image},on:{click:function(a){return a.stopPropagation(),t.$router.push({path:"/activity/group_detail/"+e.combination_id})}}}):e.bargain_id>0?a("img",{attrs:{src:e.productInfo.image},on:{click:function(a){return a.stopPropagation(),t.$router.push({path:"/activity/dargain_detail/"+e.bargain_id})}}}):e.seckill_id>0?a("img",{attrs:{src:e.productInfo.image},on:{click:function(a){return a.stopPropagation(),t.$router.push({path:"/activity/seckill_detail/"+e.seckill_id})}}}):t._e()]),a("div",{staticClass:"text acea-row row-between"},[a("div",{staticClass:"name line2"},[t._v("\n              "+t._s(e.productInfo.store_name)+"\n            ")]),a("div",{staticClass:"money"},[a("div",[t._v("\n                ￥"+t._s(e.productInfo.attrInfo?e.productInfo.attrInfo.price:e.productInfo.price)+"\n              ")]),a("div",[t._v("x"+t._s(e.cart_num))])])])])}),0),a("div",{staticClass:"totalPrice"},[t._v("\n        共"+t._s(e.cartInfo.length||0)+"件商品，总金额\n        "),a("span",{staticClass:"money font-color-red"},[t._v("￥"+t._s(e.pay_price))])]),a("div",{staticClass:"bottom acea-row row-right row-middle"},[0===e._status._type||9==e._status._type?[a("div",{staticClass:"bnt cancelBnt",on:{click:function(a){return t.cancelOrder(e)}}},[t._v("\n            取消订单\n          ")])]:t._e(),0===e._status._type?[a("div",{staticClass:"bnt bg-color-red",on:{click:function(a){return t.paymentTap(e)}}},[t._v("\n            立即付款\n          ")])]:t._e(),1===e._status._type||9===e._status._type?[a("div",{staticClass:"bnt bg-color-red",on:{click:function(a){return t.$router.push({path:"/order/detail/"+e.order_id})}}},[t._v("\n            查看详情\n          ")])]:t._e(),2===e._status._type?["express"===e.delivery_type?a("div",{staticClass:"bnt default",on:{click:function(a){return t.$router.push({path:"/order/logistics/"+e.order_id})}}},[t._v("\n            查看物流\n          ")]):t._e(),a("div",{staticClass:"bnt bg-color-red",on:{click:function(a){return t.takeOrder(e)}}},[t._v("\n            确认收货\n          ")])]:t._e(),3===e._status._type?["express"===e.delivery_type?a("div",{staticClass:"bnt default",on:{click:function(a){return t.$router.push({path:"/order/logistics/"+e.order_id})}}},[t._v("\n            查看物流\n          ")]):t._e(),a("div",{staticClass:"bnt bg-color-red",on:{click:function(a){return t.$router.push({path:"/order/detail/"+e.order_id})}}},[t._v("\n            去评价\n          ")])]:t._e(),4===e._status._type?[a("div",{staticClass:"bnt bg-color-red",on:{click:function(a){return t.$router.push({path:"/order/detail/"+e.order_id})}}},[t._v("\n            查看订单\n          ")])]:t._e()],2)])}),0),0===t.orderList.length&&t.page>1?a("div",{staticClass:"noCart"},[t._m(1)]):t._e(),a("Loading",{attrs:{loaded:t.loaded,loading:t.loading}}),a("Payment",{attrs:{types:t.payType,balance:t.userInfo.now_money},on:{checked:t.toPay},model:{value:t.pay,callback:function(e){t.pay=e},expression:"pay"}}),a("GeneralWindow",{attrs:{generalActive:t.generalActive,generalContent:t.generalContent},on:{closeGeneralWindow:t.closeGeneralWindow}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:a("ab32")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:a("530f")}})])}],r=(a("7f7f"),a("f8b7")),s=a("00fd"),o=a("3a5e"),c=a("92b7"),d=a("2f62"),l=a("ed08"),u=a("ea53"),p=["待付款","待发货","待收货","待评价","已完成","","","","","待付款"],_="MyOrder",v={name:_,data:function(){return{offlinePayStatus:2,orderData:{},type:parseInt(this.$route.params.type)||0,page:1,limit:20,loaded:!1,loading:!1,orderList:[],pay:!1,payType:["yue","weixin"],from:Object(l["d"])()?"weixin":"weixinh5",generalActive:!1,generalContent:{promoterNum:"",title:""}}},components:{Loading:o["a"],Payment:c["a"],GeneralWindow:u["a"]},computed:Object(d["b"])(["userInfo"]),watch:{$route:function(t){if(t.name===_){var e=parseInt(this.$route.params.type)||0;this.type!==e&&this.changeType(e),this.getOrderData()}}},methods:{setOfflinePayStatus:function(t){var e=this;e.offlinePayStatus=t,1===t&&e.payType.indexOf("offline")<0&&e.payType.push("offline")},getOrderData:function(){var t=this;Object(r["f"])().then(function(e){t.orderData=e.data})},takeOrder:function(t){var e=this;this.$dialog.loading.open("正在加载中"),Object(s["e"])(t.order_id).then(function(t){return"0.00"!=t.data.gain_integral&&"0.00"!=t.data.gain_coupon||t.data.gain_integral>0&&t.data.gain_coupon>0?(e.$dialog.loading.close(),e.generalActive=!0,void(e.generalContent={promoterNum:"恭喜您获得".concat(t.data.gain_coupon,"元优惠券以及").concat(t.data.gain_integral,"积分，购买商品时可抵现哦～"),title:"恭喜您获得优惠礼包"})):"0.00"!=t.data.gain_integral||t.data.gain_integral>0?(e.$dialog.loading.close(),e.generalActive=!0,void(e.generalContent={promoterNum:"恭喜您获得".concat(t.data.gain_integral,"积分，购买商品时可抵现哦～"),title:"赠送积分"})):"0.00"!=t.data.gain_coupon||t.data.gain_coupon>0?(e.$dialog.loading.close(),e.generalActive=!0,void(e.generalContent={promoterNum:"恭喜您获得".concat(t.data.gain_coupon,"元优惠券，购买商品时可抵现哦～"),title:"恭喜您获得优惠券"})):(e.$dialog.loading.close(),e.$dialog.success("收货成功"),e.getOrderData(),e.orderList=[],e.page=1,e.loaded=!1,e.loading=!1,void e.getOrderList())}).catch(function(t){e.$dialog.loading.close(),e.$dialog.error(t.msg)})},closeGeneralWindow:function(t){this.generalActive=t,this.reload(),this.getOrderData()},reload:function(){this.changeType(this.type)},changeType:function(t){this.type=t,this.orderList=[],this.page=1,this.loaded=!1,this.loading=!1,this.getOrderList()},getOrderList:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e=this.page,a=this.limit,i=this.type;Object(r["g"])({page:e,limit:a,type:i}).then(function(e){t.orderList=t.orderList.concat(e.data),t.page++,t.loaded=e.data.length<t.limit,t.loading=!1})}},getStatus:function(t){return p[t._status._type]},cancelOrder:function(t){var e=this;Object(s["a"])(t.order_id).then(function(){e.getOrderData(),e.orderList.splice(e.orderList.indexOf(t),1)}).catch(function(){e.reload()})},paymentTap:function(t){var e=this,a=this;t.combination_id>0||t.bargain_id>0||t.seckill_id>0||a.setOfflinePayStatus(t.offlinePayStatus),this.pay=!0,this.toPay=function(i){Object(s["d"])(t.order_id,i,a.from).then(function(){var t=parseInt(e.$route.params.type)||0;a.changeType(t),a.getOrderData()}).catch(function(e){if("WECHAT_H5_PAY"===e.status)return a.$router.push({path:"/order/status/"+t.order_id+"/5"});var i=parseInt(a.$route.params.type)||0;a.changeType(i),a.getOrderData()})}},toPay:function(){}},mounted:function(){var t=this;this.getOrderData(),this.getOrderList(),this.$scroll(this.$refs.container,function(){!t.loading&&t.getOrderList()})}},f=v,g=(a("d0dd"),a("2877")),h=Object(g["a"])(f,i,n,!1,null,"b73492ac",null);e["default"]=h.exports},"530f":function(t,e,a){t.exports=a.p+"h5/img/noOrder.90017ce2.png"},"680d":function(t,e,a){"use strict";var i=a("b96f"),n=a.n(i);n.a},"92b7":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"payment",class:!0===t.value?"on":""},[a("div",{staticClass:"title acea-row row-center-wrapper"},[t._v("\n      选择付款方式"),a("span",{staticClass:"iconfont icon-guanbi",on:{click:t.close}})]),-1!==t.types.indexOf("weixin")?a("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("weixin")}}},[t._m(0),a("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("alipay")?a("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("alipay")}}},[t._m(1),a("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("yue")?a("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("yue")}}},[a("div",{staticClass:"left acea-row row-between-wrapper"},[a("div",{staticClass:"iconfont icon-yuezhifu"}),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v("余额支付")]),a("div",{staticClass:"info"},[t._v("\n            当前可用余额："),a("span",{staticClass:"money"},[t._v(t._s(t.balance))])])])]),a("div",{staticClass:"iconfont icon-xiangyou"})]):t._e(),-1!==t.types.indexOf("offline")?a("div",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){return t.checked("offline")}}},[t._m(2),a("div",{staticClass:"iconfont icon-xiangyou"})]):t._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mask",on:{click:t.close}})])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left acea-row row-between-wrapper"},[a("div",{staticClass:"iconfont icon-weixinzhifu"}),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v("微信支付")]),a("div",{staticClass:"info"},[t._v("使用微信快捷支付")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left acea-row row-between-wrapper"},[a("div",{staticClass:"iconfont icon-zhifubao"}),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v("支付宝支付")]),a("div",{staticClass:"info"},[t._v("使用线上支付宝支付")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left acea-row row-between-wrapper"},[a("div",{staticClass:"iconfont icon-yuezhifu1"}),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[t._v("线下支付")]),a("div",{staticClass:"info"},[t._v("选择线下付款方式")])])])}],r=(a("c5f6"),{name:"Payment",props:{value:{type:Boolean,default:!1},balance:{type:[Number,String],default:0},types:{type:Array,default:function(){return["weixin","alipay","yue","offline"]}}},data:function(){return{}},mounted:function(){},methods:{checked:function(t){this.$emit("checked",t),this.close()},close:function(){this.$emit("input",!1)}}}),s=r,o=(a("680d"),a("2877")),c=Object(o["a"])(s,i,n,!1,null,"140ca59e",null);e["a"]=c.exports},ab32:function(t,e,a){t.exports=a.p+"h5/img/orderTime.e95f9090.png"},b96f:function(t,e,a){},c174:function(t,e,a){},d0dd:function(t,e,a){"use strict";var i=a("c174"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-ecd9fb16.20ca0b5e.js.map