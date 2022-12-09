(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(81),o=t.n(a),c=t(645),d=t.n(c),i=t(667),r=t.n(i),l=new URL(t(122),t.b),p=d()(o()),s=r()(l);p.push([e.id,"/*css reset*/\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/*style*/\n\n:root {\n    --background-color:#fff1f2;\n    --primary-color:#be123c;\n    --primary-light:#ffe4e6;\n    --primary-dark: #9f1239;\n}\n\nhtml {\n    background: url("+s+");\n    background-size: 100%;\n}\n\nbody {\n    backdrop-filter: blur(5px);\n    width: 100%;\n    height: 100%;\n}\n\nh1, h2{\n    font-family:'Times New Roman', Times, serif;\n}\n\np {\n    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    margin: 0 20vw;\n    width: 60vw;\n}\n\n#header {\n    display: flex;\n    padding: 3vh 3vw;\n    flex-direction: row;\n    justify-content: space-between;\n    background-color: var(--primary-color);\n}\n\n#header>div {\n    display: flex;\n    align-items: center;\n}\n\n#header img {\n    height: 7vh;\n}\n\n#header h1 {\n    font-size: 6vh;\n    color: var(--background-color);\n    font-weight: 1000;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n    font-size: 3vh;\n    gap: 1vw;\n    align-items: center;\n    color: var(--primary-light);\n}\n\nnav label {\n    padding: 1.5vh 1vw;\n    transition: 300ms ease-in-out;\n}\n\nnav label:hover {\n    background-color: var(--primary-dark);\n    color: var(--background-color);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    padding: 3vw 5vw 5vw 5vw;\n    gap: 4vh;\n    background-color: var(--background-color);\n}\n\n#content h1 {\n    font-size: 4.5vh;\n    color: var(--primary-dark);\n    font-weight: 800;\n}\n\n#content>img {\n    width: 50vw;\n    align-self: center;\n}\n\np {\n    font-size: 2.2vh;\n    color: var(--primary-dark);\n    font-weight: 500;\n}\n\n/*menu option*/\n\n.option {\n    display: flex;\n    flex-direction: row-reverse;\n    width: 60vw;\n    padding: 5vw;\n    gap: 2vw;\n    justify-content: space-around;\n    align-self: center;\n    background-color: var(--primary-light);\n}\n\n#content>div:nth-of-type(2n) {\n    background-color: var(--background-color);\n    flex-direction: row;\n}\n\n.option img {\n    height: 20vh;\n    border-radius: 1vw;\n}\n\n.option div {\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n}\n\nh2 {\n    font-size: 3.5vh;\n    color: var(--primary-dark);\n    font-weight: 800;\n}\n\n.option p {\n    color: #242222;\n}\n\n.option p:last-child {\n    font-weight: 700;\n    font-size: 2vh;\n}",""]);const m=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(d[r]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);a&&d[p[0]]||(void 0!==c&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=c),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var c={},d=[],i=0;i<e.length;i++){var r=e[i],l=a.base?r[0]+a.base:r[0],p=c[l]||0,s="".concat(l," ").concat(p);c[l]=p+1;var m=t(s),h={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==m)n[m].references++,n[m].updater(h);else{var u=o(h,a);a.byIndex=i,n.splice(i,0,{identifier:s,updater:u,references:1})}d.push(s)}return d}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=a(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<c.length;d++){var i=t(c[d]);n[i].references--}for(var r=a(e,o),l=0;l<c.length;l++){var p=t(c[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}c=r}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},122:(e,n,t)=>{e.exports=t.p+"93adcd5c33975f278070.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var c=n[a]={id:a,exports:{}};return e[a](c,c.exports,t),c.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),c=t(569),d=t.n(c),i=t(565),r=t.n(i),l=t(216),p=t.n(l),s=t(589),m=t.n(s),h=t(426),u={};u.styleTagTransform=m(),u.setAttributes=r(),u.insert=d().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=p(),n()(h.Z,u),h.Z&&h.Z.locals&&h.Z.locals;const C=t.p+"044ecb21233eeba52537.png",f=t.p+"6528d87d8cc48944c8d6.jpg";function v(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");n.textContent="About us",e.appendChild(n);const t=new Image;t.src=f,e.appendChild(t);const a=document.createElement("p");a.textContent="We are a restaurant made for anime fans. In our menu you will find dishes from your favourite animes, all of them with the best quality. We offer an unique experience with a vibrant atmosphere and servicial staff. This page and its contents are all fictional.",e.appendChild(a);const o=document.createElement("h1");o.textContent="Opening hours",e.appendChild(o);const c=document.createElement("p");c.textContent="Monday-Friday : 12:00 ~ 20:00",e.appendChild(c);const d=document.createElement("p");d.textContent="Saturday : 11:00 ~ 22:00",e.appendChild(d);const i=document.createElement("p");i.textContent="Sunday : 13:00 ~ 19:00",e.appendChild(i)}const g=t.p+"a9e3eac21c27258cb4e1.jpg",b=t.p+"fc18403fd9cf8946b8a4.jpg",E=t.p+"caa568471cdb387b97d6.jpg",y=t.p+"bf011a5467bf29ba5d70.jpg",w=t.p+"c48626997aea0009d9a7.jpeg",x=t.p+"1bbdc1e59270a00f4cf2.png",k=t.p+"fc11b6d1d0d4566b956d.jpeg",I=t.p+"8c2f6486eb64760619d2.jpg",S=t.p+"6f44daa14523e6ca33c8.jpeg",j=t.p+"833377c1a87f234602fa.jpeg",A=t.p+"b4c8fd61f9410a299b28.jpeg",T=t.p+"7d06dd66a05a2477f5eb.jpg",N=t.p+"fc020cfba3c6e771d2b4.jpg",M=t.p+"697c926273027e54d7c2.png",H=t.p+"318ee188db2e05022ace.jpeg",q=t.p+"40f0848c1fe1c88aed4b.jpeg",z=t.p+"4fcf321b3fccb6f1188f.jpg",R=t.p+"54c7e207793cbed7c3e0.jpeg",B=t.p+"936bf1caf075b537a657.jpeg";!function(){const e=document.getElementById("container"),n=document.createElement("div");n.id="header";const t=document.createElement("div"),a=document.createElement("h1");a.textContent="AniCafe",t.appendChild(a);const o=new Image;t.appendChild(o),n.appendChild(t),o.src=C;const c=document.createElement("nav"),d=document.createElement("label");d.textContent="Home",c.appendChild(d);const i=document.createElement("label");i.textContent="Menu",c.appendChild(i);const r=document.createElement("label");r.textContent="Staff",c.appendChild(r),n.appendChild(c),e.appendChild(n);const l=document.createElement("div");l.id="content",e.appendChild(l),d.onclick=()=>v(),i.onclick=()=>function(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");n.textContent="Main dishes",e.appendChild(n);const t=document.createElement("div");t.className="option";const a=new Image;a.src=g,t.appendChild(a);const o=document.createElement("div"),c=document.createElement("h2");c.textContent="Ramen",o.appendChild(c);const d=document.createElement("p");d.textContent="Have you ever wanted to eat the same ramen as Naruto? This ramen is made from Teuchi, the owner of Ichiraku Ramen.",o.appendChild(d);const i=document.createElement("p");i.textContent="Anime: Naruto.",o.appendChild(i),t.appendChild(o),e.appendChild(t);const r=document.createElement("div");r.className="option";const l=new Image;l.src=b,r.appendChild(l);const p=document.createElement("div"),s=document.createElement("h2");s.textContent="Omurice",p.appendChild(s);const m=document.createElement("p");m.textContent='The classic omurice from every anime, but Tohru will cast a cute spell on it to make it more delicious. "I call upon the Shadow King that rules over this world, make this the greatest it can be with these dark arts! I beseech thee for ... Stop!!! ',p.appendChild(m);const h=document.createElement("p");h.textContent="Anime: Kobayashi-san Chi no Maid Dragon.",p.appendChild(h),r.appendChild(p),e.appendChild(r);const u=document.createElement("div");u.className="option";const C=new Image;C.src=E,u.appendChild(C);const f=document.createElement("div"),v=document.createElement("h2");v.textContent="Fried rice",f.appendChild(v);const M=document.createElement("p");M.textContent="Yukimura Souma special and first dish at Totsuki Culinary Academy. It has a unique flavor that you would never forget.",f.appendChild(M);const H=document.createElement("p");H.textContent="Anime: Shokugeki no Sōma.",f.appendChild(H),u.appendChild(f),e.appendChild(u);const q=document.createElement("div");q.className="option";const z=new Image;z.src=y,q.appendChild(z);const R=document.createElement("div"),B=document.createElement("h2");B.textContent="Hijikata's special",R.appendChild(B);const D=document.createElement("p");D.textContent="Just a bowl of 50% rice, 50% mayonnaise. Hijikata loves mayonnaise so much he dippes his food on mayonnaise. Maybe you are like him and enjoy it.",R.appendChild(D);const L=document.createElement("p");L.textContent="Anime: Gintama",R.appendChild(L),q.appendChild(R),e.appendChild(q);const O=document.createElement("div");O.className="option";const K=new Image;K.src=w,O.appendChild(K);const J=document.createElement("div"),P=document.createElement("h2");P.textContent="Jashin-chan tail Steak",J.appendChild(P);const Z=document.createElement("p");Z.textContent="Yes, it is made of Jashin-chan tail. It is more delicious than other meats. About her? Oh, do not worry, she can regenerate it.",J.appendChild(Z);const F=document.createElement("p");F.textContent="Anime: Jashin-chan Dropkick",J.appendChild(F),O.appendChild(J),e.appendChild(O);const U=document.createElement("div");U.className="option";const W=new Image;W.src=x,U.appendChild(W);const $=document.createElement("div"),_=document.createElement("h2");_.textContent="Mapo tofu",$.appendChild(_);const Y=document.createElement("p");Y.textContent="The super spicy mapo tofu that no one dares to order at the high school canteen. It is the favourite for Kanade though. Will you risk and take it?",$.appendChild(Y);const G=document.createElement("p");G.textContent="Anime: Angel beats",$.appendChild(G),U.appendChild($),e.appendChild(U);const Q=document.createElement("div");Q.className="option";const V=new Image;V.src=k,Q.appendChild(V);const X=document.createElement("div"),ee=document.createElement("h2");ee.textContent="Sandwich",X.appendChild(ee);const ne=document.createElement("p");ne.textContent="Asuna's handmade sanwich. She maxed out her cooking skills so take for sure it will be delicious. It has teriyaki and soy sauce",X.appendChild(ne);const te=document.createElement("p");te.textContent="Anime: Sword art online",X.appendChild(te),Q.appendChild(X),e.appendChild(Q);const ae=document.createElement("h1");ae.textContent="Desserts",e.appendChild(ae);const oe=document.createElement("div");oe.className="option";const ce=new Image;ce.src=I,oe.appendChild(ce);const de=document.createElement("div"),ie=document.createElement("h2");ie.textContent="Takina's special hot chocolate parfait",de.appendChild(ie);const re=document.createElement("p");re.textContent="Perfect if you are cold. It's really delicious, despite how it looks. Please don't tell her",de.appendChild(re);const le=document.createElement("p");le.textContent="Anime: Lycoris recoil",de.appendChild(le),oe.appendChild(de),e.appendChild(oe);const pe=document.createElement("div");pe.className="option";const se=new Image;se.src=S,pe.appendChild(se);const me=document.createElement("div"),he=document.createElement("h2");he.textContent="Donuts",me.appendChild(he);const ue=document.createElement("p");ue.textContent="Who doesn't love donuts. This super enchanting donuts were made by Stephanie Dola.",me.appendChild(ue);const Ce=document.createElement("p");Ce.textContent="Anime: No game No life",me.appendChild(Ce),pe.appendChild(me),e.appendChild(pe);const fe=document.createElement("h1");fe.textContent="Drinks",e.appendChild(fe);const ve=document.createElement("div");ve.className="option";const ge=new Image;ge.src=j,ve.appendChild(ge);const be=document.createElement("div"),Ee=document.createElement("h2");Ee.textContent="Cinderella",be.appendChild(Ee);const ye=document.createElement("p");ye.textContent="Orange, lemon and pineapple juice. Doesn't include alcohol.",be.appendChild(ye);const we=document.createElement("p");we.textContent="Anime: Osake wa fuufu ni natte kara",be.appendChild(we),ve.appendChild(be),e.appendChild(ve);const xe=document.createElement("div");xe.className="option";const ke=new Image;ke.src=A,xe.appendChild(ke);const Ie=document.createElement("div"),Se=document.createElement("h2");Se.textContent="Tempest Blue",Ie.appendChild(Se);const je=document.createElement("p");je.textContent="A mocktail created by Treyni at her bar. It has mint what makes it cool.",Ie.appendChild(je);const Ae=document.createElement("p");Ae.textContent="Anime: Tensei Shitara Slime Datta Ken",Ie.appendChild(Ae),xe.appendChild(Ie),e.appendChild(xe);const Te=document.createElement("div");Te.className="option";const Ne=new Image;Ne.src=T,Te.appendChild(Ne);const Me=document.createElement("div"),He=document.createElement("h2");He.textContent="Tea",Me.appendChild(He);const qe=document.createElement("p");qe.textContent="Echidna's tea. She is the witch of greed and knows about almost everything, but maybe you wouldn't like to ask her what is her tea made of...",Me.appendChild(qe);const ze=document.createElement("p");ze.textContent="Anime: Re:Zero kara Hajimeru Isekai Seikatsu",Me.appendChild(ze),Te.appendChild(Me),e.appendChild(Te);const Re=document.createElement("div");Re.className="option";const Be=new Image;Be.src=N,Re.appendChild(Be);const De=document.createElement("div"),Le=document.createElement("h2");Le.textContent="Cola",De.appendChild(Le);const Oe=document.createElement("p");Oe.textContent="Maybe you just want a cola, Fujiwara can give you one.",De.appendChild(Oe);const Ke=document.createElement("p");Ke.textContent="Anime: Kaguya-sama wa Kokurasetai: Tensai-tachi no Ren'ai Zunōsen",De.appendChild(Ke),Re.appendChild(De),e.appendChild(Re)}(),r.onclick=()=>function(){const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");n.textContent="Cheffs",e.appendChild(n);const t=document.createElement("div");t.className="option";const a=new Image;a.src=M,t.appendChild(a);const o=document.createElement("div"),c=document.createElement("h2");c.textContent="Sanji",o.appendChild(c);const d=document.createElement("p");d.textContent="The best pirate chef you will ever meet. He has been cooking since he was a kid and his dream is to go to All Blue, the ocean where the fishes from all oceans are.",o.appendChild(d);const i=document.createElement("p");i.textContent="Anime: One piece.",o.appendChild(i),t.appendChild(o),e.appendChild(t);const r=document.createElement("div");r.className="option";const l=new Image;l.src=H,r.appendChild(l);const p=document.createElement("div"),s=document.createElement("h2");s.textContent="Tonio Trussardi",p.appendChild(s);const m=document.createElement("p");m.textContent="Italian chef that loves to make his clients satisfied. He uses his stand power Pearl Jam to cure customers illneses and malaises through his food.",p.appendChild(m);const h=document.createElement("p");h.textContent="Anime: JoJo's Bizarre Adventure",p.appendChild(h),r.appendChild(p),e.appendChild(r);const u=document.createElement("div");u.className="option";const C=new Image;C.src=q,u.appendChild(C);const f=document.createElement("div"),v=document.createElement("h2");v.textContent="Kobayashi Rindou",f.appendChild(v);const g=document.createElement("p");g.textContent="Graduated from Totsuki Academy, she has travel over the world to cook even the weirdest ingredients. She has a lot of cooking knoledge so she can prepare you whatever comes to your mind.",f.appendChild(g);const b=document.createElement("p");b.textContent="Anime: Shokugeki no Sōma",f.appendChild(b),u.appendChild(f),e.appendChild(u);const E=document.createElement("h1");E.textContent="Staff",e.appendChild(E);const y=document.createElement("div");y.className="option";const w=new Image;w.src=z,y.appendChild(w);const x=document.createElement("div"),k=document.createElement("h2");k.textContent="Maou",x.appendChild(k);const I=document.createElement("p");I.textContent="The best employee from MgRonald's. In the past he was the Devil King but don't worry, he is a very diligent and proactive employee.",x.appendChild(I);const S=document.createElement("p");S.textContent="Anime: Hataraku Maō-sama!",x.appendChild(S),y.appendChild(x),e.appendChild(y);const j=document.createElement("div");j.className="option";const A=new Image;A.src=R,j.appendChild(A);const T=document.createElement("div"),N=document.createElement("h2");N.textContent="Misaki Ayuzawa",T.appendChild(N);const D=document.createElement("p");D.textContent="She has expericence working in a maid cafe. She is dainty, sweet and cute at work. Yes, only at work.",T.appendChild(D);const L=document.createElement("p");L.textContent="Anime: Kaichou wa Maid-Sama!",T.appendChild(L),j.appendChild(T),e.appendChild(j);const O=document.createElement("div");O.className="option";const K=new Image;K.src=B,O.appendChild(K);const J=document.createElement("div"),P=document.createElement("h2");P.textContent="Maika Sakuranomiya",J.appendChild(P);const Z=document.createElement("p");Z.textContent="She will receive you with a smile. Even if she looks sadistic and acts like that, she is just trying her best.",J.appendChild(Z);const F=document.createElement("p");F.textContent="Anime: Blend S",J.appendChild(F),O.appendChild(J),e.appendChild(O)}()}(),v()})()})();