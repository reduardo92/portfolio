// import './../scss/main.scss';
// Init carousel
let o;const t=document.querySelectorAll(".carousel");M.Carousel.init(t,{shift:60,dist:-280}),document.querySelector(".nav--toggle").addEventListener("click",()=>{document.body.classList.toggle("nav-open")});// Scroll Navbar
const e=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>e.offsetHeight+300?e.classList.add("scrollNav"):e.classList.remove("scrollNav")});// Cursor Fallow Animations
const a=document.querySelector(".fallow--curser");function c(o,t,e){o===t?e.to(`.nav--container a[href='#${t}']`,{className:"+=nav--links active"}):e.to(`.nav--container a[href='#${t}']`,{className:"+=nav--links"})}//# sourceMappingURL=index.a00309d0.js.map
window.addEventListener("mousemove",o=>{a.style.top=`${o.pageY}px`,a.style.left=`${o.pageX}px`}),window.addEventListener("mouseover",o=>{let t=o.target.classList;t.contains("logo--img")||t.contains("nav--links")||t.contains("icon")||t.contains("btn")?a.classList.add("cursor-animate"):a.classList.remove("cursor-animate")}),(o=>{let t=document.querySelector(o),e=t.textContent.split("").map(o=>" "===o?` <span class='span--title'>${o}</span>`:`<span class='span--title'>${o}</span>`).join("");return t.innerHTML=e})(".hero--content__title"),// CALL GSAP;
(()=>{// Init Controller
// Elements
let o=document.querySelector(".header"),t=o.querySelector(".nav--logo"),e=document.querySelector(".hero--content"),a=gsap.timeline({defaults:{duration:1,ease:"powe2.inOut"}});a.fromTo(".load-screen span",3,{y:"-50%",opacity:0},{y:"0",opacity:1,stagger:.15}).to(".load-screen",.5,{opacity:0},"-=.50").to("body",.1,{overflow:"hidden auto"}),a.fromTo(o,1.7,{top:"-100%"},{top:"0%"},"-=1"),a.fromTo(t,{x:"-100%",opacity:0},{x:"0%",opacity:1}),///////////  HOME SECTION \\\\\\\\\\\\\\
// ME IMG DIV
a.fromTo(e.children[0],{scale:1.3,opacity:0},{scale:1,opacity:1},"-=1"),// ME IMG
a.fromTo(e.children[0].firstElementChild,{scale:2.5,opacity:0},{scale:1,opacity:1},"-=1.1"),// TITLE
a.fromTo(".span--title",.5,{display:"inline-block",opacity:0,y:"100px"},{opacity:1,y:"0px",stagger:.08},"-=.10"),// SUBTITLE ,BTN,LINKS
a.fromTo([e.children[2],e.children[3],e.children[4]],{scale:.9,opacity:0},{scale:1,opacity:1},"-=.20"),// BTN MOVE Y
a.fromTo(e.children[4],{y:"50px"},{y:"0px"},"-=.98")})(),// Init Controller
o=new ScrollMagic.Controller,// Elements
document.querySelectorAll(".section").forEach(t=>{let e=t.querySelector(".cont"),a=gsap.timeline({defaults:{duration:1,ease:"powe2.inOut"}});////////// ABOUT \\\\\\\\\\\
e.classList.contains("about--content")&&a.fromTo(".about--content__avatar",{x:"-300px",opacity:0},{x:"0px",opacity:1},"-=.90").fromTo(".about .about--content__text",{x:"300px",opacity:0},{x:"0px",opacity:1},"-=.40").fromTo(".about--content__avatar .avatar--img",{scale:2,opacity:0},{scale:1,opacity:1},"-=.90").to(".about--content__avatar",{overflow:"visible"}).fromTo([".about .email--box",".about .about--content__links"],{y:"20px",opacity:0},{y:"0px",opacity:1},"-=1").fromTo(".about .btn",{y:"20px",opacity:0},{y:"0px",opacity:1}),///////// PORTFOLIO \\\\\\\\\\\
e.classList.contains("p-content")&&a.fromTo(".portfolio .title",{y:"-200px",opacity:0},{y:"0px",opacity:1}).fromTo(".portfolio--content__card--screens",{x:"-300px",opacity:0},{x:"0px",opacity:1},"-=.85").fromTo(".portfolio--content__card--info",{x:"300px",opacity:0},{x:"0px",opacity:1},"-=.85").fromTo([".portfolio--content__card--screens .tablet",".portfolio--content__card--screens .laptop"],{opacity:0,transformOrigin:"bottom",scale:0},{opacity:1,scale:1},"-=.80"),////////// SKILLS \\\\\\\\\\\\\
e.classList.contains("skills--content")&&a.fromTo(".skills .title",{y:"-200px",opacity:0},{y:"0px",opacity:1}).fromTo(".skills--tabs__tab",{opacity:0,scale:.2},{opacity:1,scale:1,stagger:.1}),////////// CONTACT \\\\\\\\\\\\\
e.classList.contains("contact--content")&&a.fromTo(".contact .title",{y:"-200px",opacity:0},{y:"0px",opacity:1}).fromTo(".contact--content__boxes--box",{opacity:0,x:"-300px"},{opacity:1,x:"0px",stagger:.15},"-=.95").fromTo(".contact--form__group",{opacity:0,x:"300px"},{opacity:1,x:"0px",stagger:.15},"-=.95").fromTo(".contact--links",{opacity:0,x:"50px"},{opacity:1,x:"0px"},"-=.95").fromTo(".contact .btn",{opacity:0,x:"-50px"},{opacity:1,x:"0px"},"-=.95"),new ScrollMagic.Scene({triggerElement:t,triggerHook:.8,reverse:!1}).setTween(a).addTo(o)}),// Init Controller
o=new ScrollMagic.Controller,// Elements
document.querySelectorAll("section").forEach(t=>{//   GSAP TIMELINE
let e=gsap.timeline({defaults:{duration:.1,ease:"powe2.inOut"}});//   HOME
c(t.id,"home",e),//   ABOUT
c(t.id,"about",e),//   PORTFOLIO
c(t.id,"portfolio",e),//   SKILLS
c(t.id,"skills",e),//   CONTACT
c(t.id,"contact",e),new ScrollMagic.Scene({triggerElement:t,triggerHook:.15}).setTween(e).addTo(o)});
//# sourceMappingURL=index.a00309d0.js.map
