"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[533],{7386:(n,e,r)=>{r.r(e),r.d(e,{default:()=>rn});var t,i,o,s=r(168),c=r(5867),a=r(2791),l=r(184);const d=function(n){let{children:e,bgColour:r,colour:t,openModal:i}=n;const o=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const n=o.current,e=e=>{const r=e.clientX,t=e.clientY,i=n.getBoundingClientRect(),o=t-i.top,s=r-i.left,c=document.createElement("span");c.classList.add("circle"),c.style.top=o+"px",c.style.left=s+"px",n.appendChild(c),setTimeout((()=>c.remove()),500)};return n.addEventListener("click",e),()=>{n.removeEventListener("click",e)}}),[]),(0,l.jsx)(m,{children:(0,l.jsxs)(g,{ref:o,bgColour:r,colour:t,onClick:i,children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"1.6rem",height:"1.6rem",children:[(0,l.jsx)("path",{fill:"#F57C00",d:"M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z"}),(0,l.jsx)("path",{fill:"#FFF9C4",d:"M35 13A3 3 0 1 0 35 19A3 3 0 1 0 35 13Z"}),(0,l.jsx)("path",{fill:"#942A09",d:"M20 16L9 32 31 32z"}),(0,l.jsx)("path",{fill:"#BF360C",d:"M31 22L23 32 39 32z"})]}),e]})})},p=(0,c.F4)(t||(t=(0,s.Z)(["\n  to {\n    transform: translate(-50%, -50%) scale(3);\n    opacity: 0;\n  }\n"]))),m=c.ZP.div(i||(i=(0,s.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0%;\n\n  @media (width <= 600px) {\n    right: 50%;\n    transform: translateX(50%);\n  }\n"]))),g=c.ZP.button(o||(o=(0,s.Z)(["\n  position: relative;\n  border: none;\n  background-color: ",";\n  padding: 0.5rem 1rem;\n  font-weight: 400;\n  font-size: clamp(0.8rem, 0.9vw + 0.75rem, 1rem);\n  border-radius: 0 0 0.4rem 0.4rem;\n  cursor: pointer;\n  letter-spacing: 0.025rem;\n  color: var(",");\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: 4px;\n    vartical-align: middle;\n    ","\n  }\n\n  &:focus-visible {\n    outline: none;\n  }\n\n  &:active {\n    scale: 0.996;\n  }\n\n  .circle {\n    position: absolute;\n    width: 100px;\n    height: 100px;\n    background-color: #fff;\n    border-radius: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    animation: "," 0.5s ease-out;\n  }\n\n  @media (width <= 600px) {\n    padding: 0.39rem 0.8rem;\n  }\n"])),(n=>n.bgColour),(n=>n.colour),"",p);var h,x,f;const u=function(n){let{children:e,stackimgsrc:r}=n;return(0,l.jsxs)(j,{stackimgsrc:r,children:[(0,l.jsx)("img",{src:r,width:"24",height:"24",alt:"StackImage"}),(0,l.jsxs)(v,{children:[e,(0,l.jsx)(w,{children:(0,l.jsx)("img",{src:"".concat("/codeMint-portfolio","/images/doneIcon.gif"),width:"14",height:"14",alt:"doneIcon"})})]})]})},j=c.ZP.div(h||(h=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n"]))),v=c.ZP.div(x||(x=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]))),w=c.ZP.span(f||(f=(0,s.Z)(["\n  ","\n"])),"");var b=r(7948),Z=r.n(b),P=r(7702);const k=function(n){let{title:e}=n;return(0,l.jsx)("p",{className:"sr-only",children:e})};var y,C,M,_=r(5679),I=r.n(_);r(7760);const F=[{src:"images/Project_Preview_Image.jpg"},{src:"images/Project_Preview_Image.jpg"},{src:"images/Project_Preview_Image.jpg"},{src:"images/Project_Preview_Image.jpg"},{src:"images/Project_Preview_Image.jpg"}],z=()=>((0,a.useEffect)((()=>{const n=new(I())(".carousel",{imagesLoaded:!0,percentPosition:!1,pageDots:!1}),e=document.querySelectorAll(".carousel-cell img"),r=()=>{n.slides.forEach(((r,t)=>{const i=e[t],o=-1*(r.target+n.x)/3;i.style.transform="translateX(".concat(o,"px)")}))};return n.on("scroll.flickity",r),()=>{n.off("scroll.flickity",r),n.destroy()}}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(E,{className:"carousel",children:F.map(((n,e)=>(0,l.jsx)(L,{className:"carousel-cell",children:(0,l.jsx)(S,{src:"".concat("/codeMint-portfolio","/").concat(n.src),alt:""})},e)))})})),E=c.ZP.div(y||(y=(0,s.Z)(["\n  ","\n  height: 100%;\n"])),""),L=c.ZP.div(C||(C=(0,s.Z)(["\n  margin-right: 20px;\n  overflow: hidden;\n  height: 100%;\n"]))),S=c.ZP.img(M||(M=(0,s.Z)(["\n  width: 400px;\n  height: 100%;\n\n  object-fit: cover;\n  object-position: top;\n  aspect-ratio: 3/4;\n  border-radius: 10px;\n"])));var N,A,R,B,T,X,q;const H={position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(3px)",display:"flex",justifyContent:"center",alignItems:"center"},J={inset:"revert",position:"relative",width:"85vw",height:"60vh",backgroundColor:"transparent",padding:"1rem 0.3rem",borderRadius:"20px",boxShadow:"0 3rem 5rem rgba(0, 0, 0, 0.3)",overflow:"auto"};const U=function(){const[n,e]=(0,a.useState)(!1),r=()=>e(!1);return(0,l.jsxs)(D,{children:[(0,l.jsx)(d,{openModal:()=>e(!0),bgColour:"",colour:"--project1-ripplebtn-col",children:"Preview"}),(0,l.jsxs)(Z(),{isOpen:n,onRequestClose:r,contentLabel:"Project Preview Modal",style:{overlay:H,content:J},children:[(0,l.jsxs)(Q,{onClick:r,children:[(0,l.jsx)(P.Z,{}),(0,l.jsx)(k,{title:"Close Modal"})]}),(0,l.jsx)(z,{})]}),(0,l.jsxs)(G,{children:[(0,l.jsx)(K,{children:"Hackathon Project"}),(0,l.jsx)(O,{children:"Small acts of compassion have the power to transform lives in profound ways. A kind word, a helping hand, or a simple gesture of empathy can uplift spirits, restore hope, and instill a sense of belonging."}),(0,l.jsx)(V,{}),(0,l.jsxs)(Y,{children:[(0,l.jsx)(u,{stackimgsrc:"".concat("/codeMint-portfolio","/images/htmlIcon.png"),children:(0,l.jsx)("p",{children:"html"})}),(0,l.jsx)(u,{stackimgsrc:"".concat("/codeMint-portfolio","/images/cssIcon.png"),children:(0,l.jsx)("p",{children:"css"})}),(0,l.jsx)(u,{stackimgsrc:"".concat("/codeMint-portfolio","/images/htmlIcon.png"),children:(0,l.jsx)("p",{children:"html"})}),(0,l.jsx)(u,{stackimgsrc:"".concat("/codeMint-portfolio","/images/cssIcon.png"),children:(0,l.jsx)("p",{children:"css"})}),(0,l.jsx)(u,{stackimgsrc:"".concat("/codeMint-portfolio","/images/jsIcon.png"),children:(0,l.jsx)("p",{children:"JavaScript"})}),(0,l.jsx)(u,{stackimgsrc:"".concat("/codeMint-portfolio","/images/cssIcon.png"),children:(0,l.jsx)("p",{children:"css"})}),(0,l.jsx)(u,{stackimgsrc:"".concat("/codeMint-portfolio","/images/jsIcon.png"),children:(0,l.jsx)("p",{children:"JavaScript"})})]})]})]})},D=c.ZP.li(N||(N=(0,s.Z)(["\n  position: relative;\n  padding: 0 2rem 1rem;\n  overflow: hidden;\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n  text-align: center;\n  flex: 1 1 470px;\n  max-width: 500px;\n  background-color: var(--project1-bg);\n\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n\n  p {\n    font-size: clamp(0.7rem, 1vw + 0.5rem, 1rem);\n  }\n\n  @media (width <= 37.5rem) {\n    border-top-right-radius: 0.5rem;\n  }\n"]))),G=c.ZP.div(A||(A=(0,s.Z)([""]))),K=c.ZP.h3(R||(R=(0,s.Z)(["\n  margin: 0.8rem 0;\n  color: #375375;\n\n  @media (width <= 37.5rem) {\n    margin-top: 3.5rem;\n  }\n"]))),O=c.ZP.p(B||(B=(0,s.Z)([""]))),V=c.ZP.hr(T||(T=(0,s.Z)(["\n  margin: 1.3rem 0;\n  border: 1px solid var(--project1-hr);\n"]))),Y=c.ZP.div(X||(X=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1.5rem;\n  font-size: 1rem;\n"]))),Q=c.ZP.button(q||(q=(0,s.Z)(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: var(--gradient-primary);\n  width: fit-content;\n  display: grid;\n  place-content: center;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 2;\n\n  @media (width <= 37.5rem) {\n    top: 0.4rem;\n    right: 0.4rem;\n    padding: 7px;\n  }\n"])));var W,$,nn=r(9923);const en=[1,2,3];const rn=function(){return(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)(tn,{id:"Projects",children:[(0,l.jsx)(nn.Z,{title:"Completed Projects"}),(0,l.jsx)(on,{children:en.map((n=>(0,l.jsx)(U,{},n)))})]})})},tn=c.ZP.section(W||(W=(0,s.Z)(["\n  margin: 2rem 0 3rem;\n  scroll-margin-top: 2rem;\n"]))),on=c.ZP.div($||($=(0,s.Z)(["\n  margin-top: 2rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4rem;\n"])))},9923:(n,e,r)=>{r.d(e,{Z:()=>s});const t="TitleUnderline_titleContainer__45k6K",i="TitleUnderline_underline__3pGEM";var o=r(184);const s=function(n){let{title:e}=n;return(0,o.jsxs)("div",{className:t,children:[(0,o.jsx)("h1",{children:e}),(0,o.jsx)("div",{className:i})]})}}}]);
//# sourceMappingURL=533.db568e21.chunk.js.map