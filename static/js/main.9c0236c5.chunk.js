(this.webpackJsonpmeme=this.webpackJsonpmeme||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(6),s=c.n(a),r=c(5),i=c.n(r),j=c(7),l=c(2),m=(c(4),c(0));var o=function(e){var t=e.template,c=e.onClick;return Object(m.jsx)("div",{className:"meme-name",children:Object(m.jsx)("img",{src:t.url,alt:t.name,onClick:c})})};var d=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),d=r[0],b=r[1],u=Object(n.useState)("Top Text"),h=Object(l.a)(u,2),O=h[0],x=h[1],p=Object(n.useState)("Bottom Text"),f=Object(l.a)(p,2),v=f[0],g=f[1],N=Object(n.useState)(null),w=Object(l.a)(N,2),k=w[0],y=w[1],C=Object(n.useState)(!0),S=Object(l.a)(C,2),G=S[0],T=S[1];function M(){y(null),b(null),x(""),g("")}return Object(n.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json().then((function(e){return a(e.data.memes)}))}))}),[]),k?Object(m.jsxs)("div",{className:"showPage",children:[Object(m.jsxs)("div",{className:"show-header",children:[Object(m.jsx)("h1",{children:"Meme Generator"}),Object(m.jsx)("p",{children:"Feel free to download you meme!"})]}),Object(m.jsxs)("div",{className:"new-meme",children:[Object(m.jsx)("button",{onClick:function(){return M()},children:"Create more Meme!"}),Object(m.jsx)("img",{src:k,alt:"custom meme"})]}),Object(m.jsx)("div",{style:{margin:"20px"}})]}):Object(m.jsxs)("div",{className:"all-memes",children:[G&&Object(m.jsxs)("div",{className:"landing",children:[Object(m.jsxs)("div",{className:"start",children:[Object(m.jsx)("h1",{children:"Meme Generator"}),Object(m.jsx)("p",{children:"I am so happy to be a meme."}),Object(m.jsxs)("button",{onClick:function(){return T(!G)},children:["Get started ",Object(m.jsx)("i",{className:"fas fa-chevron-right"})]})]}),Object(m.jsxs)("div",{className:"credit",children:[" Pi credits to :",Object(m.jsx)("a",{href:"https://www.inverse.com/article/60923-strange-planet-book-visual-glossary",target:"_blank",rel:"noreferrer",children:"JAKE KLEINMAN"})]})]}),!G&&d&&Object(m.jsxs)("div",{className:"editPage",children:[Object(m.jsxs)("button",{onClick:function(){return M()},className:"back-btn",children:[Object(m.jsx)("i",{className:"fas fa-arrow-left"}),"Back to template"]}),Object(m.jsxs)("div",{className:"edit-header",children:[Object(m.jsx)("h1",{children:"Meme Generator"}),Object(m.jsx)("p",{children:"Add Some Word to The Picture."})]}),Object(m.jsx)("form",{onSubmit:function(){var e=Object(j.a)(i.a.mark((function e(t){var c,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={template_id:d.id,text0:O,text1:v,username:"huiniong",password:"fesh4waup7rhis*DRIG"},e.next=4,fetch("https://api.imgflip.com/caption_image".concat((s=c,"?"+Object.entries(s).map((function(e){var t=Object(l.a)(e,2),c=t[0],n=t[1];return"".concat(c,"=").concat(n)})).join("&"))));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,y(a.data.url);case 9:case"end":return e.stop()}var s}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(m.jsxs)("div",{className:"edit-place ",children:[Object(m.jsxs)("div",{className:"edit-img-name",children:[Object(m.jsx)(o,{template:d}),Object(m.jsx)("p",{children:d.name})]}),Object(m.jsxs)("div",{className:"edit-input",children:[Object(m.jsx)("input",{classname:"top-text",placeholder:"Top Text",value:O,onChange:function(e){return x(e.target.value)}}),Object(m.jsx)("input",{placeholder:"Bottom Text",value:v,onChange:function(e){return g(e.target.value)}}),Object(m.jsx)("button",{type:"submit",children:" Generate "})]})]})})]}),!G&&!d&&Object(m.jsxs)("div",{className:"templatePage",children:[Object(m.jsxs)("div",{className:"template-header",children:[Object(m.jsx)("h1",{children:"Meme Generator"}),Object(m.jsx)("p",{children:"I am so happy to be a meme."})]}),Object(m.jsxs)("div",{className:"meme meme-card",children:[c.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(o,{template:e,onClick:function(){b(e)}},e.id)})})),Object(m.jsx)("div",{style:{margin:"20px"}})]})]})]})};s.a.render(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(d,{})}),document.getElementById("root"))},4:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.9c0236c5.chunk.js.map