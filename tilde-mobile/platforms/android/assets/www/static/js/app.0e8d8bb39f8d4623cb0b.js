webpackJsonp([1],{0:function(A,t,e){e(18);var n=e(1)(e(10),e(815),null,null);A.exports=n.exports},10:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(2),a={};t.default={name:"icon",props:{name:{type:String,validator:function(A){return A?A in a||(n.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+A+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(A){return"horizontal"===A||"vertical"===A}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var A=this.scale;return A=void 0===A?1:Number(A),isNaN(A)||A<=0?(n.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):A*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var A=this.icon,t=A.width,e=A.height;return Math.max(t,e)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var A=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=A.normalizedScale});var t=0,e=0;this.$children.forEach(function(A){t=Math.max(t,A.width),e=Math.max(e,A.height)}),this.childrenWidth=t,this.childrenHeight=e,this.$children.forEach(function(A){A.x=(t-A.width)/2,A.y=(e-A.height)/2})}},register:function(A){for(var t in A){var e=A[t];e.paths||(e.paths=[]),e.d&&e.paths.push({d:e.d}),e.polygons||(e.polygons=[]),e.points&&e.polygons.push({points:e.points}),a[t]=e}},icons:a}},11:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(0),a=e.n(n);t.default={components:{Icon:a.a}}},12:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},13:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},14:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},15:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},16:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},17:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(2),a=e(7),r=(e.n(a),e(6)),i=e.n(r),s=e(5),l=(e.n(s),e(4)),o=(e.n(l),e(3)),c=e(9),f=e.n(c);e(8);n.a.use(i.a),new n.a({el:"#app",template:"<app/>",framework7:{root:"#app",routes:o.a},components:{app:f.a}})},18:function(A,t){},19:function(A,t){},20:function(A,t){A.exports="data:image/png;base64,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"},3:function(A,t,e){"use strict";t.a=[{path:"/about/",component:e(807)},{path:"habits/",component:e(809)},{path:"goals/",component:e(808)},{path:"skills",component:e(811)},{path:"journal",component:e(810)},{}]},4:function(A,t){},5:function(A,t){},807:function(A,t,e){var n=e(1)(e(12),e(814),null,null);A.exports=n.exports},808:function(A,t,e){var n=e(1)(e(13),e(818),null,null);A.exports=n.exports},809:function(A,t,e){var n=e(1)(e(14),e(817),null,null);A.exports=n.exports},810:function(A,t,e){var n=e(1)(e(15),e(812),null,null);A.exports=n.exports},811:function(A,t,e){var n=e(1)(e(16),e(813),null,null);A.exports=n.exports},812:function(A,t){A.exports={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"Journal","back-link":"Back",sliding:""}}),A._v(" "),e("f7-block",{attrs:{inner:""}},[e("p",[A._v("Journal")]),A._v(" "),e("p",[A._v("You can go "),e("f7-link",{attrs:{back:""}},[A._v("back")]),A._v(".")],1),A._v(" "),e("p",[A._v("A first paragraph of text.")]),A._v(" "),e("p",[A._v("A second paragraph of text.")])])],1)},staticRenderFns:[]}},813:function(A,t){A.exports={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"Skills","back-link":"Back",sliding:""}}),A._v(" "),e("f7-block",{attrs:{inner:""}},[e("p",[A._v("Skills")]),A._v(" "),e("p",[A._v("You can go "),e("f7-link",{attrs:{back:""}},[A._v("back")]),A._v(".")],1),A._v(" "),e("p",[A._v("A first paragraph of text.")]),A._v(" "),e("p",[A._v("A second paragraph of text.")])])],1)},staticRenderFns:[]}},814:function(A,t){A.exports={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"About","back-link":"Back",sliding:""}}),A._v(" "),e("f7-block",{attrs:{inner:""}},[e("p",[A._v("Here is the About page!")]),A._v(" "),e("p",[A._v("You can go "),e("f7-link",{attrs:{back:""}},[A._v("back")]),A._v(".")],1),A._v(" "),e("p",[A._v("A first paragraph of text.")]),A._v(" "),e("p",[A._v("A second paragraph of text.")])])],1)},staticRenderFns:[]}},815:function(A,t){A.exports={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("svg",{class:A.clazz,style:A.style,attrs:{version:"1.1",role:A.label?"img":"presentation","aria-label":A.label,x:A.x,y:A.y,width:A.width,height:A.height,viewBox:A.box}},[A._t("default",[A.icon&&A.icon.paths?A._l(A.icon.paths,function(t){return e("path",A._b({},"path",t))}):A._e(),A._v(" "),A.icon&&A.icon.polygons?A._l(A.icon.polygons,function(t){return e("polygon",A._b({},"polygon",t))}):A._e(),A._v("\b\n    "),A.icon&&A.icon.raw?[e("g",{domProps:{innerHTML:A._s(A.icon.raw)}})]:A._e()])],2)},staticRenderFns:[]}},816:function(A,t,e){A.exports={render:function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{attrs:{id:"app"}},[n("f7-statusbar"),A._v(" "),n("f7-panel",{attrs:{left:"",reveal:"",layout:"dark"}},[n("f7-view",{attrs:{id:"left-panel-view","navbar-through":"","dynamic-navbar":!0}},[n("f7-navbar",{attrs:{title:"Left Panel"}}),A._v(" "),n("f7-pages",[n("f7-page",[n("f7-block",{attrs:{inner:""}},[n("p",[A._v("Left panel content goes here")])]),A._v(" "),n("f7-block-title",[A._v("Load page in panel")]),A._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/about/",title:"About"}}),A._v(" "),n("f7-list-item",{attrs:{link:"/form/",title:"Form"}})],1),A._v(" "),n("f7-block-title",[A._v("Load page in main view")]),A._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/about/",title:"About","link-view":"#main-view","link-close-panel":""}}),A._v(" "),n("f7-list-item",{attrs:{link:"/form/",title:"Form","link-view":"#main-view","link-close-panel":""}})],1)],1)],1)],1)],1),A._v(" "),n("f7-panel",{attrs:{right:"",cover:"",layout:"dark"}},[n("f7-view",{attrs:{id:"right-panel-view","navbar-through":"","dynamic-navbar":!0}},[n("f7-navbar",{attrs:{title:"Right Panel",sliding:""}}),A._v(" "),n("f7-pages",[n("f7-page",[n("f7-block",[n("p",[A._v("Right panel content goes here")])]),A._v(" "),n("f7-block-title",[A._v("Load page in panel")]),A._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/about/",title:"About"}}),A._v(" "),n("f7-list-item",{attrs:{link:"/form/",title:"Form"}})],1),A._v(" "),n("f7-block-title",[A._v("Load page in main view")]),A._v(" "),n("f7-list",[n("f7-list-item",{attrs:{link:"/about/",title:"About","link-view":"#main-view","link-close-panel":""}}),A._v(" "),n("f7-list-item",{attrs:{link:"/form/",title:"Form","link-view":"#main-view","link-close-panel":""}})],1)],1)],1)],1)],1),A._v(" "),n("f7-views",[n("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[n("f7-navbar",[n("f7-nav-left",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"left"}})],1),A._v(" "),n("f7-nav-center",{attrs:{sliding:""}},[A._v("T.I.L.D.E.")]),A._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{icon:"icon-bars","open-panel":"right"}})],1)],1),A._v(" "),n("f7-pages",[n("f7-page",[n("f7-block-title",[n("h3",{staticStyle:{"text-align":"center"}},[n("em",[A._v("T")]),A._v("hings "),n("em",[A._v("I")]),A._v("'d "),n("em",[A._v("L")]),A._v("ike "),n("em",[A._v("D")]),A._v("one "),n("br"),n("img",{staticStyle:{height:"40px",width:"40px"},attrs:{src:e(20)}}),n("br"),n("em",[A._v("E")]),A._v("ventually")])]),A._v(" "),n("f7-block",[n("f7-grid",[n("f7-col",{attrs:{width:"50"}},[n("div",{staticClass:"nav-card",staticStyle:{"text-align":"center"}},[n("f7-card",{},[n("f7-card-header",[A._v("Habits")]),A._v(" "),n("f7-card-content",{attrs:{link:"/habits/"}},[n("icon",{attrs:{name:"bath",scale:"7"}})],1),A._v(" "),n("f7-card-footer",[A._v("last update: ")])],1)],1)]),A._v(" "),n("f7-col",{attrs:{width:"50"}},[n("div",{staticClass:"nav-card",staticStyle:{"text-align":"center"}},[n("f7-card",[n("f7-card-header",[A._v("Goals")]),A._v(" "),n("f7-card-content",{attrs:{link:"/goals/"}},[n("icon",{attrs:{name:"bullseye",scale:"7"}})],1),A._v(" "),n("f7-card-footer",[A._v("last update: ")])],1)],1)])],1)],1),A._v(" "),n("f7-block",[n("f7-grid",[n("f7-col",{attrs:{width:"50"}},[n("div",{staticClass:"nav-card",staticStyle:{"text-align":"center"}},[n("f7-card",[n("f7-card-header",[A._v("Skills")]),A._v(" "),n("f7-card-content",{attrs:{link:"/skills/"}},[n("icon",{attrs:{name:"superpowers",scale:"7"}})],1),A._v(" "),n("f7-card-footer",[A._v("last update: ")])],1)],1)]),A._v(" "),n("f7-col",{attrs:{width:"50"}},[n("div",{staticClass:"nav-card",staticStyle:{"text-align":"center"}},[n("f7-card",[n("f7-card-header",[A._v("Journal")]),A._v(" "),n("f7-card-content",{attrs:{link:"/journal/"}},[n("icon",{attrs:{name:"pencil",scale:"7"}})],1),A._v(" "),n("f7-card-footer",[A._v("last update: ")])],1)],1)])],1)],1)],1)],1)],1)],1),A._v(" "),n("f7-popup",{attrs:{id:"popup"}},[n("f7-view",{attrs:{"navbar-fixed":""}},[n("f7-pages",[n("f7-page",[n("f7-navbar",{attrs:{title:"Popup"}},[n("f7-nav-right",[n("f7-link",{attrs:{"close-popup":""}},[A._v("Close")])],1)],1),A._v(" "),n("f7-block",[A._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.")])],1)],1)],1)],1),A._v(" "),n("f7-login-screen",{attrs:{id:"login-screen"}},[n("f7-view",[n("f7-pages",[n("f7-page",{attrs:{"login-screen":""}},[n("f7-login-screen-title",[A._v("Login")]),A._v(" "),n("f7-list",{attrs:{form:""}},[n("f7-list-item",[n("f7-label",[A._v("Username")]),A._v(" "),n("f7-input",{attrs:{name:"username",placeholder:"Username",type:"text"}})],1),A._v(" "),n("f7-list-item",[n("f7-label",[A._v("Password")]),A._v(" "),n("f7-input",{attrs:{name:"password",type:"password",placeholder:"Password"}})],1)],1),A._v(" "),n("f7-list",[n("f7-list-button",{attrs:{title:"Sign In","close-login-screen":""}}),A._v(" "),n("f7-list-label",[n("p",[A._v("Click Sign In to close Login Screen")])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},817:function(A,t){A.exports={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"Habits","back-link":"Back",sliding:""}}),A._v(" "),e("f7-block",{attrs:{inner:""}},[e("p",[A._v("Habits")]),A._v(" "),e("p",[A._v("You can go "),e("f7-link",{attrs:{back:""}},[A._v("back")]),A._v(".")],1),A._v(" "),e("p",[A._v("A first paragraph of text.")]),A._v(" "),e("p",[A._v("A second paragraph of text.")])])],1)},staticRenderFns:[]}},818:function(A,t){A.exports={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("f7-page",[e("f7-navbar",{attrs:{title:"Goals","back-link":"Back",sliding:""}}),A._v(" "),e("f7-block",{attrs:{inner:""}},[e("p",[A._v("Goals")]),A._v(" "),e("p",[A._v("You can go "),e("f7-link",{attrs:{back:""}},[A._v("back")]),A._v(".")],1),A._v(" "),e("p",[A._v("A first paragraph of text.")]),A._v(" "),e("p",[A._v("A second paragraph of text.")])])],1)},staticRenderFns:[]}},9:function(A,t,e){e(19);var n=e(1)(e(11),e(816),null,null);A.exports=n.exports}},[17]);
//# sourceMappingURL=app.0e8d8bb39f8d4623cb0b.js.map