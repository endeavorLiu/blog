(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{592:function(t,e,n){},637:function(t,e,n){"use strict";var s=n(3),i=n(2),r=n(73),o=i([].reverse),a=[1,2];s({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),o(this)}})},638:function(t,e,n){"use strict";n(592)},647:function(t,e,n){"use strict";n.r(e);var s=n(71),i=(n(94),n(29),n(68),n(74),n(6),n(75),n(306),n(307),n(637),{name:"",data:function(){return{strs:[{title:"遇见你",stop:5},{title:"我的世界"},{title:"从此没有了星辰大海"},{title:"因为"},{title:"在遇见你的那一刻"},{title:"浩瀚众星"},{title:"皆降为尘"}],currentIndex:0,spans:null,el:null}},mounted:function(){var t=this;if(this.el=document.querySelector(".hero .description"),this.el)this.init();else var e=this,n=setInterval((function(){t.el&&(n&&clearInterval(n),e.init()),t.el=document.querySelector(".hero .description")}),100)},methods:{init:function(){var t=this;this.currentIndex==this.strs.length&&(this.currentIndex=0),this.el.innerHTML=this.strs[this.currentIndex].title,this.el.innerHTML=this.el.textContent.replace(/\S/g,"<span>$&</span>");var e=0;this.spans=Object(s.a)(document.querySelectorAll(".hero .description span")),this.spans.forEach((function(n,s){e+=.1,t.strs[t.currentIndex].hasOwnProperty("stop")&&(t.strs[t.currentIndex].stop instanceof Array?t.strs[t.currentIndex].stop.includes(s)&&(e+=.3):t.strs[t.currentIndex].stop==s&&(e+=.3)),n.style.setProperty("--delay","".concat(e,"s"))})),this.el.addEventListener("animationend",this.lastEnd)},lastEnd:function(t){var e=this;t.target==document.querySelector(".hero .description span:last-child")&&(this.el.classList.add("ended"),setTimeout((function(){e.el.removeEventListener("animationend",e.lastEnd);var t=0;e.spans.reverse().forEach((function(n,s){e.el.classList.remove("ended"),n.style.width="2ch",n.style.animation="0.1s text-out ease-in-out forwards",t+=.05,n.style.animationDelay="".concat(t,"s")})),e.el.addEventListener("animationend",e.firstEnd)}),2e3))},firstEnd:function(t){t.target==document.querySelector(".hero .description span:first-child")&&(this.spans.forEach((function(t){t.remove()})),this.el.removeEventListener("animationend",this.firstEnd),this.currentIndex++,this.init())}}}),r=(n(638),n(11)),o=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=o.exports}}]);