(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{10:function(e,a,t){e.exports=t(29)},15:function(e,a,t){},16:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(9),s=t.n(c),r=(t(15),t(16),t(1)),o="https://raw.githubusercontent.com/binaryprotagonist/adyproductiondevelopmenttask/gh-pages/img",i=function(){var e=Object(l.useState)(0),a=Object(r.a)(e,2),t=(a[0],a[1]);return Object(l.useEffect)((function(){window.addEventListener("scroll",(function(){t(window.pageYOffset)}))}),[]),n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{className:"navbar-brand",href:"#a"},n.a.createElement("img",{src:"".concat(o,"/header.JPG"),className:"img-custom img-header"})),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active",href:""},"Home")),[{label:"PODCAST",url:"/"},{label:"BLOG",url:"/"},{label:"EVENTS",url:"/"},{label:"CONTACT",url:"/"},{label:"STORY",url:"/"},{label:"CHARITY",url:"/"}].map((function(e,a){return n.a.createElement("li",{key:a,className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:e.url},e.label))})),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link",href:"#a",id:"navbardrop","data-toggle":"dropdown"},n.a.createElement("i",{className:"fas fa-globe-americas"})," English"),n.a.createElement("div",{className:"dropdown-menu"},n.a.createElement("a",{className:"dropdown-item",href:"#a"},"English"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#a"},n.a.createElement("i",{className:"fas fa-search"})))))))},m=t(2),u=t.n(m),d=function(){var e=[{label:"Ady Production, LLC ",link:"/"},{label:"Copyright ".concat(u()().format("YYYY"),"  "),link:"/"},{label:"All Rights Reserved",link:"/"}];return n.a.createElement("div",{className:"container-fluid footer"},n.a.createElement("ul",null,e.map((function(a,t){return n.a.createElement(l.Fragment,{key:t},n.a.createElement("li",null,n.a.createElement("a",{href:a.link},a.label)),t<e.length-1?n.a.createElement("li",{className:"liSeparator"},"|"):null)}))))},p=function(){var e=Object(l.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1];return n.a.createElement("div",{className:"subscribeForm"},n.a.createElement("form",{method:"post",onSubmit:function(e){e.preventDefault()},className:"form-inline text-center container"},n.a.createElement("label",null,"Get in touch and stay updated with our news and events"),n.a.createElement("input",{type:"text",className:"form-control border0",placeholder:"johndoe@gmail.com",onChange:function(e){return c(e.target.value)},value:t}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("input",{className:"btn btn-success border0",type:"submit",value:"SUBSCRIBE"}))))},E=t(5),b=t.n(E),g=function(e){var a=e.articleType,t=e.title,l=e.publishautor,c=e.publishAt,s=e.readingTime,r=e.body,i=e.img,m=e.url,u=e.white;return n.a.createElement("div",{className:"article"},a?n.a.createElement("h6",null,a):null,n.a.createElement("img",{src:"".concat(o,"/path.png"),className:"img-line"}),n.a.createElement("div",{className:"articletitle"},b()(t)),n.a.createElement("p",{className:u?"text-white":""}," ",l,"  ",c," | ",s," "),i?n.a.createElement("img",{src:i,alt:t}):null,n.a.createElement("div",{className:"articleBody"},b()(r)),n.a.createElement("a",{className:u?"text-white":"",href:m},"Continue reading >>"))},v=function(e){var a=e.description,t=e.source,l=e.time,c=e.url,s=e.white;return n.a.createElement("div",{className:"videoclip"},n.a.createElement("p",null,a),n.a.createElement("p",{className:s?"text-white":""}," ",t," | ",l," "),n.a.createElement("iframe",{width:"100%",height:"230",src:c,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},N=function(e){var a=e.className,t=e.url;return n.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:"socialIcon ".concat(a)}))},f=function(){return n.a.createElement("div",{className:"social"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-1 col-md-1"}),n.a.createElement("div",{className:"col-lg-6 col-md-6 social-block flex",style:{justifyContent:"end"}},n.a.createElement("p",{className:"socialLabel"},"ALWAYS STAY",n.a.createElement("br",null),"CONNECTED"),[{className:"fab fa-facebook-square left-s",url:"https://www.facebook.com/mgdagostini/"},{className:"fab fa-linkedin-in left-s",url:"https://www.linkedin.com/in/andreadagostini"},{className:"fab fa-twitter left-s",url:"https://twitter.com/mrdagostini?lang=en"},{className:"fab fa-youtube left-s",url:"https://www.youtube.com/channel/UCpNMuu_0mdAZY9eeuNymiwQ/videos"},{className:"fab fa-instagram left-s",url:"https://www.instagram.com/mrdagostini/?hl=en"},{className:"fas fa-envelope-open left-s",url:"/"}].map((function(e,a){return n.a.createElement(N,Object.assign({key:a},e))}))),n.a.createElement("div",{className:"col-lg-4 col-md-4 social-block flex",style:{justifyContent:"center"}},n.a.createElement("p",{className:"socialLabel custom-para",style:{marginRight:"30px"}},"KEEP YOURSELF",n.a.createElement("br",null),"UPDATED"),n.a.createElement("button",{className:"btn btn-primary border0 socialBtn"},"SUBSCRIBE"))))},h=t(3),y=t(4),w=function(){var e=Object(l.useState)({first_name:"",last_name:"",email:"",website:"",phone_no:"",message:"",schedule_a_call:""}),a=Object(r.a)(e,2),t=a[0],c=a[1],s=Object(l.useState)({code:"+1",number:""}),o=Object(r.a)(s,2),i=o[0],m=o[1],u=function(e,a){c(Object(y.a)({},t,Object(h.a)({},e,a)))};Object(l.useEffect)((function(){i&&i.code&&i.number&&u("phone_no","".concat(i.code," ").concat(i.number))}),[i]);return n.a.createElement("form",{method:"post",onSubmit:function(e){e.preventDefault()},className:"contactForm"},n.a.createElement("h3",{className:"clipTitle"},"GET IN TOUCH"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"form-group mb-4"},n.a.createElement("input",{type:"text",className:"form-control contactInput brBottom",onChange:function(e){return u("first_name",e.target.value)},value:t.first_name,placeholder:"First Name*"})),n.a.createElement("div",{className:"form-group mb-4"},n.a.createElement("input",{type:"email",className:"form-control contactInput brBottom",onChange:function(e){return u("email",e.target.value)},value:t.email,placeholder:"Email Address*"})),n.a.createElement("div",{className:"input-group mb-4"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("select",{className:"form-control contactInput brBottom",onChange:function(e){return m(Object(y.a)({},i,{code:e.target.value}))},value:t.phone_no.code},n.a.createElement("option",null,"+1"),n.a.createElement("option",null,"+91"))),n.a.createElement("input",{type:"number",className:"form-control contactInput brBottom",onChange:function(e){return m(Object(y.a)({},i,{number:e.target.value}))},value:t.phone_no.number,placeholder:"Phone Number"})),n.a.createElement("div",{className:"input-group mb-6"},n.a.createElement("div",{className:"input-group-prepend"}),n.a.createElement("input",{type:"date",className:"form-control cpntact-l contactInput brBottom",onChange:function(e){return u("schedule_a_call",e.target.value)},value:t.schedule_a_call,placeholder:"Schedule a call"}),n.a.createElement("i",{className:"fas fa-calendar-day custom-icon"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"submit",value:"SUBMIT",className:"contactSubmit btn btn-primary"}))),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement("div",{className:"form-group mb-4"},n.a.createElement("input",{type:"text",className:"form-control contactInput brBottom",onChange:function(e){return u("last_name",e.target.value)},value:t.last_name,placeholder:"Last Name*"})),n.a.createElement("div",{className:"form-group mb-4"},n.a.createElement("input",{type:"url",className:"form-control contactInput brBottom",onChange:function(e){return u("website",e.target.value)},value:t.website,placeholder:"Website"})),n.a.createElement("div",{className:"form-group mb-4"},n.a.createElement("label",{style:{color:"#979797",fontFamily:"Lato Regular"}},"Message"),n.a.createElement("textarea",{className:"form-control contactTextArea brBottom",onChange:function(e){return u("message",e.target.value)},value:t.message})))))},T=function(e){var a=e.date,t=e.description,l=e.url;return n.a.createElement("tr",null,n.a.createElement("td",null,u()(a).format("DD")),n.a.createElement("td",{className:"black-table"},t),n.a.createElement("td",null,n.a.createElement("a",{className:"positon-all",href:l},"DETAILS")))},A=function(){return n.a.createElement("div",{className:"events"},n.a.createElement("h3",{className:"clipTitle"},"EVENTS"),n.a.createElement("table",{className:"table",style:{marginTop:"-15px"}},n.a.createElement("tbody",null,n.a.createElement("tr",{className:"table-calender"},n.a.createElement("td",{className:"black-a"},"April"),n.a.createElement("td",{className:"light"},"May"),n.a.createElement("td",{className:"light"},"June"),n.a.createElement("td",{className:"light"},"July"),n.a.createElement("td",null," ",n.a.createElement("i",{className:"fas fa-angle-left light"})," ",n.a.createElement("i",{className:"fas fa-angle-right"})," ")))),n.a.createElement("table",{className:"table",style:{marginTop:"-23px"}},n.a.createElement("tbody",null,[{date:"2020-04-03",description:"Lorem ipsum vero eos et accusamus et iusto odio stum  deleniti atque corrupti quos dolores",url:"/"},{date:"2020-04-05",description:"At vero eos et et iusto odio stum  deleniti atque corrupti quos dolores dolor los amigos",url:"/"},{date:"2020-04-13",description:"At vero eos et et iusto odio stum  deleniti atque corrupti quos dolores dolor los amigos",url:"/"},{date:"2020-04-28",description:"At vero eos et et iusto odio stum  deleniti atque corrupti quos dolores dolor los amigos",url:"/"}].map((function(e,a){return n.a.createElement(T,Object.assign({key:a},e))})))))},q=function(){var e=[{articleType:"FEATURED ARTICLE",title:"<h1>IF CONTENT IS KING, <br />THEN WHO IS QUEEN?</h1>",publishAt:"2 days ago",readingTime:"15min read",img:"".concat(o,"/1.JPG"),url:"/",body:"<p>At vero  eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium voluptatum deleniti atque corrupti quos dolores et quas molestiasexcepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quosdolores et quas molestias excepturi sint occaecati elum dolor\u2026</p>"},{articleType:"GUEST CONTRIBUTOR",title:"<h1>HOW USER EXPERIENCE  <br /> TRANSLATES TO MARKETING</h1>",publishautor:"By Mattia Rasulo |",publishAt:"2 days ago",readingTime:"15min read",url:"/",body:"<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium voluptatum deleniti atque corrupti quos dolores et quas molestiasexcepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quosdolores et quas molestias excepturi sint occaecati elum dolor\u2026</p>"}],a=[{description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium volu At vero eos et accusamus ",source:"YouTube clip",time:"3:35",url:"https://www.youtube.com/embed/PsCmUF53Yog"},{description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium volu At vero eos et accusamus ",source:"Vimeo clip",time:"4:00",url:"https://www.youtube.com/embed/fInU5iD6318"},{description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium volu At vero eos et accusamus ",source:"YouTube clip",time:"8:35",url:"https://www.youtube.com/embed/auqCjF8GQjo"}];return n.a.createElement("div",null,n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"row",style:{width:"100%"}},n.a.createElement("div",{className:"col-lg-2 col-md-2"}),n.a.createElement("div",{className:"col-lg-4 col-md-4 mainLeft text-right"},n.a.createElement("ul",null,n.a.createElement("li",null,"CONTENT"),n.a.createElement("li",null,"MARKETING"),n.a.createElement("li",null,"CREATIVITY"))),n.a.createElement("div",{className:"col-lg-6 col-md-6 mainRight"},n.a.createElement("h3",null,"EVOLVED"),n.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui",n.a.createElement("br",null),"blanditiis praesentium voluptatum deleniti atque corrupti quos",n.a.createElement("br",null),"dolores et quas molestias excepturi sint occaecati cupiditate.")))),n.a.createElement(p,null),n.a.createElement("div",{className:"",style:{paddingTop:"80px",paddingBottom:"50px",backgroundColor:"#fff"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-1 col-md-1"}),n.a.createElement("div",{className:"col-lg-5 col-md-5"},e.map((function(a,t){return n.a.createElement(n.a.Fragment,{key:t},n.a.createElement(g,a),t<e.length-1?n.a.createElement("hr",{className:"articleSeparator"}):null)}))),n.a.createElement("div",{className:"col-lg-1 col-md-1"}),n.a.createElement("div",{className:"col-lg-4 col-md-4"},n.a.createElement("h3",{className:"clipTitle"},"FRESH CLIP!"),a.map((function(e,t){return n.a.createElement(n.a.Fragment,{key:t},n.a.createElement(v,e),t<a.length-1?n.a.createElement("hr",{className:"clipSeparator"}):null)}))))),n.a.createElement(f,null),n.a.createElement("div",{className:"article-last",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#FFB900"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-1 col-md-1"}),n.a.createElement("div",{className:"col-lg-5 col-md-5"},n.a.createElement("div",{style:{marginBottom:"35px"}},n.a.createElement(g,Object.assign({},{title:"<h1>WHAT IS PERFORMANCE  <br /> MARKETING?</h1>",publishAt:"12 days ago",readingTime:"10min read",url:"/",body:"<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium voluptatum deleniti atque corrupti quos dolores et quas molestiasexcepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium voluptatum deleniti atque corrupti quosdolores et quas molestias excepturi sint occaecati elum dolor\u2026</p>"},{white:!0}))),n.a.createElement("a",{href:"#a",className:"link"},"MORE ARTICLES")),n.a.createElement("div",{className:"col-lg-1 col-md-1"}),n.a.createElement("div",{className:"col-lg-4 col-md-4"},n.a.createElement("h3",{className:"clipTitle"},"Popular"),n.a.createElement("div",{style:{marginBottom:"35px"}},n.a.createElement(v,Object.assign({},{description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiispraesentium volu At vero eos et accusamus ",source:"Vimeo clip",time:"3:35",url:"https://www.youtube.com/embed/kvxZ-EG700o"},{white:!0}))),n.a.createElement("a",{href:"#a",className:"link"},"MORE VIDEOS")))),n.a.createElement("div",{className:"",style:{paddingTop:"50px",paddingBottom:"50px",backgroundColor:"#fff"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-1"}),n.a.createElement("div",{className:"col-lg-6 col-md-6"},n.a.createElement(w,null)),n.a.createElement("div",{className:"col-lg-4 col-md-6"},n.a.createElement(A,null)))))};var C=function(){return n.a.createElement("div",{className:"App",style:{backgroundColor:"#000000"}},n.a.createElement("div",{className:"",style:{position:"relative"}},n.a.createElement(i,null),n.a.createElement(q,null),n.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.db04fb91.chunk.js.map