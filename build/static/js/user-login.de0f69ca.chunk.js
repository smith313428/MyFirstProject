(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[11],{115:function(e,a,t){"use strict";var s=t(5),n=t.n(s),r=t(14),o=t(73);a.a={baseApi:(e,a,t,s="COVID",l)=>Object(r.a)(n.a.mark((function r(){var i,c,m,u,p;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=localStorage["auth-token"],n.prev=1,c={method:a,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:i?"Bearer "+i:null}},"POST"!=a&&"PUT"!=a||(c.body=JSON.stringify(t)),m="AUTH"==s?o.a.AUTH_API_URL:o.a.COVID_API_URL,n.next=7,fetch(m+e,c);case 7:return u=n.sent,n.next=10,u.json();case 10:p=n.sent,u.status>=200&&u.status<300?l&&l(null,p):l&&l(p,null),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),l&&l(n.t0,null);case 17:case"end":return n.stop()}}),r,null,[[1,14]])})))(),init(e){var a=this;return Object(r.a)(n.a.mark((function t(){var s,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=localStorage.email,(r=localStorage.password)?a.login(s,r,(a,t)=>{e(a,t)}):e(null);case 3:case"end":return t.stop()}}),t)})))()},login(e,a,t){this.baseApi("/login","POST",{email:e,password:a},"AUTH",(e,a)=>{null==e&&console.log("Login success!"),t(e,a)})},getIssuers(e,a,t){this.baseApi("/admin/issuers/?page=".concat(e,"&size=").concat(a),"GET",{},"COVID",t)},enRollIssuer(e,a){this.baseApi("/admin/issuers/".concat(e,"/enroll"),"PUT",{},"COVID",a)},revokeIssuer(e,a){this.baseApi("/admin/issuers/".concat(e,"/revoke"),"PUT",{},"COVID",a)},getPrefunds(e,a,t){this.baseApi("/admin/prefunds?page=".concat(e,"&size=").concat(a),"GET",{},"",t)}}},327:function(e,a,t){"use strict";t.r(a);var s=t(5),n=t.n(s),r=t(14),o=t(1),l=t.n(o),i=t(113),c=t(114),m=t(128),u=t(255),p=t(142),d=t(108),h=t(20),g=t(70),b=t(300),f=t(4),v=t(59),E=t(60),w=t(115);class N extends o.Component{constructor(e){var a;super(e),a=this,this.onUserLogin=e=>{w.a.login(e.email,e.password,function(){var t=Object(r.a)(n.a.mark((function t(s,r){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s||(console.log("user data --\x3e",r),a.props.loginUser(e,a.props.history),localStorage["auth-token"]=r.data);case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}())},this.validateEmail=e=>{var a;return e||(a="Please enter your email address"),a},this.validatePassword=e=>{var a;return e?e.length<4&&(a="Value must be longer than 2 characters"):a="Please enter your name",a},this.state={email:"",password:"",wrongCredential:!1}}componentDidUpdate(){this.props.error&&g.a.warning(this.props.error,"Login Error",3e3,null,null,"")}render(){var e=this.state,a=e.password,t=e.email,s=e.wrongCredential,n={email:t,password:a};return l.a.createElement(i.a,{className:"h-100"},l.a.createElement(v.a,{xxs:"12",md:"5",className:"mx-auto my-auto"},l.a.createElement(c.a,{className:"auth-card"},l.a.createElement("div",{className:"form-side"},l.a.createElement(m.a,{className:"mb-4"},l.a.createElement(E.a,{id:"user.login-title"})),l.a.createElement(b.c,{initialValues:n,onSubmit:this.onUserLogin},({errors:e,touched:a})=>l.a.createElement(b.b,{className:"av-tooltip tooltip-label-bottom"},l.a.createElement(u.a,{className:"form-group has-float-label"},l.a.createElement(p.a,null,l.a.createElement(E.a,{id:"user.email"})),l.a.createElement(b.a,{className:"form-control",name:"email",validate:this.validateEmail}),e.email&&a.email&&l.a.createElement("div",{className:"invalid-feedback d-block"},e.email)),l.a.createElement(u.a,{className:"form-group has-float-label"},l.a.createElement(p.a,null,l.a.createElement(E.a,{id:"user.password"})),l.a.createElement(b.a,{className:"form-control",type:"password",name:"password",validate:this.validatePassword}),e.password&&a.password&&l.a.createElement("div",{className:"invalid-feedback d-block"},e.password)),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement(d.a,{color:"primary",className:"btn-shadow btn-multiple-state ".concat(this.props.loading?"show-spinner":""),size:"lg"},l.a.createElement("span",{className:"spinner d-inline-block"},l.a.createElement("span",{className:"bounce1"}),l.a.createElement("span",{className:"bounce2"}),l.a.createElement("span",{className:"bounce3"})),l.a.createElement("span",{className:"label"},l.a.createElement(E.a,{id:"user.login-button"})))),s&&l.a.createElement("div",{style:{color:"red",marginTop:15}},"Wrong email or password")))))))}}a.default=Object(h.b)(({authUser:e})=>({user:e.user,loading:e.loading,error:e.error}),{loginUser:f.s})(N)},59:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return l}));var s=t(1),n=t.n(s),r=t(112),o=e=>n.a.createElement(r.a,Object.assign({},e,{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),l=e=>n.a.createElement("div",{className:"separator ".concat(e.className)})},60:function(e,a,t){"use strict";var s=t(1),n=t.n(s),r=t(91);a.a=Object(r.d)(e=>n.a.createElement(r.a,e),{withRef:!1})},70:function(e,a,t){"use strict";var s=t(85),n=(t(81),t(82));t.d(a,"a",(function(){return n.a}));s.a},73:function(e,a,t){"use strict";a.a=new class{constructor(){this.config={},this.configReady=!1,this.COVID_API_URL="https://api.testenv.sharetoken.io/covid",this.AUTH_API_URL="https://api.testenv.sharetoken.io/auth",this.BACKEND_API_URL="https://api.testenv.sharetoken.io"}}}}]);
//# sourceMappingURL=user-login.de0f69ca.chunk.js.map