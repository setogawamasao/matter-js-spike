(this["webpackJsonpmatter-js-spike"]=this["webpackJsonpmatter-js-spike"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(5),o=n.n(r),a=(n(10),n(3)),s=n(1),l=n(0),u=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],r=n[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("button",{type:"button",className:i?"menu-trigger is-active":"menu-trigger",onClick:function(){r(!i)},children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]}),Object(l.jsxs)("div",{className:i?"menu is-active":"menu",children:[Object(l.jsx)("div",{className:"menu-item",onClick:function(){e.setBackgroundColor("#dcac65")},children:"\u30df\u30eb\u30af\u30c6\u30a3\u30fc"}),Object(l.jsx)("div",{className:"menu-item",onClick:function(){e.setBackgroundColor("#E9ED88")},children:"\u62b9\u8336"}),Object(l.jsx)("div",{className:"menu-item",onClick:function(){return e.setCupImage("logo.PNG")},children:"\u30b5\u30b9\u30bf\u30d4"}),Object(l.jsx)("div",{className:"menu-item",onClick:function(){return e.setCupImage("alley.png")},children:"The alley"})]})]})},d=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(s.Engine.create()),i=(Object(c.useRef)(!1),Object(c.useState)("#dcac65")),r=Object(a.a)(i,2),o=r[0],d=r[1],j=Object(c.useState)("logo.png"),b=Object(a.a)(j,2),m=b[0],g=b[1];document.body.style="background: ".concat(o),Object(c.useEffect)((function(){var e=document.body.clientWidth,c=document.body.clientHeight,i=n.current.world,r=s.Render.create({element:t.current,engine:n.current,options:{width:e,height:c,wireframes:!1,background:"#transparent"}}),o=s.Mouse.create(r.canvas),a=s.MouseConstraint.create(n.current,{mouse:o,constraint:{angularStiffness:0,render:{visible:!1}}});s.Composite.add(i,a);var l=s.Composites.stack(0,0,10,4,1,1,(function(e,t){return s.Bodies.circle(e,t,s.Common.random(70,80),{mass:10,restitution:.01,friction:.01,frictionAir:s.Common.random(.3,.5),render:{sprite:{texture:"./tapioca_".concat(Math.floor(2*Math.random())+1,".png")}}})})),u=s.Bodies.rectangle(e/2,c/2,50,c,{render:{fillStyle:"#FF0000"}}),d=s.Constraint.create({pointA:s.Vector.clone({x:u.position.x,y:u.position.y-c/2*.8}),bodyB:u,pointB:{x:0,y:-c/2*.8},length:0});return s.Composite.add(i,[u,d]),s.World.add(n.current.world,[l,s.Bodies.rectangle(e/2,-10,e,20,{isStatic:!0,render:{fillStyle:"#000000"}}),s.Bodies.rectangle(-10,c/2,20,c,{isStatic:!0,render:{fillStyle:"#000000"}}),s.Bodies.rectangle(e/2,c+10,e,20,{isStatic:!0,render:{fillStyle:"#000000"}}),s.Bodies.rectangle(e+10,c/2,20,c,{isStatic:!0,render:{fillStyle:"#000000"}})]),s.Engine.run(n.current),s.Render.run(r),function(){s.Render.stop(r),s.World.clear(n.current.world),s.Engine.clear(n.current),r.canvas.remove(),r.canvas=null,r.context=null,r.textures={}}}),[]);return n.current.gravity.x=e.accelerationX,n.current.gravity.y=-e.accelerationY,Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{setBackgroundColor:d,setCupImage:g}),Object(l.jsx)("img",{src:m,style:{width:"90%",position:"absolute",top:"20%",left:"0",right:"0",margin:"auto"}}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{ref:t,style:{width:"100%",height:"100%"}})})]})},j=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(0),o=Object(a.a)(r,2),s=o[0],u=o[1],j=Object(c.useState)(0),b=Object(a.a)(j,2),m=b[0],g=b[1];return Object(l.jsxs)(l.Fragment,{children:[n&&Object(l.jsx)(d,{accelerationX:s,accelerationY:m}),!n&&Object(l.jsxs)("div",{style:{height:"100%"},children:[Object(l.jsx)("img",{src:"./logo.PNG",style:{width:"99%",display:"block",margin:"100px auto "}}),Object(l.jsx)("img",{src:"./start-button.PNG",onClick:function(){DeviceMotionEvent.requestPermission?DeviceMotionEvent.requestPermission().then((function(e){"granted"===e?window.addEventListener("devicemotion",(function(e){e.accelerationIncludingGravity?(u(e.accelerationIncludingGravity.x),g(e.accelerationIncludingGravity.y)):alert("event.accelerationIncludingGravity is null")})):(u(0),g(-3))})).catch((function(e){alert(e)})):(alert("\u3053\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u306f\u52a0\u901f\u5ea6\u30bb\u30f3\u30b5\u30fc\u304c\u642d\u8f09\u3055\u308c\u3066\u304a\u308a\u307e\u305b\u3093"),u(0),g(-3)),i(!0)},style:{width:"50%",position:"absolute",bottom:"10%",left:"0",right:"0",margin:"auto"}})]})]})};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.30626268.chunk.js.map