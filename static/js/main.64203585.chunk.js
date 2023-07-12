(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(9),c=n(3),a=n(1),s=n(0),r=Object(a.createContext)(),o=function(e){var t=e.children,n=Object(a.useState)("light"),i=Object(c.a)(n,2),o=i[0],l=i[1];Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l=n.p+"static/media/resume.9bfd9cda.pdf",h="https://sociallyencrypted.github.io",d="sociallyencrypted",j={name:"Mehul Arora",role:"Undergraduate Researcher @ Network Security Lab, IIIT Delhi",description:"Hi! I'm Mehul and I'm a junior pursuing CSE @ IIIT Delhi. I am also an undergraduate researcher at the Network Security Lab at IIIT Delhi, working under Dr. Sambuddho Chakravarty, Dr. Sanat K. Biswas and Dr. Rinku Shah on malware analysis in containerised environments and algorithms for accurate IP Geolocation. I believe that collaborative work is key to setting big ideas into motion. Apart from cybersecurity, I also take interest in Interaction Design, Systems Design and UI/UX Development. I'm driven by the belief that with enough determination, one can make big things happen. When I'm not working, you'll see me doing my 10th rewatch of Mr. Robot, reading books, quizzing or playing Watch_Dogs 2. I'm always happy to talk to new people, so do feel free to drop me a message anytime!",resume:l,social:{linkedin:"https://linkedin.com/in/sociallyencrypted",github:"https://github.com/sociallyencrypted"}},u=[{name:"Immersivity for FPS Games",description:"Designing custom sensors to build a full body game controller using Makey Makey and Machine Learning",stack:["Makey Makey","OpenCV-Python"],livePreview:"https://drive.google.com/file/d/1X0NO67mCJxHu2BKZ6AFn1_c6qAHlykQ-/view?usp=sharing"},{name:"Stationary Store",description:"A full-stack stationery store, created for the DBMS course @ IIIT Delhi",stack:["Python","MySQL","Vue"],sourceCode:"https://github.com/sociallyencrypted/StationaryShop"},{name:"TankStars",description:"A clone of the popular mobile game TankStars, created in Java for a laptop experience",stack:["Java","LibGDX"],sourceCode:"https://github.com/encryptedcation/TankStars"},{name:"SimpleRISC Assembler and Simulator",description:"A python based terminal package for SimpleRISC Assembly with features to assemble code into binary, simulate binary over a SimpleRISC Archiecture Chip, and plot memory access with time",stack:["Python","Matplotlib"],sourceCode:"https://github.com/encryptedcation/assembler"},{name:"NoDoubt Discord Bot",description:"A discord bot to fetch educational material, college specific resources and \u2728memes\u2728 from various APIs. Currently being used by over 600 students",stack:["Python","Discord.py"],sourceCode:"https://github.com/encryptedcation/NoDoubt"},{name:"Bhoojal Mapping",description:"Scraping GWCB data to plot Water Severity Indexes in India on an online map. This project won the third prixe at Anveshan 1.0 organised by IIIT Delhi.",stack:["Python","JavaScript","Google Maps API","Google Cloud Console"],sourceCode:"https://github.com/HydroHomiesIIITD/hydrohomiesiiitd.github.io",livePreview:"https://hydrohomiesiiitd.github.io"}],b=["Wireshark","Docker","Procmon","Git","Shell Script","Ghidra","IDA Pro","Burp Suite","Arduino","Flutter","HTML/CSS/JS","Angular","MySQL","LaTeX"],m="mehul21066@iiitd.ac.in",p=n(16),O=n.n(p),f=n(14),k=n.n(f),x=n(18),g=n.n(x),y=n(17),v=n.n(y),N=(n(28),function(){var e=Object(a.useContext)(r),t=Object(c.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,o=Object(a.useState)(!1),l=Object(c.a)(o,2),h=l[0],d=l[1],j=function(){return d(!h)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[u.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:j,className:"link link--nav",children:"Projects"})}):null,b.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:j,className:"link link--nav",children:"Skills"})}):null,m?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:j,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(k.a,{}):Object(s.jsx)(O.a,{})}),Object(s.jsx)("button",{type:"button",onClick:j,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(s.jsx)(v.a,{}):Object(s.jsx)(g.a,{})})]})}),S=(n(32),function(){var e=h,t=d;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(N,{})]})}),_=n(11),I=n.n(_),C=n(19),w=n.n(C),D=(n(33),function(){var e=j.name,t=j.role,n=j.description,i=j.resume,c=j.social;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi! I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:[t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[i&&Object(s.jsx)("a",{href:i,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(I.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(w.a,{})})]})]})]})}),P=n(7),A=n.n(P),M=n(20),T=n.n(M),L=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(I.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(T.a,{})})]})}),B=(n(36),function(){return u.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:u.map((function(e){return Object(s.jsx)(L,{project:e},A()())}))})]}):null}),E=(n(37),function(){return b.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:b.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())}))})]}):null}),G=n(21),R=n.n(G),H=(n(38),function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(R.a,{fontSize:"large"})})}):null}),J=(n(39),function(){return m?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(m),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),W=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),F=(n(41),function(){var e=Object(a.useContext)(r),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(S,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(D,{}),Object(s.jsx)(B,{}),Object(s.jsx)(E,{}),Object(s.jsx)(J,{})]}),Object(s.jsx)(H,{}),Object(s.jsx)(W,{})]})});n(42);Object(i.render)(Object(s.jsx)(o,{children:Object(s.jsx)(F,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.64203585.chunk.js.map