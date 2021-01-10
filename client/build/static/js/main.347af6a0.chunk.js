(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,a,t){},200:function(e,a,t){},230:function(e,a){},231:function(e,a){},238:function(e,a){},240:function(e,a){},272:function(e,a,t){},273:function(e,a,t){},274:function(e,a,t){},275:function(e,a,t){},281:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(87),o=t.n(r),c=(t(97),t(3)),s=(t(98),Object(n.createContext)()),i=t(44),m=t.n(i);var u=function(e){return document.createElement("script"),console.log("Main chart "+e.theme),l.a.createElement("section",{id:"MainChart"},l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{className:"tradingView"},l.a.createElement(m.a,{symbol:e.name,theme:"dark",locale:"en",autosize:!0,BarStyles:i.HEIKIN_ASHI,studies:e.indicators}))))},d=t(2),v=t.n(d);var g=function(e){var a=document.createElement("script"),t=.75*visualViewport.width.valueOf();return Object(n.useEffect)((function(){v.a.get("currentStock");a.src="https://s3.tradingview.com/external-embedding/embed-widget-financials.js",a.async=!0,a.innerHTML=JSON.stringify({symbol:"".concat(v.a.get("currentStock")),height:"500",width:"".concat(t),locale:"en",dateRange:"12M",colorTheme:"dark",trendLineColor:"#37a6ef",underLineColor:"#E3F2FD",isTransparent:!1,autosize:!0,largeChartUrl:"",displayMode:"compact"}),document.getElementById("financialContainer").appendChild(a)}),[]),l.a.createElement("section",{id:"Financials"},l.a.createElement("div",{id:"financialContainer"},l.a.createElement("div",{className:"tradingview-widget-container"},l.a.createElement("div",{className:"tradingview-widget-container__widget"}))))};t(49);var f=function(e){var a=document.createElement("script"),t=.75*visualViewport.width.valueOf();return Object(n.useEffect)((function(){var e=v.a.get("currentStock");console.log(e),a.src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js",a.async=!0,a.innerHTML=JSON.stringify({symbol:"".concat(v.a.get("currentStock")),height:"300",width:"".concat(t),locale:"en",dateRange:"12M",colorTheme:"dark",trendLineColor:"#37a6ef",underLineColor:"#E3F2FD",isTransparent:!1,autosize:!0,largeChartUrl:"",displayMode:"compact"}),document.getElementById("profileContainer").appendChild(a)}),[]),l.a.createElement("section",{id:"Profile"},l.a.createElement("div",{id:"profileContainer"},l.a.createElement("div",{className:"tradingview-widget-container"},l.a.createElement("div",{className:"tradingview-widget-container__widget"}))))},h=t(9),p=t.n(h);var E=function(){var e=Object(n.useState)({name:sessionStorage.getItem("sessionName"),email:sessionStorage.getItem("sessionEmail"),password:sessionStorage.getItem("sessionPassword"),authenticated:sessionStorage.getItem("sessionAuthenticated")}),a=Object(c.a)(e,2),t=a[0];return a[1],Object(n.useEffect)((function(){if(console.log(t.name),v.a.get("tickerList")){console.log("else{}");var e=document.createElement("script");e.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",e.async=!0;var a=v.a.get("tickerList");console.log("stringified: ".concat(a)),console.log("parsed ".concat(JSON.parse(a))),console.log(Array.from(a));var n=JSON.parse(a);console.log("this is the formed array ".concat(Array.from(n))),n=Array.from(n);var l=new Array(n.length);console.log(n.length);for(var r=0;r<n.length;r++){var o="".concat(n[r].toUpperCase());l[r]={proName:o,title:n[r].toUpperCase()}}console.log("this is array: "),console.log(l),e.innerHTML=JSON.stringify({symbols:l,showSymbolLogo:!0,colorTheme:"dark",isTransparent:!1,displayMode:"adaptive",locale:"en"}),document.getElementById("myContainer").appendChild(e)}else{var c=document.createElement("script");c.src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js",c.async=!0,c.innerHTML=JSON.stringify({symbols:[{proName:"NASDAQ:AAPL",title:"AAPL"},{proName:"NYSE:PLTR",title:"PLTR"},{proName:"NASDAQ:TSLA",title:"TSLA"}],showSymbolLogo:!0,colorTheme:"dark",isTransparent:!1,displayMode:"adaptive",locale:"en"}),document.getElementById("myContainer").appendChild(c)}}),[]),l.a.createElement("div",{id:"myContainer"},l.a.createElement("div",{className:"tradingview-widget-container"},l.a.createElement("div",{className:"tradingview-widget-container__widget"})))};t(121);var b=function(){var e=v.a.get("email"),a=v.a.get("pass"),t=v.a.get("currentStock"),r=Object(n.useState)(),o=Object(c.a)(r,2),s=(o[0],o[1]),i=Object(n.useState)([]),m=Object(c.a)(i,2),u=m[0],d=m[1];function g(){p.a.post("/api/users/notes/add/".concat(e,"/").concat(a,"/").concat(t,"/").concat(C)).then((function(e){console.log(e.data),O(l.a.createElement("div",{className:"text-success"},e.data))})).then(f).catch((function(e){console.log(e),O(l.a.createElement("div",{className:"text-danger"},"Oops Something Went Wrong"))}))}function f(){p.a.post("/api/users/notes/get/".concat(e,"/").concat(a,"/").concat(t)).then((function(e){e.data.stock.forEach((function(e){e.Ticker===t&&d(e.Notes)})),s(e.data)})).catch((function(e){console.log(e)}))}Object(n.useEffect)((function(){f()}),[]);var h=Object(n.useState)(),E=Object(c.a)(h,2),b=E[0],O=E[1],w=Object(n.useState)(""),N=Object(c.a)(w,2),C=N[0],S=N[1];return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-6"},l.a.createElement("h3",{class:"card-title"},t),l.a.createElement("div",{className:"form",onSubmit:g},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"Note",value:C.value,placeholder:"Enter Note Here",className:"form-control input-group-text",onChange:function(e){S(e.target.value)}}),b,l.a.createElement("button",{className:"btn btn-light addNoteButton col-sm-4",type:"submit",onClick:g},"Add Note")),l.a.createElement("ul",{className:"col-7-md list-group list-group-flush"},u.map((function(n){return l.a.createElement("div",{className:"row  justify-content-center"},l.a.createElement("li",{className:"list-group-item col-sm-8"},n),l.a.createElement("button",{className:"btn  removeNoteButton col-sm-2",onClick:function(){!function(n){var l=n;console.log("before api call ".concat(l)),p.a.post("/api/users/notes/remove/".concat(e,"/").concat(a,"/").concat(t,"/").concat(l)).then((function(e){console.log("notes removeFunction api call res: ".concat(e.data))})).then(f).catch((function(e){console.log("notes removeFunction api call err: ".concat(e))}))}(n)}},"Remove"))}))))))};var O=function(){var e=v.a.get("currentStock");console.log(e);var a=Object(n.useContext)(s);a.user,a.setUser,sessionStorage.getItem("sessionName"),sessionStorage.getItem("sessionEmail"),sessionStorage.getItem("sessionPassword"),sessionStorage.getItem("sessionAuthenticated"),console.log("Home: sessionStorage: ".concat(sessionStorage.getItem("sessionName"))),console.log("Home: sessionStorage: ".concat(sessionStorage.getItem("sessionEmail")));var t=Object(n.useState)("Indicators On"),r=Object(c.a)(t,2),o=r[0],i=r[1],m=Object(n.useState)("false"),d=Object(c.a)(m,2),h=d[0],p=d[1],O=["BB@tv-basicstudies","MACD@tv-basicstudies","MASimple@tv-basicstudies"],w=Object(n.useState)("btn btn-light"),N=Object(c.a)(w,2);return N[0],N[1],l.a.createElement("div",null,l.a.createElement("div",{className:"StickyNav"},l.a.createElement("nav",{className:"navbar  navbar-expand-sm "},l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarMenu"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav "},l.a.createElement("li",{class:"nav-item active"},l.a.createElement("a",{class:"nav-link",href:"/watchlist"},"Watchlist")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#MainChart",className:"nav-link"},"Chart")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#Financials",className:"nav-link"},"Financials")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#Profile",className:"nav-link"},"Profile"))),l.a.createElement("ul",{className:"navbar-nav justify-content-end"},l.a.createElement("li",{className:"nav-item justify-content-end"},l.a.createElement("div",{class:"chartButtons"},l.a.createElement("div",{class:"changeButton"},l.a.createElement("a",{className:"nav-link",onClick:function(){"Indicators On"===o?(p(O),i("Indicators Off")):(p("false"),i("Indicators On"))}},o))))))),l.a.createElement(E,null)),l.a.createElement(u,{name:e,indicators:h}),l.a.createElement("div",{className:"contain"},l.a.createElement(g,{name:e})),l.a.createElement("div",{className:"contain2"},l.a.createElement(f,{name:e})),l.a.createElement(b,null))},w=t(88),N=t(89),C=t(16),S=t.n(C),j=new(function(){function e(){Object(w.a)(this,e)}return Object(N.a)(e,[{key:"validateName",value:function(e){return!!S.a.isEmpty(e)&&"Name is required"}},{key:"validateTicker",value:function(e){return!!S.a.isEmpty(e)&&"Ticker is required"}},{key:"validateMarket",value:function(e){}},{key:"validateEmail",value:function(e){return S.a.isEmpty(e)?"Email is required":!S.a.isEmail(e)&&"Invalid Email"}},{key:"validatePassword",value:function(e){return S.a.isEmpty(e)?"Password is required":!S.a.isLength(e,{min:8})&&"Password should be minimum 8 characters"}},{key:"validateConfirmPassword",value:function(e,a){return!S.a.equals(e,a)&&"Passwords must match"}}]),e}()),y=t(15),k=t.n(y);t(200),t(201),t(272);var x=function(){return l.a.createElement("nav",{class:"navbar navbar-transparent navbar-expand-lg",id:"navbar"},l.a.createElement("button",{class:"navbar-toggler btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"true","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("ul",{class:"navbar-nav"},l.a.createElement("li",{class:"nav-item active"},l.a.createElement("a",{class:"nav-link",href:"/watchlist"},"Watchlist")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"/login"},"Login")),l.a.createElement("li",{class:"nav-item"},l.a.createElement("a",{class:"nav-link",href:"/register"},"Sign Up")))))};var P=function(){var e=Object(n.useContext)(s),a=(e.user,e.setUser),t=Object(n.useState)({}),r=Object(c.a)(t,2),o=(r[0],r[1],Object(n.useState)({value:"",validateOnChange:!1,error:""})),i=Object(c.a)(o,2),m=i[0],u=i[1],d=Object(n.useState)({value:"",validateOnChange:!1,error:""}),g=Object(c.a)(d,2),f=g[0],h=g[1],E=Object(n.useState)(),b=Object(c.a)(E,2),O=b[0],w=b[1],N=Object(n.useState)(),C=Object(c.a)(N,2),S=C[0],y=C[1],P=Object(n.useState)(!1),I=Object(c.a)(P,2),A=I[0],T=I[1],L=Object(n.useState)(!1),B=Object(c.a)(L,2),M=B[0],U=B[1],D=Object(n.useState)("not set yet"),J=Object(c.a)(D,2),F=J[0],H=J[1];function _(e,a){var t=a.target.name;if("email"===t&&!1===m.validateOnChange&&!1===A){var n={value:m.value,validateOnChange:!0,error:e(m.value)};u(n)}else if("password"===t&&!1===f.validateOnChange&&!1===A){n={value:f.value,validateOnChange:!0,error:e(f.value)};h(n)}}function q(e,a){console.log("handle change called");var t=a.target.name;console.log(t);var n=a.target.value;if(console.log(m.value),"email"===t&&!0===m.validateOnChange){console.log("opta");var l={value:n,validateOnChange:m.validateOnChange,error:e(n)};u(l)}else if("email"===t&&!1===m.validateOnChange){console.log("optb");l={value:n,validateOnChange:m.validateOnChange,error:""};u(l)}else if("password"===t&&!0===f.validateOnChange){console.log("optc");l={value:n,validateOnChange:m.validateOnChange,error:e(n)};h(l)}else if("password"===t&&!1===f.validateOnChange){console.log("optd");l={value:n,validateOnChange:m.validateOnChange,error:""};h(l)}}function R(e){console.log("handle submit called"),T(!0),e.preventDefault(),console.log("".concat(m.value,"  ").concat(f.value));var t=j.validateEmail(m.value),n=j.validatePassword(f.value);[t,n].every((function(e){return!1===e}))?(console.log("email error and pass word error are false"),m.value,f.value,console.log("password.value before sending api request ".concat(f.value)),console.log("email.value before sending api request ".concat(m.value)),p.a.post("/api/users/login/id/".concat(m.value,"/").concat(f.value)).then((function(e){"access granted"===e.data[0]?(H(JSON.stringify(e.data)),a({name:e.data[1],email:m.value,password:f.value,authenticated:!0}),console.log("access granted ".concat(e.data[1])),v.a.set("name","".concat(e.data[1]),{sameSite:"strict",expires:1}),v.a.set("email","".concat(m.value),{sameSite:"strict",expires:1}),v.a.set("pass","".concat(f.value),{sameSite:"strict",expires:1}),w("authenticated"),window.location.href="/watchlist"):"incorrect password"===e.data&&y("incorrect password")})).catch((function(e){console.log(e),y("oops something went wrong :(")})),console.log(F),U(!0),setTimeout((function(){U(!1)}),1500)):(u(m.value,!0,t),h(f.value,!0,n))}return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement("div",{className:"card col-sm-6"},l.a.createElement("h4",{className:"card-title text-center"},"Login"),l.a.createElement("div",{className:"card-body"},M&&l.a.createElement("p",{className:"text-success text-center"},"Success, All fields are validated"),l.a.createElement("form",{onSubmit:function(e){return R(e)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",name:"email",value:m.value,placeholder:"Enter email here",className:k()("form-control",{"is-valid":!1===m.error},{"is-invalid":m.error}),onChange:function(e){return q(j.validateEmail,e)},onBlur:function(e){return _(j.validateEmail,e)}}),l.a.createElement("div",{className:"invalid-feedback"},m.error)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",name:"password",value:f.value,placeholder:"Enter your password",className:k()("form-control",{"is-valid":!1===f.error},{"is-invalid":f.error}),onChange:function(e){return q(j.validatePassword,e)},onBlur:function(e){return _(j.validatePassword,e)}}),l.a.createElement("div",{className:"invalid-feedback"},f.error)),l.a.createElement("div",{type:"submit",className:"btn loginButton btn-light col-sm-2",onClick:function(e){return R(e)}},"Login"),l.a.createElement("div",{className:"btn loginButton btn-dark col-sm-2",onClick:function(){window.location.href="/Register/"}},"Sign Up"),l.a.createElement("div",{className:"valid-feedback"},O),l.a.createElement("div",{className:"invalid-feedback"},S)))))};t(273);var I=function(){var e=Object(n.useContext)(s),a=(e.user,e.setUser,{name:{value:"",validateOnChange:!1,error:""},email:{value:"",validateOnChange:!1,error:""},password:{value:"",validateOnChange:!1,error:""},confirmPassword:{value:"",validateOnChange:!1,error:""},submitCalled:!1,allFieldsValidated:!1}),t=Object(n.useState)({value:"",validateOnChange:!1,error:""}),r=Object(c.a)(t,2),o=r[0],i=r[1],m=Object(n.useState)({value:"",validateOnChange:!1,error:""}),u=Object(c.a)(m,2),d=u[0],g=u[1],f=Object(n.useState)({value:"",validateOnChange:!1,error:""}),h=Object(c.a)(f,2),E=h[0],b=h[1],O=Object(n.useState)({value:"",validateOnChange:!1,error:""}),w=Object(c.a)(O,2),N=w[0],C=w[1],S=Object(n.useState)(!1),y=Object(c.a)(S,2),P=y[0],I=y[1],A=Object(n.useState)(!1),T=Object(c.a)(A,2),L=T[0],B=T[1];function M(e,a){var t=a.target.name;if("name"===t&&!1===o.validateOnChange&&!1===P){var n={value:o.value,validateOnChange:!0,error:e(o.value)};i(n)}else if("email"===t&&!1===d.validateOnChange&&!1===P){n={value:d.value,validateOnChange:!0,error:e(d.value)};g(n)}else if("password"===t&&!1===E.validateOnChange&&!1===P){n={value:E.value,validateOnChange:!0,error:e(E.value)};b(n)}else if("confirmPassword"===t&&!1===E.validateOnChange&&!1===P){n={value:E.value,validateOnChange:!0,error:e(E.value,N.value)};b(n)}}function U(e,a){console.log("handle change called");var t=a.target.name;console.log(t);var n=a.target.value;if(console.log(d.value),"name"===t&&!0===o.validateOnChange){var l={value:n,validateOnChange:o.validateOnChange,error:e(n)};i(l)}else if("name"===t&&!1===o.validateOnChange){l={value:n,validateOnChange:o.validateOnChange,error:""};i(l)}else if("email"===t&&!0===d.validateOnChange){l={value:n,validateOnChange:d.validateOnChange,error:e(n)};g(l)}else if("email"===t&&!1===d.validateOnChange){l={value:n,validateOnChange:d.validateOnChange,error:""};g(l)}else if("password"===t&&!0===E.validateOnChange){l={value:n,validateOnChange:E.validateOnChange,error:e(n)};b(l)}else if("password"===t&&!1===E.validateOnChange){l={value:n,validateOnChange:E.validateOnChange,error:""};b(l)}else if("confirmPassword"===t&&!0===N.validateOnChange){l={value:n,validateOnChange:N.validateOnChange,error:e(E.value,n)};C(l)}else if("confirmPassword"===t&&!1===N.validateOnChange){l={value:n,validateOnChange:N.validateOnChange,error:""};C(l)}}function D(e){e.preventDefault(),console.log("handle submit called");var t=j.validateName(o.value),n=j.validateEmail(d.value),l=j.validatePassword(E.value),r=j.validateConfirmPassword(E.value,N.value);if([t,n,l,r].every((function(e){return!1===e})))console.log("no errors found before submission"),function(e,a,t){console.log("register function called"),p.a.post("/api/users/register/newUser/".concat(e,"/").concat(a,"/").concat(t,"/stock/").concat("AAPL","/").concat("NASDAQ","/Notes/").concat(["Buy","Sell"])).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}(o.value,d.value,E.value),v.a.set("name",o.value),v.a.set("email",d.value),v.a.set("pass",E.value),i(a.email),g(a.email),b(a.password),C(a.confirmPassword),I(!1),B(!0),setTimeout((function(){B(!1)}),1500),window.location.href="/watchlist";else{var c={value:o.value,validateOnChange:!0,error:t};i(c);var s={value:d.value,validateOnChange:!0,error:n};g(s);var m={value:E.value,validateOnChange:!0,error:l};b(m);var u={value:N.value,validateOnChange:!0,error:r};C(u)}}return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement("div",{className:"card col-sm-6"},l.a.createElement("h4",{className:"card-title text-center"},"Sign Up"),l.a.createElement("div",{className:"card-body"},L&&l.a.createElement("p",{className:"text-success text-center"},"Success, All fields are validated"),l.a.createElement("form",{onSubmit:function(e){return D(e)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",value:o.value,placeholder:"Enter your name",className:k()("form-control",{"is-valid":!1===o.error},{"is-invalid":o.error}),onChange:function(e){return U(j.validateName,e)},onBlur:function(e){return M(j.validateName,e)}}),l.a.createElement("div",{className:"invalid-feedback"},o.error)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",name:"email",value:d.value,placeholder:"Enter your email",className:k()("form-control",{"is-valid":!1===d.error},{"is-invalid":d.error}),onChange:function(e){return U(j.validateEmail,e)},onBlur:function(e){return M(j.validateEmail,e)}}),l.a.createElement("div",{className:"invalid-feedback"},d.error)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",name:"password",value:E.value,placeholder:"Enter your password",className:k()("form-control",{"is-valid":!1===E.error},{"is-invalid":E.error}),onChange:function(e){return U(j.validatePassword,e)},onBlur:function(e){return M(j.validatePassword,e)}}),l.a.createElement("div",{className:"invalid-feedback"},E.error)),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"password",name:"confirmPassword",value:N.value,placeholder:"Confirm",className:k()("form-control",{"is-valid":!1===N.error},{"is-invalid":N.error}),onChange:function(e){return U(j.validateConfirmPassword,e)},onBlur:function(e){return M(j.validateConfirmPassword,e)}}),l.a.createElement("div",{className:"invalid-feedback"},N.error)),l.a.createElement("button",{type:"submit",className:"btn registerButton btn-light col-sm-2",onMouseDown:function(){return D}},"Sign Up"),l.a.createElement("button",{className:"btn registerButton btn-dark col-sm-2",onClick:function(){window.location.href="/login/"},style:{margin:"25px"}},"Login")))))},A=t(90),T=t(4);t(274),t(275);var L=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(0),s=Object(c.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)({name:sessionStorage.getItem("sessionName"),email:sessionStorage.getItem("sessionEmail"),password:sessionStorage.getItem("sessionPassword"),authenticated:sessionStorage.getItem("sessionAuthenticated")}),d=Object(c.a)(u,2),g=(d[0],d[1],Object(n.useState)([])),f=Object(c.a)(g,2),h=f[0],E=f[1];function b(){console.log("get watchlist running"),p.a.post("/api/users/watchlist/id/".concat(v.a.get("email"),"/").concat(v.a.get("pass"))).then((function(e){e&&(E(e.data),console.log("user.name ".concat(v.a.get("name"))),console.log(" This is the res.data: ".concat(JSON.stringify(e.data))),console.log("setting watchlist to data"),v.a.set("watchlist",e.data))})).catch((function(e){console.log(e)})),console.log("run added ".concat(i))}Object(n.useEffect)((function(){b()}),[]);var O=Object(n.useState)(),w=Object(c.a)(O,2),N=w[0],C=w[1];Object(n.useEffect)((function(){var e=[];C(h.map((function(a,t){return console.log("setTickerList is running"),e[t]=a.Ticker,l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("a",{className:"list-group-item col-sm-8",key:a._id,onClick:function(){console.log("selectStock: "),v.a.set("currentStock","".concat(a.Ticker.toUpperCase()),{sameSite:"strict",expires:1}),console.log("current stock: "+JSON.stringify(v.a.get("currentStock"))),window.location.href="/home"}},l.a.createElement("div",null,a.Ticker.toUpperCase())),l.a.createElement("button",{className:"btn btn-dark removeButton col-sm-2",onClick:function(){!function(e){var a=e.Ticker;console.log("this is remove stock ".concat(a)),p.a.post("/api/users/watchlist/remove/".concat(v.a.get("email"),"/").concat(v.a.get("pass"),"/").concat(a)).then((function(e){console.log(e.data)})).then(b).catch((function(e){console.log(e)}))}(a)}},"Remove"))}))),v.a.set("tickerList",JSON.stringify(e))}),[h]);var S=Object(n.useState)(""),j=Object(c.a)(S,2),y=j[0],k=j[1];function P(){console.log(t),p.a.post("/api/users/watchlist/add/".concat(t,"/").concat(v.a.get("email"),"/").concat(v.a.get("pass"))).then((function(e){console.log(e),k(e.data)})).then(b).catch((function(e){console.log(e)})),m(i+1)}return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-sm-6"},l.a.createElement("h3",{class:"card-title"},"Watchlist"),l.a.createElement("div",{className:"form",onSubmit:function(e){return e.preventDefault(),console.log("".concat(t," ").concat(v.a.get("email")," ").concat(v.a.get("pass"))),void P()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-text"},l.a.createElement("input",{type:"text",name:"ticker",value:t.value,placeholder:"Enter Ticker Here",className:"form-control",onChange:function(e){r(e.target.value)}})),y),l.a.createElement("div",{className:"btn btn-light col-sm-4",type:"submit",onClick:P,style:{margin:"25px"}},"Add Stock"),l.a.createElement("ul",{className:"col-7-md list-group list-group-flush"},N))))))};var B=function(){return l.a.createElement(b,null)};t(276);var M=function(){var e=Object(n.useState)({name:"default",email:"default@email.com",password:"password",authenticated:!1}),a=Object(c.a)(e,2),t=a[0],r=a[1];Object(n.useEffect)((function(){sessionStorage.setItem("sessionName",t.name)}),[t.name]),Object(n.useEffect)((function(){sessionStorage.setItem("sessionEmail",t.email)}),[t.email]),Object(n.useEffect)((function(){sessionStorage.setItem("sessionPassword",t.password)}),[t.password]),Object(n.useEffect)((function(){sessionStorage.setItem("sessionAuthenticated",t.authenticated)}),[t.authenticated]);var o=Object(n.useMemo)((function(){return{user:t,setUser:r}}),[t,r]);return l.a.createElement(s.Provider,{value:o},l.a.createElement("div",{className:"App"},l.a.createElement(A.a,null,l.a.createElement(T.d,null,l.a.createElement(T.b,{path:"/",exact:!0},l.a.createElement(T.a,{to:"/login"})),l.a.createElement(T.b,{path:"/home",exact:!0},l.a.createElement(O,null)),l.a.createElement(T.b,{path:"/login",exact:!0},l.a.createElement(P,null)),l.a.createElement(T.b,{path:"/register",exact:!0},l.a.createElement(I,null)),l.a.createElement(T.b,{path:"/watchlist",exact:!0},l.a.createElement(L,null)),l.a.createElement(T.b,{path:"/test-page",exact:!0},l.a.createElement(B,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},92:function(e,a,t){e.exports=t(281)},97:function(e,a,t){},98:function(e,a,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.347af6a0.chunk.js.map