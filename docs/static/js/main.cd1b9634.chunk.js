(this["webpackJsonpmatter-js-spike"]=this["webpackJsonpmatter-js-spike"]||[]).push([[0],{199:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(75),o=n.n(r),a=(n(86),n(7)),s=n(4),l=n(27),d=n(29),j=n(76),u=n.n(j),b=n(81),p=n(3),x=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],r=n[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("button",{type:"button",className:i?"menu-trigger is-active":"menu-trigger",onClick:function(){r(!i)},children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]}),Object(p.jsxs)("div",{className:i?"menu is-active":"menu",children:[Object(p.jsx)("div",{className:"menu-header",children:"Menu"}),Object(p.jsxs)("div",{className:"menu_",children:[Object(p.jsx)("input",{type:"checkbox",id:"menu_bar01",className:"acd-check"}),Object(p.jsx)("label",{htmlFor:"menu_bar01",className:"acd-label",children:"\u30b9\u30c8\u30ed\u30fc"}),Object(p.jsxs)("ul",{id:"links01",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:e.addStraw,children:"\u523a\u3059"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:e.removeStraw,children:"\u5916\u3059"})})]}),Object(p.jsx)("input",{type:"checkbox",id:"menu_bar02"}),Object(p.jsx)("label",{htmlFor:"menu_bar02",children:"\u5473\u4ed8\u3051"}),Object(p.jsxs)("ul",{id:"links02",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){e.setBackgroundColor("#FFC0CB")},children:"\u30a4\u30c1\u30b4\u30df\u30eb\u30af"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){e.setBackgroundColor("#E9ED88")},children:"\u62b9\u8336"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){e.setBackgroundColor("#dcac65")},children:"\u30df\u30eb\u30af\u30c6\u30a3\u30fc"})}),Object(p.jsx)("li",{children:Object(p.jsxs)("a",{children:["\u304a\u597d\u307f",Object(p.jsx)(b.a,{color:e.backgroundColor,onChangeComplete:function(t){e.setBackgroundColor(t.hex)}})]})})]}),Object(p.jsx)("input",{type:"checkbox",id:"menu_bar03"}),Object(p.jsx)("label",{htmlFor:"menu_bar03",children:"\u30d1\u30c3\u30b1\u30fc\u30b8"}),Object(p.jsxs)("ul",{id:"links03",children:[Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){return e.setCupImage("logo.PNG")},children:"\u30b5\u30b9\u30bf\u30d4"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){return e.setCupImage("alley.png")},children:"The array"})}),Object(p.jsx)("li",{children:Object(p.jsx)("a",{onClick:function(){return e.setCupImage("gongcha.png")},children:"Cong tya"})})]})]})]})]})},h=function(e){return Object(p.jsx)(p.Fragment,{children:e.isModalOpen&&Object(p.jsx)("div",{id:"overlay",children:Object(p.jsxs)("div",{id:"content",style:{backgroundImage:"url(sastapi_top_bg_dot.png)",backgroundColor:"#ff2994",position:"relative",borderRadius:"20px"},children:[Object(p.jsx)("div",{className:"icon-circle",onClick:function(){e.setIsModalOpen(!1)},style:{width:"30px",height:"30px",position:"absolute",top:"1px",right:"1px",backgroundColor:"#ff2994"},children:Object(p.jsx)(l.a,{icon:d.b,size:"2x",className:"icon"})}),Object(p.jsx)("img",{src:e.imageData,alt:"myTapioca",style:{width:"100%",borderRadius:"20px"}}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"15px"},children:[Object(p.jsx)("a",{href:e.imageData,id:"myTapioca",download:"myTapioca.png",style:{width:"100%",backgroundColor:"yellow",color:"red",textDecoration:"none",lineHeight:"28.45px",padding:"0 16px",marginRight:"8px",textAlign:"center",borderRadius:"20px"},children:"\u4fdd\u5b58"}),Object(p.jsx)("a",{style:{backgroundColor:"#00acee",width:"100%",textAlign:"center",lineHeight:"24px",display:"flex",justifyContent:"center",borderRadius:"20px"},href:"https://twitter.com/intent/tweet?text=\u30b5\u30b9\u30c6\u30ca\u30d6\u30eb\u30bf\u30d4\u30aa\u30ab\u3084\u3063\u3066\u307f\u305f\uff01%0D%0A&hashtags=\u30b5\u30b9\u30c6\u30ca\u30d6\u30eb\u30bf\u30d4\u30aa\u30ab&url=https://sasutapi.com",children:Object(p.jsx)("img",{src:"2021 Twitter logo - white.png",style:{width:"20px",padding:"6px 0"}})})]})]})})})},g=function(e){var t=window.innerWidth,n=window.innerHeight,i=Object(c.useRef)(),r=Object(c.useRef)(s.Engine.create()),o=r.current.world,j=Object(c.useRef)(!0),b=Object(c.useRef)(!1),g=Object(c.useState)("#dcac65"),O=Object(a.a)(g,2),m=O[0],f=O[1],y=Object(c.useState)(!1),v=Object(a.a)(y,2),C=v[0],k=v[1],w=Object(c.useState)(),S=Object(a.a)(w,2),_=S[0],B=S[1],I=Object(c.useState)(),M=Object(a.a)(I,2),N=M[0],R=M[1];document.body.style="background: ".concat(m),r.current.gravity.x=e.accelerationX,r.current.gravity.y=-e.accelerationY;var E=s.Bodies.rectangle(t/2,n/2,40,n,{render:{fillStyle:"#FF0000"}}),F=s.Constraint.create({pointA:s.Vector.clone({x:E.position.x,y:E.position.y-n/2*.8}),bodyB:E,pointB:{x:0,y:-n/2*.8},length:0});return Object(c.useEffect)((function(){var e=s.Render.create({element:i.current,engine:r.current,options:{width:t,height:n,wireframes:!1,background:"#transparent"}}),c=s.Mouse.create(e.canvas),a=s.MouseConstraint.create(r.current,{mouse:c,constraint:{angularStiffness:0,render:{visible:!1}}});s.Composite.add(o,a);var l=s.Composites.stack(0,0,10,4,1,1,(function(e,t){return s.Bodies.circle(e,t,s.Common.random(30,30),{mass:10,restitution:.01,friction:.01,frictionAir:s.Common.random(.3,.5),render:{sprite:{texture:"./tapioca_".concat(Math.floor(2*Math.random())+1,".png")}}})}));return s.World.add(r.current.world,[l,s.Bodies.rectangle(t/2,-10,t,20,{isStatic:!0,render:{fillStyle:"#000000"}}),s.Bodies.rectangle(-10,n/2,20,n,{isStatic:!0,render:{fillStyle:"#000000"}}),s.Bodies.rectangle(t/2,n+10,t,20,{isStatic:!0,render:{fillStyle:"#000000"}}),s.Bodies.rectangle(t+10,n/2,20,n,{isStatic:!0,render:{fillStyle:"#000000"}})]),s.Engine.run(r.current),s.Render.run(e),function(){s.Render.stop(e),s.World.clear(r.current.world),s.Engine.clear(r.current),e.canvas.remove(),e.canvas=null,e.context=null,e.textures={}}}),[n,t,o]),Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsx)("div",{className:"icon-circle",onClick:function(){k(!0);var e=document.getElementById("target");u()(e).then((function(e){var t=e.toDataURL();R(t)}))},style:{position:"absolute",width:"50px",height:"50px",top:"10px",left:"10px"},children:Object(p.jsx)(l.a,{icon:d.a,size:"2x",className:"icon"})}),Object(p.jsxs)("div",{id:"target",style:{backgroundColor:m},onTouchStart:function(){console.log("down"),b.current=!0},onTouchEnd:function(){console.log("up"),b.current=!1},onTouchMove:function(e){console.log("move")},children:[_&&Object(p.jsx)("img",{src:_,alt:"cupImage",style:{width:"90%",position:"absolute",top:"20%",left:"0",right:"0",margin:"auto"}}),Object(p.jsx)("div",{ref:i,style:{width:t,height:n}})]}),N&&Object(p.jsx)(h,{imageData:N,isModalOpen:C,setIsModalOpen:k}),Object(p.jsx)(x,{backgroundColor:m,setBackgroundColor:f,setCupImage:B,addStraw:function(e){j.current&&(s.Composite.add(o,[E,F]),j.current=!1)},removeStraw:function(e){j.current||(o.bodies.pop(),o.constraints.pop(),s.Composite.setModified(o,!0,!0,!1),j.current=!0)}})]})},O=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(0),o=Object(a.a)(r,2),s=o[0],l=o[1],d=Object(c.useState)(0),j=Object(a.a)(d,2),u=j[0],b=j[1];return Object(p.jsxs)(p.Fragment,{children:[n&&Object(p.jsx)(g,{accelerationX:s,accelerationY:u}),!n&&Object(p.jsxs)("div",{style:{height:"100%"},children:[Object(p.jsx)("img",{src:"./sastapi_top_ttl.png",alt:"logo",className:"top-logo"}),Object(p.jsx)("img",{src:"./sastapi_top_drink.png",alt:"drink",className:"top-drink"}),Object(p.jsx)("img",{src:"./sastapi_top_btn_start.png",alt:"start-button",onClick:function(){DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((function(e){"granted"===e?window.addEventListener("devicemotion",(function(e){e.accelerationIncludingGravity?(l(e.accelerationIncludingGravity.x),b(e.accelerationIncludingGravity.y)):alert("event.accelerationIncludingGravity is null")})):(alert("\u52a0\u901f\u5ea6\u30bb\u30f3\u30b5\u30fcOFF"),l(0),b(-3))})).catch((function(e){alert(e)})):(alert("\u3053\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u306f\u52a0\u901f\u5ea6\u30bb\u30f3\u30b5\u30fc\u304c\u642d\u8f09\u3055\u308c\u3066\u304a\u308a\u307e\u305b\u3093"),l(0),b(-3)),i(!0)},className:"top-start"})]})]})};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))},86:function(e,t,n){}},[[199,1,2]]]);
//# sourceMappingURL=main.cd1b9634.chunk.js.map