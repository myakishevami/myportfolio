webpackJsonp([2],{11:function(t,e,r){"use strict";r(12)},12:function(t,e,r){"use strict";var n,s=r(0),i=(n=s)&&n.__esModule?n:{default:n};var o={template:"#slider-info",props:{work:Object},methods:{callback:function(t){console.log(t)},enterHandler:function(t,e){var r=t.innerText.trim().split("").map(function(t){return'\n          <span class ="'+(" "===t?"whitespace":"")+'">'+t+"</span>\n        "}).join("");t.innerHTML=r;var n=0;!function t(e){var r=e[n],s=setTimeout(function(){t(e)},20);r.classList.add("bounceIn"),++n>=e.length&&clearTimeout(s)}(Array.from(t.children)),e()}}},a={template:"#slider-display",props:{work:Object}},c={template:"#slider-buttons",props:{works:Array,currentIndex:Number},methods:{slide:function(t){this.$emit("slide",t)},getReqImage:function(t){var e=[].concat(function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}(this.works));switch(t){case"prev":var r=e[e.length-1];e.unshift(r),e.pop();break;case"next":e.push(e[0]),e.shift()}return e[this.currentIndex]}}};new i.default({el:"#slider-component",components:{info:o,display:a,buttons:c},data:{works:[],currentWork:{},currentIndex:0},watch:{currentIndex:function(t){var e=this.works.length-1;t>e&&(this.currentIndex=0),t<0&&(this.currentIndex=e),console.log(t),this.currentWork=this.works[t]}},created:function(){this.works=r(13),this.currentWork=this.works[0]},methods:{handleSlide:function(t){switch(t){case"next":this.currentIndex=this.currentIndex+1;break;case"prev":this.currentIndex=this.currentIndex-1}console.log(t)}},template:"#slider"})},13:function(t,e){t.exports=[{id:1,title:"1 Сайт школы онлайн образования",skills:"1 Html, Css, JavaScript",photo:"/assets/images/content/slider/work-1.png",link:"//google.com"},{id:2,title:"2 Сайт школы онлайн образования",skills:"2 Html, Css, JavaScript",photo:"/assets/images/content/slider/work-2.png",link:"//yandex.ru"},{id:3,title:"3 Сайт школы онлайн образования",skills:"3 Html, Css, JavaScript",photo:"/assets/images/content/slider/work-3.png",link:"//rambler.ru"},{id:4,title:"4 Сайт школы онлайн образования",skills:"4 Html, Css, JavaScript",photo:"/assets/images/content/slider/work-4.png",link:"//vk.com"}]}},[11]);