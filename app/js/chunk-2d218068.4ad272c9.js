(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d218068"],{c8da:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_ripple_effect",(function(){return s}));var e=i("f530"),a=i("6d28"),o=i("7d8d"),r=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}",s=function(){function t(t){Object(a["o"])(this,t),this.type="bounded"}return t.prototype.addRipple=function(t,n){return Object(e["a"])(this,void 0,void 0,(function(){var i=this;return Object(e["c"])(this,(function(e){return[2,new Promise((function(e){Object(a["h"])((function(){var o=i.el.getBoundingClientRect(),r=o.width,s=o.height,m=Math.sqrt(r*r+s*s),u=Math.max(s,r),d=i.unbounded?u:m+f,p=Math.floor(u*l),b=d/p,w=t-o.left,y=n-o.top;i.unbounded&&(w=.5*r,y=.5*s);var h=w-.5*p,k=y-.5*p,v=.5*r-w,g=.5*s-y;Object(a["f"])((function(){var t=document.createElement("div");t.classList.add("ripple-effect");var n=t.style;n.top=k+"px",n.left=h+"px",n.width=n.height=p+"px",n.setProperty("--final-scale",""+b),n.setProperty("--translate-end",v+"px, "+g+"px");var a=i.el.shadowRoot||i.el;a.appendChild(t),setTimeout((function(){e((function(){c(t)}))}),325)}))}))}))]}))}))},Object.defineProperty(t.prototype,"unbounded",{get:function(){return"unbounded"===this.type},enumerable:!1,configurable:!0}),t.prototype.render=function(){var t,n=Object(o["b"])(this);return Object(a["j"])(a["c"],{role:"presentation",class:(t={},t[n]=!0,t["unbounded"]=this.unbounded,t)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(a["k"])(this)},enumerable:!1,configurable:!0}),t}(),c=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},f=10,l=.5;s.style=r}}]);
//# sourceMappingURL=chunk-2d218068.4ad272c9.js.map