(this["webpackJsonpdad-jokes"]=this["webpackJsonpdad-jokes"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(0),a=n.n(c),r=n(17),i=n.n(r),s=(n(24),n(25),n(7)),l=n(18),j=n.n(l),d=n(49),b=n(50),u=(n(44),function(t){return Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:t.color,transition:"background-color 0.5s linear"},children:Object(o.jsxs)(d.a,{style:{width:"20rem",margin:"0 auto",boxShadow:"0 20px 70px rgba(0, 0, 0, 0.55)"},children:[Object(o.jsxs)(d.a.Body,{children:[Object(o.jsx)(d.a.Img,{variant:"top",src:t.logo,style:{width:"50%",margin:"0 auto",marginTop:"10px"}}),Object(o.jsx)(d.a.Title,{style:{color:t.color,transition:"color 0.5s linear",fontWeight:"bold",fontSize:30,margin:10},children:t.name}),Object(o.jsxs)(d.a.Text,{children:["Acronym: ",t.acronym]}),Object(o.jsx)(b.a,{onClick:t.callApi,style:{backgroundColor:t.color,color:"#A00008",fontWeight:"bold",fontSize:14,border:"none",transition:"background-color 0.5s linear"},children:"New crypto coin"})]}),Object(o.jsxs)(d.a.Footer,{className:"text-muted",children:[t.date," ",Object(o.jsx)("br",{})," by ","Petar Boshkoski"]})]})})})}),h=function(){var t=n(45),e=Object(c.useState)(""),r=Object(s.a)(e,2),i=r[0],l=r[1],d=Object(c.useState)(""),b=Object(s.a)(d,2),h=b[0],g=b[1],O=Object(c.useState)(""),m=Object(s.a)(O,2),p=m[0],x=m[1],f=Object(c.useState)(""),y=Object(s.a)(f,2),k=y[0],S=y[1],v=Object(c.useState)(""),w=Object(s.a)(v,2),C=w[0],F=w[1],T=function(){j()({method:"GET",url:"https://random-data-api.com/api/crypto_coin/random_crypto_coin",responseType:"json"}).then((function(e){l(e.data.acronym),g(e.data.coin_name),x(e.data.logo),S((new Date).toDateString()),F(t({luminosity:"light"}))}))};return Object(c.useEffect)((function(){T()}),[]),Object(o.jsx)(a.a.Fragment,{children:Object(o.jsx)(u,{color:C,date:k,callApi:T,logo:p,name:h,acronym:i})})};var g=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(h,{})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),a(t),r(t)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),O()}},[[47,1,2]]]);
//# sourceMappingURL=main.a5bd9d50.chunk.js.map