(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{232:function(e,t,a){e.exports=a(426)},237:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),l=a.n(c),o=(a(237),a(40)),s=a.n(o),i=a(68),u=a(37),m=a(87),p=a(97),d=a(95),h=a(199),E=a(9),g=new function e(){Object(u.a)(this,e),Object(E.j)(this,{loading:!0,isLoggedIn:!0,username:"",password:""})},v=function e(){var t=this;Object(u.a)(this,e),this.events=[{id:1,name:"a",city:"a",location:"a",fans:1}],this.success=!1,this.addEvent=function(e){t.events.push(e)}};Object(E.i)(v,{events:E.o,success:E.o,addEvent:E.f});var f=new v,b=a(51),y=(a(239),function(e){return r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{className:"input",type:e.type,placeholder:e.placeholder,value:e.value,onChange:function(t){return e.onChange(t.target.value)}}))}),w=(a(240),function(e){return r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{className:"btn",disabled:e.disabled,onClick:function(){return e.onClick()}},e.text))}),x=(a(241),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},n}return Object(m.a)(a,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(b.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(a=e.sent)&&a.success?(g.isLoggedIn=!0,g.username=a.username):a&&!1===a.success&&(this.resetForm(),alert(a.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},r.a.createElement("h2",null,"Hello, log in please!"),r.a.createElement(y,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),r.a.createElement(y,{type:"password",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement(w,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}}))}}]),a}(r.a.Component)),k=a(200),j=a(182),N=a(4),O=a(474),C=a(481),I=a(490),L=a(482),S=a(483),B=a(487),F=a(74),A=a(486),D=a(484),P=a(485),H=a(488),W=a(489),J=a(428),M=a(196),R=a.n(M),T=a(198),V=a.n(T),z=a(197),G=a.n(z),K=a(491),$=a(471),U=a(472),X=a(473),_=a(183),q=a.n(_),Q=a(184),Y=a.n(Q),Z=a(185),ee=a.n(Z),te=a(186),ae=a.n(te);a(242);function ne(e){var t=e.tickets;return r.a.createElement("div",{className:"dash"},t)}var re=a(63),ce=a(14),le=r.a.createElement(re.a,null,r.a.createElement("div",null,r.a.createElement(K.a,{button:!0,component:re.b,to:"/"},r.a.createElement($.a,null,r.a.createElement(q.a,null)),r.a.createElement(U.a,{primary:"Dashboard"})),r.a.createElement(K.a,{button:!0,component:re.b,to:"/tickets"},r.a.createElement($.a,null,r.a.createElement(Y.a,null)),r.a.createElement(U.a,{primary:"Tickets"})),r.a.createElement(K.a,{button:!0,component:re.b,to:"/people"},r.a.createElement($.a,null,r.a.createElement(ee.a,null)),r.a.createElement(U.a,{primary:"No of people"})),r.a.createElement(K.a,{button:!0,component:re.b,to:"/profits"},r.a.createElement($.a,null,r.a.createElement(ae.a,null)),r.a.createElement(U.a,{primary:"Profits"})),r.a.createElement(ce.c,null,r.a.createElement(ce.a,{path:"/tickets"},r.a.createElement(ne,{tickets:"328294 sold tickets this year"})),r.a.createElement(ce.a,{path:"/people"},r.a.createElement(ne,{tickets:"239821 people at this events"})),r.a.createElement(ce.a,{path:"/profits"},r.a.createElement(ne,{tickets:"$ 4mil as profit overall"})),r.a.createElement(ce.a,{path:"/"},console.log("okk"))))),oe=r.a.createElement("div",null,r.a.createElement(X.a,{inset:!0},"Saved reports"),r.a.createElement(K.a,{button:!0},r.a.createElement($.a,null),r.a.createElement(U.a,{primary:"This year"})),r.a.createElement(K.a,{button:!0},r.a.createElement($.a,null),r.a.createElement(U.a,{primary:"Last year"}))),se=a(56),ie=a(45);function ue(e){return r.a.createElement(F.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function me(e,t){return{time:e,amount:t}}var pe=[me("0",0),me("Ian",300),me("Feb",600),me("Mar",200),me("Apr",200),me("May",20),me("June",void 0)];function de(){var e=Object(se.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,"Events - year 2020"),r.a.createElement(ie.d,null,r.a.createElement(ie.c,{data:pe,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(ie.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(ie.f,{stroke:e.palette.text.secondary},r.a.createElement(ie.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"No of events")),r.a.createElement(ie.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}var he=a(475),Ee=Object(O.a)({depositContext:{flex:1}});function ge(){var e=Ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,"Recent Events"),r.a.createElement(F.a,{component:"p",variant:"h4"},"National Book Fair"),r.a.createElement(F.a,{color:"textSecondary",className:e.depositContext},"on 3 April, 2020"),r.a.createElement("div",null,r.a.createElement(he.a,{color:"primary",rel:"noopener noreferrer",href:"https://www.loc.gov/programs/national-book-festival/about-this-program/",target:"_blank"},"View more Info")))}var ve=a(476),fe=a(480),be=a(479),ye=a(477),we=a(478);var xe=function(e){var t=e.events.map((function(e){return t=e.id,a=e.name,n=e.date,r=e.city,c=e.location,l=e.fans,{id:t,name:a,date:n,city:r,location:c,fans:l};var t,a,n,r,c,l}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null,"Recent Events"),r.a.createElement(ve.a,{size:"small"},r.a.createElement(ye.a,null,r.a.createElement(we.a,null,r.a.createElement(be.a,null,"Name"),r.a.createElement(be.a,null,"Date"),r.a.createElement(be.a,null,"City"),r.a.createElement(be.a,null,"Location"),r.a.createElement(be.a,{align:"right"},"Atendes"))),r.a.createElement(fe.a,null,t.map((function(e){return r.a.createElement(we.a,{key:e.id},r.a.createElement(be.a,null,e.name),r.a.createElement(be.a,null,e.date),r.a.createElement(be.a,null,e.city),r.a.createElement(be.a,null,e.location),r.a.createElement(be.a,{align:"right"},e.fans))})))))},ke=(a(424),function(e){return r.a.createElement("div",{className:"logoutButton"},r.a.createElement("button",{className:"btn",disabled:e.disabled,onClick:function(){return e.onClick()}},e.text))}),je=Object(O.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(b.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),Ne=function(e){var t=je(),a=r.a.useState(!0),n=Object(k.a)(a,2),c=n[0],l=n[1],o=Object(N.a)(t.paper,t.fixedHeight);return r.a.createElement("div",{className:t.root},r.a.createElement(C.a,null),r.a.createElement(L.a,{position:"absolute",className:Object(N.a)(t.appBar,c&&t.appBarShift)},r.a.createElement(S.a,{className:t.toolbar},r.a.createElement(D.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(N.a)(t.menuButton,c&&t.menuButtonHidden)},r.a.createElement(R.a,null)),r.a.createElement(F.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title},"Welcome, ",e.username),r.a.createElement(D.a,{color:"inherit"},r.a.createElement(ke,{className:"log-out",text:"Log out",disabled:!1,onClick:e.click}),r.a.createElement(P.a,{badgeContent:4,color:"secondary"},r.a.createElement(G.a,null))))),r.a.createElement(I.a,{variant:"permanent",classes:{paper:Object(N.a)(t.drawerPaper,!c&&t.drawerPaperClose)},open:c},r.a.createElement("div",{className:t.toolbarIcon},r.a.createElement(D.a,{onClick:function(){l(!1)}},r.a.createElement(V.a,null))),r.a.createElement(A.a,null),r.a.createElement(B.a,null,le),r.a.createElement(A.a,null),r.a.createElement(B.a,null,oe)),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(H.a,{maxWidth:"lg",className:t.container},r.a.createElement(W.a,{container:!0,spacing:3},r.a.createElement(W.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(J.a,{className:o},r.a.createElement(de,null))),r.a.createElement(W.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(J.a,{className:o},r.a.createElement(ge,null))),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(J.a,{className:t.paper},r.a.createElement(xe,{events:e.events})))))))},Oe=(a(425),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={events:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application.json","Content-type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success?(g.loading=!1,g.isLoggedIn=!0,g.username=a.username):(g.loading=!1,g.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),g.loading=!1,g.isLoggedIn=!1;case 14:return e.prev=14,e.next=17,fetch("/events",{method:"get",headers:{Accept:"application.json","Content-type":"application/json"}});case 17:return n=e.sent,e.next=20,n.json();case 20:(r=e.sent)&&r.success?(f.success=r.success,this.setState({events:r.events})):f.success=!1,e.next=27;break;case 24:e.prev=24,e.t1=e.catch(14),f.success=!1;case 27:case"end":return e.stop()}}),e,this,[[0,10],[14,24]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&a.success&&(g.isLoggedIn=!1,g.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(f.events),g.loading?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Loading, please wait...")):g.isLoggedIn?r.a.createElement("div",{className:"app"},r.a.createElement(Ne,{username:g.username,click:this.doLogout,events:this.state.events})):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement(x,null)))}}]),a}(r.a.Component)),Ce=Object(h.a)(Oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.7fe1af06.chunk.js.map