if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let c={};const u=s=>i(s,n),a={module:{uri:n},exports:c,require:u};e[n]=Promise.all(r.map((s=>a[s]||u(s)))).then((s=>(l(...s),c)))}}define(["./workbox-db5fc017"],(function(s){"use strict";s.setCacheNameDetails({prefix:"devirian"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/about.b500a086.css",revision:null},{url:"/css/access.f4cae7c3.css",revision:null},{url:"/css/app.f061dec1.css",revision:null},{url:"/css/chat.df03d60c.css",revision:null},{url:"/css/chunk-vendors.1c118c39.css",revision:null},{url:"/css/dashboard.0d9846ba.css",revision:null},{url:"/css/tasks.0d9846ba.css",revision:null},{url:"/img/avatar.png",revision:"7a0b0259be0ea65cba8feaab3e3c93c8"},{url:"/img/azeroth.png",revision:"2771b66e09ff0e0bfef87bf61faeba25"},{url:"/img/background.jpg",revision:"e2dcc90b5988714467c68e9290d6982e"},{url:"/img/paisagem1.jpg",revision:"d0208f3f3455ba8ab93fb2b7d27730b4"},{url:"/img/paisagem2.jpg",revision:"b93f1b604970aa294e8fe61dbd3b4537"},{url:"/img/paisagem4.jpg",revision:"864e2dac9a6b8310debd4a272c60d21c"},{url:"/img/paisagem5.jpg",revision:"bf18d5817bcd87acc2b57f373ac8b3c7"},{url:"/img/paisagem7.jpg",revision:"88a352d0cc15f4e9aec38336543e778d"},{url:"/img/slider.jpg",revision:"e4d3efb28fcf124f87d24b45d94ad862"},{url:"/index.html",revision:"b7f615a4294d686c64e23c9e8d009477"},{url:"/js/241.84f1fafe.js",revision:null},{url:"/js/306.12ec3ff2.js",revision:null},{url:"/js/339.57e71655.js",revision:null},{url:"/js/559.21cdc1f9.js",revision:null},{url:"/js/about.bded5ff8.js",revision:null},{url:"/js/access.0cee55da.js",revision:null},{url:"/js/app.e4c22514.js",revision:null},{url:"/js/chat.9ef69aec.js",revision:null},{url:"/js/chunk-vendors.0cc83773.js",revision:null},{url:"/js/dashboard.dcb8ee42.js",revision:null},{url:"/js/externalIndex.04409b7f.js",revision:null},{url:"/js/resetPassword.4b579c03.js",revision:null},{url:"/js/tasks.1cb8d173.js",revision:null},{url:"/manifest.json",revision:"c603aaa5475e36587018eb7f70bbfe0f"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
