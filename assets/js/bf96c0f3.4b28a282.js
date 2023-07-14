"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="Build Notes and Recommendations",s={unversionedId:"keyboards/paragon/build-notes",id:"keyboards/paragon/build-notes",title:"Build Notes and Recommendations",description:"This document contains some of our thoughts when building the Paragon. We highly recommend considering these suggestions while building your unit to ensure you can create the best typing experience for your preferences.",source:"@site/docs/02_keyboards/01_paragon/02_build-notes.md",sourceDirName:"02_keyboards/01_paragon",slug:"/keyboards/paragon/build-notes",permalink:"/docs/keyboards/paragon/build-notes",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/keyboards/paragon/overview"},next:{title:"January",permalink:"/docs/category/january"}},l={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Gaskets",id:"gaskets",level:2},{value:"Foam",id:"foam",level:2},{value:"Screw Tightness",id:"screw-tightness",level:2},{value:"Force Break Mod",id:"force-break-mod",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-notes-and-recommendations"},"Build Notes and Recommendations"),(0,r.kt)("p",null,"This document contains some of our thoughts when building the Paragon. We highly recommend considering these suggestions while building your unit to ensure you can create the best typing experience for your preferences."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you are having issues with your PCB, please check out our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/pcb_files/README.md"},"guide"))," on flashing and loading the PCB in VIA."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Poron gaskets")," on the ",(0,r.kt)("strong",{parentName:"li"},"bottom half")," of the case only. If the plate/PCB is moving, then apply top case gaskets to the ",(0,r.kt)("strong",{parentName:"li"},"four corners of the build"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"plate foam")," can be helpful in reducing the resonance inside the case."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Don't overtighten")," the two case pieces."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"force break mod")," can be helpful in reducing the metal-on-metal contact of the top and bottom case pieces.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"gaskets"},"Gaskets"),(0,r.kt)("p",null,"After testing three Paragon prototypes, we found that the most optimal typing experience came from applying the ",(0,r.kt)("strong",{parentName:"p"},"poron gaskets")," to the ",(0,r.kt)("strong",{parentName:"p"},"bottom half of the case"),". If you are uncomfortable with any movement of the build within the case, we suggest applying the top gaskets to the ",(0,r.kt)("strong",{parentName:"p"},"4 corners")," of the build. This will create a bit more friction in the build to remove any movement."),(0,r.kt)("p",null,"Silicon gaskets were an optional add-on for the Paragon. Silicon is stiffer than poron, but can still be used to create a unique typing experience. We encourage you guys to test out which gaskets appeal to your typing preferences!"),(0,r.kt)("h2",{id:"foam"},"Foam"),(0,r.kt)("p",null,"As part of our testing, we tried out a variety of foam combinations; due to the two-piece, seamless nature of the Paragon, resonance is impacted differently as opposed to keyboards with a middle seam."),(0,r.kt)("p",null,"Foam absorbs some of the resonance and we found that the ",(0,r.kt)("strong",{parentName:"p"},"plate foam")," was the most impactful in providing a fuller typing acoustic experience. The case foam can also be used to shore up any remaining ping in the case."),(0,r.kt)("h2",{id:"screw-tightness"},"Screw Tightness"),(0,r.kt)("p",null,'Due to the seamless nature of the Paragon, we discovered that over-tightening the two case pieces together would "tighten" the plate and PCB, almost acting as a drum and raising the pitch of the resonance. We recommend that you ',(0,r.kt)("strong",{parentName:"p"},"avoid over-tightening")," the top and bottom case pieces."),(0,r.kt)("h2",{id:"force-break-mod"},"Force Break Mod"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"force break mod")," is useful in reducing resonance in a keyboard while still maintaining the keyboard's unique sound signature. If you are unfamiliar with the force break mod, we recommend checking out ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7kmy01pFuyI"},"Andy Nguyen's video")," about the concept."),(0,r.kt)("p",null,"The force break mod entails applying a piece of tape (or other soft cushioning material) around the screw holes inside the case; the tape reduces the metal-on-metal contact between the top and bottom case, leading to a noticeable reduction in resonance while leaving the sound signatures of the plate, switches, and keycaps unaffected."))}d.isMDXComponent=!0}}]);