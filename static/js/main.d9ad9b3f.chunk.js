(this["webpackJsonpwedding-website"]=this["webpackJsonpwedding-website"]||[]).push([[0],{26:function(e,t,n){e.exports=n(56)},56:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(3),c=n.n(o),r=n(5),i=n(2),u="calc(100% - ".concat("50px",")"),d="0px 4px 8px rgba(0, 0, 0, 0.2)",s={alignContent:"center",alignItems:"flex-top",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",width:"100%"},m={color:"#054b30",fontFamily:"sans-serif",fontSize:"20px",fontWeight:200,textAlign:"center"},p=Object(i.a)({},m,{color:"#fff"}),b=Object(i.a)({},s,{background:"rgba(5, 50, 33, .7)",minHeight:"5vh",position:"fixed",zIndex:100}),g=Object(i.a)({},p,{textDecoration:"none",minWidth:"20%"}),f=Object(i.a)({},s,{backgroundAttachment:"fixed",backgroundImage:'url("../images/eucalyptus-upper.png")',backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100vh",filter:"drop-shadow(".concat(d,")")}),h={fontSize:"25px",background:"#fff",clipPath:"polygon(\n    0% ".concat("50px",",\n    ").concat("50px"," ").concat("50px",",\n    ").concat("50px"," 0%,\n    ").concat(u," 0%,\n    ").concat(u," ").concat("50px",",\n    100% ").concat("50px",",\n    100% ").concat(u,",\n    ").concat(u," ").concat(u,",\n    ").concat(u," 100%,\n    ").concat("50px"," 100%,\n    ").concat("50px"," ").concat(u,",\n    0% ").concat(u,")"),maxWidth:"600px",padding:"3rem"},y=Object(i.a)({},m,{border:"none",cursor:"pointer",fontSize:"25px",padding:0,textDecoration:"underline",outline:"none"}),E={background:"rgba(5, 50, 33, .7)",padding:"30px",boxShadow:d},x={listStyle:"none",paddingInlineStart:0},k={background:"#054b30",color:"#fff",padding:"100px 0"},v={maxWidth:"400px",padding:"30px",margin:"10px"},w={height:"50vh",width:"100%"},C=Object(i.a)({},s,{alignItems:"stretch",padding:"100px 0",backgroundImage:'url("../images/branch-frame.png")',backgroundRepeat:"no-repeat"}),A={maxWidth:"200px",background:"#fff",padding:"30px",margin:"10px",boxShadow:d},O={fontSize:"16px",opacity:.6,padding:"5px"},S=n(19),B=function(e){var t=e.destination;return l.a.createElement(S.NavHashLink,{style:g,smooth:!0,to:"#".concat(t)},t)},W=function(){return l.a.createElement("div",{style:b},l.a.createElement(B,{destination:"Home"}),l.a.createElement(B,{destination:"Details"}),l.a.createElement(B,{destination:"Accommodations"}))},j=n(25),D=n(22),F=n.n(D),R="Alyssa and Danny's Wedding",H="Come celebrate with us!",I="The Faculty Club, Minor Ln, Berkeley, CA 94720, USA",z="20200815T230000Z",T="20200816T060000Z",L=[{label:"Google",href:"https://calendar.google.com/calendar/render?action=TEMPLATE&dates=".concat(z,"/").concat(T,"&location=").concat(I,"&text=").concat(R,"&details=").concat(H)},{label:"Outlook",href:"https://outlook.live.com/owa/?rru=addevent&startdt=".concat(z,"&enddt=").concat(T,"&subject=").concat(R,"&location=").concat(I,"&body=").concat(H,"&allday=false&uid=1582497358565_57287884127&path=/calendar/view/Month")},{label:"Yahoo",href:"https://calendar.yahoo.com/?v=60&view=d&type=20&title=".concat(R,"&st=").concat(z,"&dur=7:00&desc=").concat(H,"&in_loc=").concat(I)}],P=function(e){var t=e.href,n=e.label;return l.a.createElement("li",null,l.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:p},n))},J=function(){var e=l.a.useState(!1),t=Object(j.a)(e,2),n=t[0],a=t[1];return l.a.createElement(F.a,{containerStyle:E,isOpen:n,disableReposition:!0,position:["right","bottom"],onClickOutside:function(){return a(!1)},content:function(){return l.a.createElement("div",{style:p},"Add To Calendar",l.a.createElement("ul",{style:x},L.map((function(e){return l.a.createElement(P,Object.assign({},e,{key:e.label}))}))))}},l.a.createElement("button",{onClick:function(){return a(!n)},style:y},"August 15, 2020"))},M=function(){return l.a.createElement("div",{id:"Home",style:f},l.a.createElement("div",{style:h},l.a.createElement("h3",null,"Alyssa and Danny's Wedding"),l.a.createElement("p",null,"Come celebrate with us!"),l.a.createElement("p",null,l.a.createElement(J,null),l.a.createElement("br",null),"Berkeley, CA")))},U=[{label:"Welcome Dinner",location:"Roberts Park",date:"Friday, August 14",time:"3pm - 8pm",blurb:"Join us for a low key dinner in our favorite Bay Area park. Food, drinks, and games will be provided."},{label:"Wedding Ceremony and Reception",location:"The Faculty Club",date:"Friday, August 15",time:"4pm - 10pm",blurb:"Both our ceremony and reception are at the Faculty Club on UC Berkeley campus."}],Z=function(e){var t=e.label,n=e.location,a=e.date,o=e.time,c=e.blurb;return l.a.createElement("div",{style:v},l.a.createElement("h4",null,t),l.a.createElement("div",null,n,l.a.createElement("div",{style:O},a,l.a.createElement("br",null),o),c))},$=function(){return l.a.createElement("div",{id:"Details",style:k},l.a.createElement("h3",null,"Details"),l.a.createElement("div",{style:s},U.map((function(e){return l.a.createElement(Z,Object.assign({},e,{key:e.label}))}))))},_=n(23),q=n.n(_),G=n(24),K=[{label:"Faculty Club",lat:37.871789,lng:-122.255838},{label:"Bancroft Hotel",lat:37.869124,lng:-122.255098},{label:"Berkeley City Club",lat:37.86751,lng:-122.262759},{label:"Roberts Redwood Regional Park",lat:37.81219,lng:-122.175133}],N=function(e){var t=e.label;return l.a.createElement("div",null,l.a.createElement(G.a,{size:"2rem"}),t)},V=function(){return l.a.createElement("div",{style:w},l.a.createElement(q.a,{bootstrapURLKeys:{key:"AIzaSyDhvy-P3Hl0L5kFSkLcqDOvEscxWVmIWFw"},defaultCenter:{lat:37.836576,lng:-122.227777},defaultZoom:12.5},K.map((function(e){return l.a.createElement(N,Object.assign({},e,{key:e.label}))}))))},Y=[{label:"Berkeley City Club",blurb:"Designed by Julia Morgan, this unique historical landmark is walking distance from our wedding venue!",price:"$219 per night",contact:"(510) 848-7800"},{label:"Bancroft Hotel",blurb:"Situated across the street from campus, the Bancroft Hotel offers a cute stay in the heart of campus.",price:"$149 per night",contact:"(510) 549-1000"}],Q=function(e){var t=e.label,n=e.blurb,a=e.price,o=e.contact;return l.a.createElement("div",{style:A},l.a.createElement("h4",null,t),l.a.createElement("p",null,n),l.a.createElement("div",{style:O},"Block rate: ",a,l.a.createElement("br",null),o))},X=function(){return l.a.createElement("div",{id:"Accommodations",style:C},Y.map((function(e){return l.a.createElement(Q,Object.assign({},e,{key:e.label}))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(r.BrowserRouter,null,l.a.createElement((function(){return l.a.createElement("div",{style:m},l.a.createElement(W,null),l.a.createElement(M,null),l.a.createElement($,null),l.a.createElement(V,null),l.a.createElement(X,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.d9ad9b3f.chunk.js.map