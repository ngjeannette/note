(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{144:function(e,t,a){e.exports=a.p+"static/media/1.51b9e0bf.png"},147:function(e,t,a){e.exports=a(307)},152:function(e,t,a){},26:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),s=(a(152),a(20)),u=(a(26),a(308)),l=a(93),i=a(313),m=a(33),f=a(7),p=function(e){return{type:"UPDATE_CURRENT_PAGE",payload:e}},d=function(e){return{type:"UPDATE_SIDEBAR",payload:e}},h=function(e){return{type:"UPDATE_LOADING",payload:e}};var b=function(){var e=Object(f.c)((function(e){return e.loginReducer})),t=Object(f.b)();return Object(n.useEffect)((function(){}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"sign-action"},e&&Object.keys(e).length>0&&r.a.createElement(u.a,{shape:"square",size:30,style:{backgroundColor:"#87d068"},icon:r.a.createElement(i.a,null)}),r.a.createElement(l.a,null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://flaviocopes.com/sample-app-ideas/"},"Project 7")),r.a.createElement(l.a,null,r.a.createElement(m.b,{to:"/home"},"Home")),r.a.createElement(l.a,null,e&&Object.keys(e).length>0?r.a.createElement(m.b,{to:"/notes"},"Notes"):r.a.createElement(m.b,{to:"/notloggedin"},"Notes")),(!e||0==Object.keys(e).length)&&r.a.createElement(l.a,null,r.a.createElement(m.b,{to:"/login"},"Sign In")),r.a.createElement(l.a,null,r.a.createElement(m.b,{to:"/signup"},"Sign up")),e&&Object.keys(e).length>0&&r.a.createElement(l.a,{onClick:function(){return t({type:"UPDATE_LOGIN_EMPTY",payload:e});var e}},r.a.createElement(m.b,{to:"/home"},"Sign out")))))},v=a(2),g=a.n(v),E=a(8),O=a(312),j=a(310),w=a(311),x=a(19),y=a.n(x),k=function(e){return y.a.post("http://localhost:5000/notes/savedchanges",e)},N=function(e){return y.a.get("http://localhost:5000/notes/checktitleduplicate",{params:{title:e}})},I=function(){var e=Object(E.a)(g.a.mark((function e(t,a,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y.a.post("http://localhost:5000/notes/updatetitle",{title:t,username:n,prevTitle:a}));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),C=function(e){return y.a.post("http://localhost:5000/notes/createnewnote",e)},T=function(e,t){return y.a.get("http://localhost:5000/notes/findsectionpage",{params:{header:e,username:t}})},R=function(e){return y.a.get("http://localhost:5000/user/login",{params:e})},A=function(e,t){var a={username:t,header:e};return y.a.post("http://localhost:5000/notes/removeNote",a)},S=function(e){return y.a.get("http://localhost:5000/notes/findheader",{params:{username:e}})},P=function(e){return y.a.get("http://localhost:5000/user/checkuser",{params:e})},F=function(e){return y.a.post("http://localhost:5000/user/createuser",e)};var _=function(e){var t=Object(f.b)(),a=function(){var e=Object(E.a)(g.a.mark((function e(a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(a);case 3:null===(n=e.sent).data?c("Username and password does not match"):(c("Logged In"),t({type:"UPDATE_LOGIN",payload:n.data.username})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c("Username and password does not match");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),n={wrapperCol:{offset:8,span:16}},c=function(e){O.a.open({message:e,placement:"bottomRight"})};return r.a.createElement("div",{className:"login"},r.a.createElement("div",null,r.a.createElement("h1",null,"Login")),r.a.createElement(j.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",onFinish:function(e){a(e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(j.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username"}]},r.a.createElement(w.a,{autoComplete:"username"})),r.a.createElement(j.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password"}]},r.a.createElement(w.a,{autoComplete:"current-password"})),r.a.createElement(j.a.Item,n,r.a.createElement(l.a,null,r.a.createElement(m.b,{to:"/forgotpassword"},"Forgot Password"))),r.a.createElement(j.a.Item,n,r.a.createElement(l.a,{type:"primary",htmlType:"submit"},"Submit"))))};var U=function(){var e=function(){var e=Object(E.a)(g.a.mark((function e(t){var n,r,c,o,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.username,r=t.email,c=t.password,o={username:n,email:r},s={username:n,email:r,password:c},e.next=6,P(o);case 6:if(0!==e.sent.data.length){e.next=20;break}return e.prev=8,e.next=11,F(s);case 11:e.sent,a("Account Created"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),a("Incorrect Info");case 18:e.next=21;break;case 20:a("User or Email already in use, please try again");case 21:e.next=25;break;case 23:e.prev=23,e.t1=e.catch(0);case 25:case"end":return e.stop()}}),e,null,[[0,23],[8,15]])})));return function(t){return e.apply(this,arguments)}}(),t={wrapperCol:{offset:8,span:16}},a=function(e){O.a.open({message:e,placement:"bottomRight"})};return r.a.createElement("div",{className:"login"},r.a.createElement("div",null,r.a.createElement("h1",null,"Signup")),r.a.createElement(j.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",initialValues:{remember:!0},onFinish:function(t){e(t)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(j.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email"}]},r.a.createElement(w.a,null)),r.a.createElement(j.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username"}]},r.a.createElement(w.a,null)),r.a.createElement(j.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password"}]},r.a.createElement(w.a,null)),r.a.createElement(j.a.Item,t,r.a.createElement(l.a,{type:"primary",htmlType:"submit"},"Submit"))))},D=a(314),L=a(315),B=a(72),M=a.n(B);var Y=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.loginReducer})),a=Object(f.c)((function(e){return e.sidebarReducer}));Object(n.useEffect)((function(){}),[t,a]);var c=function(){var n=Object(E.a)(g.a.mark((function n(r,c){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A(r,t);case 3:a.splice(c,1),e(d(a)),u(0),o="".concat(r," removed"),O.a.open({message:o,placement:"bottomRight"}),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}var o}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}(),o=function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a=t,y.a.get("http://localhost:5000/notes/getfavourites",{params:{username:a}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log("error",e.t0);case 9:case"end":return e.stop()}var a}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var a=Object(E.a)(g.a.mark((function a(){var n,r,c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C(l);case 2:return n=a.sent,a.next=5,S(t);case 5:return r=a.sent,c=r.data[0].header,e(d(c)),a.abrupt("return",n);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),u=function(){var a=Object(E.a)(g.a.mark((function a(n){var r,c,o;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S(t);case 3:if(!((r=a.sent).data.length>0)){a.next=13;break}return c=r.data[0].header,e(d(r.data[0].header)),a.next=9,T(c[n],t);case 9:o=a.sent,e(p({page:"item",pageInfo:o.data})),a.next=16;break;case 13:return a.next=15,C(l);case 15:u(0);case 16:a.next=20;break;case 18:a.prev=18,a.t0=a.catch(0);case 20:case"end":return a.stop()}}),a,null,[[0,18]])})));return function(e){return a.apply(this,arguments)}}(),l={username:t,header:M()().format("MMMM Do YYYY, h:mm:SS a"),color:"#FFB6C1",text:"Start your first note \ud83d\udcd2\ud83d\udcd5\ud83d\udcd7\ud83d\udcd8\ud83d\udcd9\ud83d\udcd4",favourite:!1,showarea:!1},i=function(){var a=Object(E.a)(g.a.mark((function a(n){var r,c,u,l,i=arguments;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=i.length>1&&void 0!==i[1]?i[1]:"",e(h(!0)),a.t0=n,a.next="favourite"===a.t0?5:"addNew"===a.t0?11:"item"===a.t0?17:23;break;case 5:return a.next=7,o();case 7:return c=a.sent,e(p({page:"favourite",pageInfo:c.data})),setTimeout((function(){e(h(!1))}),2e3),a.abrupt("break",24);case 11:return a.next=13,s();case 13:return u=a.sent,e(p({page:"item",title:u.data.header,pageInfo:[u.data]})),setTimeout((function(){e(h(!1))}),2e3),a.abrupt("break",24);case 17:return a.next=19,T(r,t);case 19:return l=a.sent,e(p({page:"item",title:l.data[0].header,pageInfo:l.data})),setTimeout((function(){e(h(!1))}),2e3),a.abrupt("break",24);case 23:return a.abrupt("break",24);case 24:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"sidebar-notes"},r.a.createElement("div",{className:"note-favorite",onClick:function(){i("favourite")}},r.a.createElement(D.a,null),r.a.createElement("span",null,"Favourite")),r.a.createElement("div",{className:"note-add",onClick:function(){i("addNew")}}," + Section"),a.length>0&&a.map((function(e,t){return r.a.createElement("div",{className:"note-item",key:t},r.a.createElement("span",{onClick:function(){i("item",e)}},e),r.a.createElement(L.a,{onClick:function(){c(e,t)}}))})))},z=a(6),q=a(9),G=a(309),V=function(e){var t=e.isLoading,a=e.children;return t?r.a.createElement("div",{className:"loginWrapper"},r.a.createElement(G.a,{size:"large"})):r.a.createElement(r.a.Fragment,null,a)};var X=function(){var e=Object(f.b)(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(f.c)((function(e){return e.loginReducer})),i=Object(f.c)((function(e){return e.currentPageReducer})),m=Object(f.c)((function(e){return e.sidebarReducer})),b=Object(f.c)((function(e){return e.loadingReducer})),v=w.a.TextArea,j=Object(n.useState)([]),x=Object(s.a)(j,2),R=x[0],A=x[1],S=Object(n.useState)(""),P=Object(s.a)(S,2),F=P[0],_=P[1],U=Object(n.useState)(!1),L=Object(s.a)(U,2),B=L[0],M=L[1];Object(n.useEffect)((function(){R&&R.length>0&&_(R[0].header)}),[R]),Object(n.useEffect)((function(){}),[m,u]),Object(n.useEffect)((function(){o(b)}),[b]),Object(n.useEffect)((function(){Object.keys(i).length>0&&i.pageInfo.length>0?(A(i.pageInfo),setTimeout((function(){e(h(!1))}),2e3)):m&&(Y(m),setTimeout((function(){e(h(!1))}),2e3))}),[i]),Object(n.useEffect)((function(){}),[F]),Object(n.useEffect)((function(){}),[B]);var Y=function(){var t=Object(E.a)(g.a.mark((function t(a){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(a[0],u);case 2:n=t.sent,e(p({page:"item",pageInfo:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),G=function(){var e=Object(E.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:X("".concat(a," updated")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),X("Changes not saved");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),X=function(e){O.a.open({message:e,placement:"bottomRight"})},W=function(){var t=Object(E.a)(g.a.mark((function t(a,n){var r,c,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=u,!a){t.next=11;break}return t.next=4,I(a,n,u);case 4:return t.next=6,y.a.get("http://localhost:5000/notes/findheader",{params:{username:r}});case 6:c=t.sent,e(d(c.data[0].header)),o=i.pageInfo.map((function(e){return e.header=a,e})),i.pageInfo=o,e(p(Object(q.a)({},i)));case 11:case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),J=function(){var e=Object(E.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>0&&F!==t[0].header&&""!==F)){e.next=13;break}return e.prev=1,e.next=4,N(F);case 4:null!==e.sent.data?X("Title already exists, title not saved"):(W(F,t[0].header),X("Title updated")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error",e.t0);case 11:e.next=14;break;case 13:""==F&&X("Title needs to be at least 1 character");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var t=Object(E.a)(g.a.mark((function t(a){var n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={username:u,header:a,color:"#FFB6C1",text:"Start your first note \ud83d\udcd2\ud83d\udcd5\ud83d\udcd7\ud83d\udcd8\ud83d\udcd9\ud83d\udcd4",favourite:!1,showarea:!1},t.next=4,C(n);case 4:r=t.sent,i.pageInfo.push(r.data),e(p({page:"item",title:a,pageInfo:i.pageInfo})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(V,{isLoading:c},r.a.createElement(w.a,{placeholder:"title",size:"large",required:!0,className:"title",value:F,onChange:function(e){_(e.target.value)},onBlur:Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:J(R);case 1:case"end":return e.stop()}}),e)})))}),r.a.createElement("div",{className:"displaynotes"},R&&R.length>0&&R.map((function(e,t){return r.a.createElement("div",{className:"single-item",style:{backgroundColor:e.color},key:t},r.a.createElement("div",{className:e.favourite?"fill-red favourite-heart":"fill-black favourite-heart"},r.a.createElement(l.a,{onClick:function(){e.favourite=!e.favourite,A([].concat(Object(z.a)(R.slice(0,t)),[Object(q.a)({},e)],Object(z.a)(R.slice(t+1)))),G(Object(q.a)({},e),"Favourite")}},r.a.createElement(D.a,null)),r.a.createElement("input",{type:"color",value:e.color,onChange:function(a){e.color=a.target.value,A([].concat(Object(z.a)(R.slice(0,t)),[Object(q.a)({},e)],Object(z.a)(R.slice(t+1))))},onBlur:function(){G(Object(q.a)({},e),"Color")}})),r.a.createElement("div",{className:"container",onClick:function(a){a.preventDefault(),e.showarea||(e.showarea=!0,A([].concat(Object(z.a)(R.slice(0,t)),[Object(q.a)({},e)],Object(z.a)(R.slice(t+1)))))},onBlur:function(){e.showarea&&B?(e.showarea=!1,A([].concat(Object(z.a)(R.slice(0,t)),[Object(q.a)({},e)],Object(z.a)(R.slice(t+1)))),G(Object(q.a)({},e),"Text")):e.showarea&&(e.showarea=!1,A([].concat(Object(z.a)(R.slice(0,t)),[Object(q.a)({},e)],Object(z.a)(R.slice(t+1)))))}},e.showarea?r.a.createElement(v,{autoFocus:!0,defaultValue:e.text,onChange:function(a){e.text=a.target.value,A([].concat(Object(z.a)(R.slice(0,t)),[Object(q.a)({},e)],Object(z.a)(R.slice(t+1)))),M(!0)},placeholder:"Controlled autosize",autoSize:{minRows:2},resize:"false"}):r.a.createElement("pre",null,e.text," ")))})),R&&R.length>0&&r.a.createElement("div",{className:"add-item",onClick:function(){H(R[0].header)}},r.a.createElement("h2",null,"+ Note"))))},W=a(52);var J=function(){var e=Object(f.b)(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(f.c)((function(e){return e.loadingReducer})),i=Object(f.c)((function(e){return e.currentPageReducer})),m=w.a.TextArea,d=Object(n.useState)([]),h=Object(s.a)(d,2),b=h[0],v=h[1],j=Object(n.useState)(""),x=Object(s.a)(j,2),y=x[0],N=x[1];Object(n.useEffect)((function(){o(u)}),[u]);var I=Object(n.useState)(!1),C=Object(s.a)(I,2),T=C[0],R=C[1];Object(n.useEffect)((function(){v(i.pageInfo)}),[i]),Object(n.useEffect)((function(){b.length>0&&N(b[0].header)}),[b]),Object(n.useEffect)((function(){}),[y,T]);var A=function(){var e=Object(E.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t);case 3:e.sent,S(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),S("Changes not saved");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),S=function(e){O.a.open({message:e,placement:"bottomRight"})};return r.a.createElement(V,{isLoading:c},r.a.createElement("h1",null,"Favourite Notes"),r.a.createElement("div",{className:"displaynotes"},b.length>0&&b.filter((function(e){return e.favourite})).length>0?b.length>0&&b.map((function(t,a){if(t.favourite)return r.a.createElement("div",{className:"single-item",style:{backgroundColor:t.color},key:a},r.a.createElement("div",{className:t.favourite?"fill-red favourite-heart":"fill-black favourite-heart"},r.a.createElement(l.a,{onClick:function(){t.favourite=!t.favourite,v([].concat(Object(z.a)(b.slice(0,a)),[Object(q.a)({},t)],Object(z.a)(b.slice(a+1)))),e(p({page:"favourite",pageInfo:[].concat(Object(z.a)(b.slice(0,a)),[Object(q.a)({},t)],Object(z.a)(b.slice(a+1)))})),A(Object(q.a)({},t),"Favourite Removed")}},r.a.createElement(D.a,null)),r.a.createElement("input",{type:"color",value:t.color,onChange:function(e){t.color=e.target.value,v([].concat(Object(z.a)(b.slice(0,a)),[Object(q.a)({},t)],Object(z.a)(b.slice(a+1))))},onBlur:function(){A(Object(q.a)({},t),"Color Updated")}})),r.a.createElement("div",{className:"container",onClick:function(e){e.preventDefault(),t.showarea||(t.showarea=!0,v([].concat(Object(z.a)(b.slice(0,a)),[Object(q.a)({},t)],Object(z.a)(b.slice(a+1)))))},onBlur:function(){t.showarea&&T?(t.showarea=!1,v([].concat(Object(z.a)(b.slice(0,a)),[Object(q.a)({},t)],Object(z.a)(b.slice(a+1)))),A(Object(q.a)({},t),"Text Updated")):t.showarea&&(t.showarea=!1,v([].concat(Object(z.a)(b.slice(0,a)),[Object(q.a)({},t)],Object(z.a)(b.slice(a+1)))))}},t.showarea?r.a.createElement(m,{autoFocus:!0,defaultValue:t.text,onChange:function(e){t.text=e.target.value,v([].concat(Object(z.a)(b.slice(0,a)),[Object(q.a)({},t)],Object(z.a)(b.slice(a+1)))),R(!0)},placeholder:"Controlled autosize",autoSize:{minRows:2},resize:"false"}):r.a.createElement("pre",null,t.text)))})):r.a.createElement(W.a,{description:"You have no favourites \ud83d\ude22"})))};var H=function(){var e=Object(f.b)(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1],u=Object(f.c)((function(e){return e.loginReducer})),l=Object(f.c)((function(e){return e.favouriteReducer})),i=Object(f.c)((function(e){return e.currentPageReducer})),m=Object(f.c)((function(e){return e.loadingReducer}));Object(n.useEffect)((function(){}),[u,l]),Object(n.useEffect)((function(){0==Object.keys(i).length?b(u,0):b(u,i.index)}),[]),Object(n.useEffect)((function(){o(m)}),[m]);var h={username:u,header:M()().format("MMMM Do YYYY, h:mm:SS a"),color:"#FFB6C1",text:"Start your first note \ud83d\udcd2\ud83d\udcd5\ud83d\udcd7\ud83d\udcd8\ud83d\udcd9\ud83d\udcd4",favourite:!1,showarea:!1},b=function(){var t=Object(E.a)(g.a.mark((function t(a,n){var r,c,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(a);case 3:if(!((r=t.sent).data.length>0)){t.next=13;break}return c=r.data[0].header,e(d(r.data[0].header)),t.next=9,T(c[n],u);case 9:o=t.sent,e(p({page:"item",pageInfo:o.data})),t.next=16;break;case 13:return t.next=15,C(h);case 15:b(u);case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.log("error",t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"notes"},r.a.createElement("div",{className:"sidebar"},r.a.createElement(Y,null)),r.a.createElement(V,{isLoading:c},"favourite"==i.page?r.a.createElement("div",{className:"notepage"},r.a.createElement(J,null)):r.a.createElement("div",{className:"notepage"},r.a.createElement(X,null))))};var $=function(){var e=function(){var e=Object(E.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.email,e.next=4,y.a.post("/email/send/",{email:n}).then((function(e){null===e.data?a("Email not found"):a("Password sent")})).catch((function(e){return a("Email not found")}));case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a("Incorrect Info");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),t={wrapperCol:{offset:8,span:16}},a=function(e){O.a.open({message:"Notification Title",description:e,placement:"bottomRight"})};return r.a.createElement("div",{className:"login"},r.a.createElement("div",null,r.a.createElement("h1",null,"Forgot Password")),r.a.createElement(j.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{name:"basic",onFinish:function(t){e(t)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(j.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}]},r.a.createElement(w.a,null)),r.a.createElement(j.a.Item,t,r.a.createElement(l.a,{type:"primary",htmlType:"submit"},"Submit"))))};var K=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"notloggedin"},r.a.createElement(W.a,{description:"Looks like you're not logged in, please create an account or log in"})))},Q=a(144),Z=a.n(Q);var ee=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home-info"},r.a.createElement("h1",null,"Notes App "),r.a.createElement("p",null,"Are we in agreeance pixel pushing ultimate measure of success, let's prioritize the low-hanging fruit. Talk to the slides. Commitment to the cause upstream selling deploy, or onward and upward, productize the deliverables and focus on the bottom line but blue sky baseline. Define the underlying principles that drive decisions and strategy for your design language ")),r.a.createElement("div",{className:"home-image"},r.a.createElement("img",{src:Z.a}))))},te=a(10);var ae=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),l=u[0],i=u[1],f=function(e){c(e)},p=function(e){i(e)};return Object(n.useEffect)((function(){}),[a]),r.a.createElement(m.a,null,r.a.createElement("div",{className:"Main"},r.a.createElement(b,{avatar:a,updateAvatar:f,updateUserInfo:p}),r.a.createElement("div",{className:"content"},r.a.createElement(te.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(ee,Object.assign({},e,{isAuthed:!0}))}}),r.a.createElement(te.a,{path:"/login",render:function(e){return r.a.createElement(_,Object.assign({},e,{updateAvatar:f,updateUserInfo:p,isAuthed:!0}))}}),r.a.createElement(te.a,{path:"/signup",render:function(e){return r.a.createElement(U,Object.assign({},e,{isAuthed:!0}))}}),r.a.createElement(te.a,{path:"/forgotpassword",render:function(e){return r.a.createElement($,Object.assign({},e,{isAuthed:!0}))}}),r.a.createElement(te.a,{path:"/notes",render:function(e){return r.a.createElement(H,Object.assign({},e,{userInfo:l,isAuthed:!0}))}}),r.a.createElement(te.a,{path:"/notloggedin",render:function(e){return r.a.createElement(K,Object.assign({},e,{isAuthed:!0}))}}),r.a.createElement(te.a,{path:"/home",render:function(e){return r.a.createElement(ee,Object.assign({},e,{isAuthed:!0}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(50),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOGIN":return t.payload;case"UPDATE_LOGIN_EMPTY":return{};default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FAVOURITE":return t.payload;case"UPDATE_FAVOURITE_EMPTY":return{};default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SIDEBAR":return t.payload;default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURRENT_PAGE":return t.payload;default:return e}},ue=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOADING":return t.payload;default:return e}},le=Object(ne.b)({loginReducer:re,favouriteReducer:ce,sidebarReducer:oe,currentPageReducer:se,loadingReducer:ue}),ie=Object(ne.c)(le,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(f.a,{store:ie},r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[147,1,2]]]);
//# sourceMappingURL=main.09c0904c.chunk.js.map