(this["webpackJsonpwhy-waste"]=this["webpackJsonpwhy-waste"]||[]).push([[0],{18:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){e.exports=a(90)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},70:function(e,t,a){},76:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),r=a.n(c);a(11),a(43),a(44),a(45);var o=function(e){return l.a.createElement("button",{className:"toggle-button"},l.a.createElement("div",{className:"toggle-button_line"}),l.a.createElement("div",{className:"toggle-button_line"}),l.a.createElement("div",{className:"toggle-button_line"}))};a(46);var m=function(){return l.a.createElement("h1",null,"WhyWaste?")};var s=function(e){return l.a.createElement("header",{className:"toolbar"},l.a.createElement("nav",{className:"toolbar_navigation"},l.a.createElement("div",null,l.a.createElement(o,null)),l.a.createElement("div",{className:"toolbar-logo"},l.a.createElement("a",{href:"/"},l.a.createElement(m,null))),l.a.createElement("div",{className:"spacer"}),l.a.createElement("div",{className:"toolbar_navigation-items"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Donors")),l.a.createElement("li",null,l.a.createElement("a",{href:"/register"},"Register"))))))};a(47);a(48);var i=a(3),u=(a(18),a(6));var d=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=/^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/.test(c);return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"search-box"},l.a.createElement("input",{type:"text",placeholder:"Enter your postcode: e.g. M1 3ER",value:c,onChange:function(e){r(e.target.value)},"aria-required":"true"}),o?l.a.createElement(u.b,{to:"/SearchResults?postcode=".concat(c)},l.a.createElement("button",{class:"btn btn-search"},"Search")):l.a.createElement("button",{className:"btn btn-search",disabled:!0},"Search"),c.length>5&&!o?l.a.createElement("h5",{className:"validation"},"We couldn't recognise that postcode \u2013 check and try again."):""))};var E=function(e){return l.a.createElement("div",{style:{height:"100%"}},l.a.createElement("main",{style:{marginTop:"56px"}},l.a.createElement(s,null),l.a.createElement("h3",null,"Bridging the gap ",l.a.createElement("br",null)," between need and surplus"),l.a.createElement(d,null),l.a.createElement(u.b,{to:"/Donate",id:"main-link"},"I want to donate food")))},f=a(34),p=a.n(f),h=(a(70),a(35)),v=a.n(h),g=(a(29),a(36));a(75);var b=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid container-sm container-md container-lg"},l.a.createElement("div",{className:"row results-items",onClick:function(){r(!0)}},l.a.createElement("div",{className:"col-5 col-sm-5 col-md-5 col-lg-6"},e.Foodtype),l.a.createElement("div",{className:"col-1 col-sm-1 col-md-1 col-lg-1"},e.Quantity),l.a.createElement("div",{className:"col-3 col-sm-3 col-md-3 col-lg-2"},v()(e.UseByDate).format("ddd, MMM Do")),l.a.createElement("div",{className:"col-3 col-sm-3 col-md-3 col-lg-3"},e.Name))),l.a.createElement(g.Modal,{open:c,onClose:function(){r(!1)}},l.a.createElement("div",{className:"container-modal"},l.a.createElement("h1",null,"Please collect your meal at :"),l.a.createElement("br",null),l.a.createElement("h5",null,"The Market Place"),l.a.createElement("h5",null,"Bolton"),l.a.createElement("h5",null,"BL1 2AL"),l.a.createElement("h5",null,"01204 937 335"),l.a.createElement("h5",null,"some_one@prezzo.com"))))};a(76);var y=function(e){return l.a.createElement("div",{className:"container-counter"},0===e.count?l.a.createElement("p",null,"Sorry, we didn't find any meals available here"):l.a.createElement("p",null,"There are ",e.count," meals available:"))},N=a(8),w=a(37),j=a.n(w);a(89);var O=function(e){return l.a.createElement("div",{className:"container-fluid container-sm container-md container-lg header-results"},l.a.createElement("div",{className:"row header-items"},l.a.createElement("div",{className:"item col-4 col-sm-5 col-md-5 col-lg-6"},"Dish"),l.a.createElement("div",{className:"item col-1 col-sm-1 col-md-1 col-lg-1"},"Qty."),l.a.createElement("div",{className:"item col-3 col-sm-3 col-md-3 col-lg-2"},"Consume by"),l.a.createElement("div",{className:"item col-3 col-sm-3 col-md-3 col-lg-3"},"From")))};var x=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(N.f)();return console.log(o),Object(n.useEffect)((function(){var t=j.a.parse(e.location.search).postcode;p.a.get("https://z0akxs8ksh.execute-api.eu-west-1.amazonaws.com/dev/restaurant/".concat(t)).then((function(e){console.log("Success",e.data),r(e.data)})).catch((function(e){console.log("Error",e)}))}),[]),l.a.createElement("main",null,l.a.createElement(s,null),l.a.createElement(y,{count:c.length}),0===c.length?"":l.a.createElement(O,null),l.a.createElement("div",{className:"container"},c.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,{key:e.FoodID,Foodtype:e.FoodType,Quantity:e.Quantity,UseByDate:e.UseByDate,Name:e.Name}))}))))};a(31);var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement("form",{className:"donate-form"},l.a.createElement("header",null,l.a.createElement("h1",null,"Register today!")),l.a.createElement("div",{class:"form-row"},l.a.createElement("div",{class:"form-group col-md-6"},l.a.createElement("label",{for:"companyName"},"Company name"),l.a.createElement("input",{type:"text",class:"form-control",id:"companyName"})),l.a.createElement("div",{class:"form-group col-md-6"},l.a.createElement("label",{for:"email"},"E-mail"),l.a.createElement("input",{type:"text",class:"form-control",id:"e-mail"}))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"address"},"Address"),l.a.createElement("input",{type:"text",class:"form-control",id:"address"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"inputAddress2"},"Address 2"),l.a.createElement("input",{type:"text",class:"form-control",id:"inputAddress2",placeholder:"Apartment, studio, or floor"})),l.a.createElement("div",{class:"form-row"},l.a.createElement("div",{class:"form-group col-md-6"},l.a.createElement("label",{for:"inputCity"},"City"),l.a.createElement("input",{type:"text",class:"form-control",id:"inputCity"})),l.a.createElement("div",{class:"form-group col-md-2"},l.a.createElement("label",{for:"inputPostcode"},"Postcode"),l.a.createElement("input",{type:"text",class:"form-control",id:"inputPostcode"}))),l.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Save")))};var k=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),m=Object(i.a)(o,2),u=m[0],d=m[1],E=Object(n.useState)(""),f=Object(i.a)(E,2),p=f[0],h=f[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),b=(g[0],g[1],Object(n.useState)(!0)),y=Object(i.a)(b,2),N=y[0],w=y[1],j=Object(n.useState)(!1),O=Object(i.a)(j,2),x=O[0],S=O[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),!1===N&&!0===x?l.a.createElement("h3",{className:"thanks-message",value:x},"Your dish has been added. Thank you for your contribution."):l.a.createElement("form",{className:"donate-form",value:N},l.a.createElement("header",null,l.a.createElement("h1",null,"Donate today!"),l.a.createElement("h4",null,"Thank you for your contribution")),l.a.createElement("div",{class:"form-row"},l.a.createElement("div",{class:"form-group col-md-12"},l.a.createElement("label",{for:"dishName"},"Dish name"),l.a.createElement("input",{type:"dish",class:"form-control",id:"dishName",value:c,onChange:function(e){r(e.target.value)}})),l.a.createElement("div",{class:"form-group col-md-12"},l.a.createElement("label",{for:"quantity"},"Quantity"),l.a.createElement("input",{type:"quantity",class:"form-control",id:"quantity",value:u,onChange:function(e){d(e.target.value)}}))),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"consumeBy"},"Consume By"),l.a.createElement("input",{type:"date",class:"form-control",id:"consumeBy",value:p,onChange:function(e){h(e.target.value)}})),l.a.createElement("button",{type:"text",class:"btn btn-primary",onClick:function(e){e.preventDefault(),console.log(c,u,p),w(!1),S(!0)}},"Donate")))};var C=function(){return l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/SearchResults",component:x}),l.a.createElement(N.a,{exact:!0,path:"/Donate",component:k}),l.a.createElement(N.a,{exact:!0,path:"/Register",component:S}),l.a.createElement(N.a,{exact:!0,path:"/",component:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(u.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.38805867.chunk.js.map