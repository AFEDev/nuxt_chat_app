(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(t,e,r){"use strict";var n=r(283),o=r(287),c=Object(o.a)("http://localhost:3000");e.a=function(t,e){Object(n.a)(t),e("socket",c)}},257:function(t,e,r){var content=r(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("4d6a2e0f",content,!0,{sourceMap:!1})},288:function(t,e,r){"use strict";var n=r(451),o=r(458),c=r(454),l=r(290),f=r(202),d=r(203),v=r(135),h=r(94),m=r(114),_=r(456),O=r(457),y=r(72),j=r(455),w=r(453),k=r(452),x=r(282),P=(r(30),r(12),r(9),r(11),r(3),r(14),r(10),r(15),r(2)),D=r(83);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(P.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var E={data:function(){return{drawer:!0}},computed:Object(D.c)(["user","users"]),methods:N(N({},Object(D.b)(["clearData","newMessage"])),{},{exit:function(){var t=this;this.$socket.emit("userLeft",this.user.id,(function(){t.$router.push("/?message=leftChat"),t.clearData()}))}})},$=r(74),component=Object($.a)(E,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{app:""}},[e(O.a,{attrs:{app:"","mobile-breakpoint":"700"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(y.a,{staticClass:"pa-1",attrs:{color:"blue-grey lighten-1"}},[e("div",[t._v(t._s(t.user.name))]),t._v(" "),e(k.a,{attrs:{inset:"",label:"Theme","persistent-hint":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1),t._v(" "),e(d.a,{attrs:{subheader:""}},[e(w.a,[t._v("Users list: ")]),t._v(" "),t._l(t.users,(function(u){return e(v.a,{key:u.id,on:{click:function(t){t.preventDefault()}}},[e(h.a,[e(h.b,{domProps:{textContent:t._s(u.name)}})],1),t._v(" "),e(m.a,[e(f.a,{attrs:{color:u.id===t.user.id?"primary":"grey"}},[t._v("\n            mdi-message-outline\n          ")])],1)],1)}))],2)],1),t._v(" "),e(o.a,{attrs:{app:""}},[e(c.a,{on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),e(x.a,[t._v(" Chat room: "+t._s(t.user.room))]),t._v(" "),e(j.a),t._v(" "),e(l.a,{on:{click:t.exit}},[e(f.a,[t._v("mdi-exit-to-app")])],1)],1),t._v(" "),e(_.a,{staticClass:"pt-0"},[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports},289:function(t,e,r){"use strict";var n=r(451),o=r(456),c=r(74),component=Object(c.a)({},(function(){var t=this._self._c;return t(n.a,{attrs:{app:"",dark:""}},[t(o.a,[t("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports},298:function(t,e,r){r(299),t.exports=r(300)},337:function(t,e,r){"use strict";r.r(e);r(12);e.default=function(t){var e=t.store,r=t.redirect;if(!Object.keys(e.state.user).length)return r("/?message=noUser")}},348:function(t,e,r){"use strict";r(257)},349:function(t,e,r){var n=r(17)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},420:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{user:{},messages:[],users:[]}},o={setUser:function(t,e){t.user=e},clearData:function(t){t.user={},t.messages=[],t.users=[]},newMessage:function(t,e){t.messages.push(e)},updateUsers:function(t,e){t.users=e}}},84:function(t,e,r){"use strict";var n=r(451),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(348),r(74)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[298,10,3,11]]]);