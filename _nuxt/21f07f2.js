(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{468:function(e,t,r){"use strict";r.r(t);var o=r(290),n=r(508),c={props:{text:String,showModal:{type:Boolean,required:!0,default:!1}},data:function(){return{snackbar:this.showModal}},methods:{hideModal:function(){this.snackbar=!1}}},l=r(74),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t(n.a,{scopedSlots:e._u([{key:"action",fn:function(r){var n=r.attrs;return[t(o.a,e._b({attrs:{color:"pink",text:""},on:{click:e.hideModal}},"v-btn",n,!1),[e._v(" close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n  "+e._s(e.text)+"\n  ")])}),[],!1,null,null,null);t.default=component.exports},517:function(e,t,r){"use strict";r.r(t);var o=r(451),n=r(290),c=r(485),l=r(464),m=r(514),d=r(519),f=r(513),h=r(456),v=r(518),k=(r(30),r(12),r(9),r(11),r(3),r(14),r(10),r(15),r(2)),x=r(83);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(k.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{SnackBar:r(468).default},head:{title:"Welcome"},layout:"empty",data:function(){return{showModal:!1,text:"",valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=14||"Name must be less than 14 characters"}],room:"",roomRules:[function(e){return!!e||"Enter chat room"}],checkbox:!1}},mounted:function(){var e=this.$route.query.message;"noUser"===e?this.text="Enter name":"leftChat"===e&&(this.text="You left chat room"),this.showModal=!!this.text},methods:O(O({},Object(x.b)(["setUser","newMessage","updateUsers"])),{},{submit:function(){var e=this;if(this.$refs.form.validate()){var t={name:this.name,room:this.room};this.$socket.emit("joinRoom",t,(function(data){"string"==typeof data?console.error(data):(t.id=data.userId,e.setUser(t),e.$router.push("/chat"))})),this.$socket.on("newMessage",(function(data){e.newMessage(data)})),this.$socket.on("updateUsers",(function(data){e.updateUsers(data)}))}}})},j=r(74),component=Object(j.a)(y,(function(){var e=this,t=e._self._c;return t(o.a,[t(h.a,[t(d.a,[t(c.a,{staticClass:"mx-auto",attrs:{"max-width":"600",outlined:""}},[t("snack-bar",{attrs:{showModal:e.showModal,text:e.text}}),e._v(" "),t(l.b,[t("h2",[e._v("Nuxt chat 1.0 beta")])]),e._v(" "),t(l.a,[t(f.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(v.a,{attrs:{counter:14,rules:e.nameRules,label:"Your name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),t(v.a,{attrs:{rules:e.roomRules,label:"Enter room",required:""},model:{value:e.room,callback:function(t){e.room=t},expression:"room"}}),e._v(" "),t(m.a,{attrs:{label:"Generate random room"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),e._v(" "),t(n.a,{staticClass:"mr-4 mb-3",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.submit}},[e._v("\n              Enter\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnackBar:r(468).default})}}]);