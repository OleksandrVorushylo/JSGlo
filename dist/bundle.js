(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n,r,l,o,a,i,c,s,u,d,y,f,v,m,p,b,h,g,S,E,q,L,A;L=document.querySelector(".modal-callback"),A=document.querySelector(".modal-overlay"),document.querySelectorAll(".fancyboxModal").forEach((function(t){t.addEventListener("click",(function(){L.style.display="block",A.style.display="block"}))})),L.addEventListener("click",(function(t){t.target.closest(".modal-close")&&(L.style.display="none",A.style.display="none")})),A.addEventListener("click",(function(){L.style.display="none",A.style.display="none"})),function(){var e,n=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var l=0,o=function(){};return{s:o,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}(document.querySelectorAll('a[href*="#"]'));try{var r=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var n=t.getAttribute("href");e.target.classList.contains("fancyboxModal")?e.preventDefault():document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(n.s();!(e=n.n()).done;)r()}catch(t){n.e(t)}finally{n.f()}}(),S=document.querySelectorAll(".top-slider .item"),E=document.querySelectorAll(".top-slider .item .table"),q=0,E[0].style.cssText="opacity: 1;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvisibility: visible;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttransition:all ease 1s;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",setInterval((function(){var t,e;t=E,S[e=q].style.display="none",t[e].style.opacity="0",t[e].style.visibility="hidden",++q>=S.length&&(q=0),function(t,e,n){t[n].style.display="block",e[n].style.opacity="1",e[n].style.visibility="visible"}(S,E,q)}),3e3),p=document.querySelector(".services-carousel"),b=document.querySelector(".arrow-left"),h=document.querySelector(".arrow-right"),g=0,p.style.cssText="position: relative;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttransition:all ease 1s;",b.addEventListener("click",(function(){(g-=400)<0&&(g=1200),p.style.left=-g+"px"})),h.addEventListener("click",(function(){(g+=400)>1200&&(g=0),p.style.left=-g+"px"})),y=document.querySelector(".accordeon"),f=y.querySelectorAll(".element"),v=y.querySelectorAll(".element-content"),m=y.querySelectorAll(".title"),y.addEventListener("click",(function(t){var e=t.target;e.classList.contains("title")&&m.forEach((function(t,n){t===e&&function(t){for(var e=0;e<v.length;e++)t===e?(v[e].style.display="block",v[e].style.display="transition:all ease 1s;",f[e].classList.add("active")):(v[e].style.display="none",v[e].style.display="transition:all ease 1s;",f[e].classList.remove("active"))}(n)}))})),u=document.querySelector(".up"),d=document.querySelector(".services-section").getBoundingClientRect().top,u.style.cssText="display: none;\n                        ",u.style.bottom="0px",window.addEventListener("scroll",(function(){window.scrollY>d?u.classList.add("up-animation"):u.classList.remove("up-animation")})),u.addEventListener("click",(function(){window.scrollBy({top:-window.scrollY,behavior:"smooth"})})),function(){var t=document.querySelectorAll("form"),n=document.querySelector(".feedback"),r=document.createElement("div");r.style.cssText="font-size: 2rem;\n                                  color: #333333;";var l=document.querySelector(".modal-callback"),o=document.querySelector(".modal-overlay");t.forEach((function(t){t.addEventListener("submit",(function(i){i.preventDefault(),t.appendChild(r),r.textContent="Загрузка...",n.classList.add("circle");var c,s=new FormData(t),u={};s.forEach((function(t,e){u[e]=t})),a(u).then((function(t){if(200!==t.status)throw new Error("status network not 200.");r.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){r.textContent="",n.classList.remove("circle"),n.value="Отправить",setTimeout((function(){l.style.display="none",o.style.display="none"}),6e3)}),3e3)})).catch((function(t){r.textContent="Что то пошло не так",console.error(t),setTimeout((function(){r.textContent="",n.classList.remove("circle"),n.value="Отправить",setTimeout((function(){l.style.display="none",o.style.display="none"}),6e3)}),3e3)})),(c=t,function(t){if(Array.isArray(t))return e(t)}(c)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t){t.value=""}))}));var a=function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}}))}(),i=document.querySelectorAll("form"),c=document.querySelectorAll("input"),s=document.querySelectorAll(".feedback"),i.forEach((function(t){var e=document.createElement("div");e.className="error-phone",e.textContent="Номер должен быть в формате +7(XXX)XXX-XX-XX\n                              Количество символов: 10",e.style.fontSize="10px",e.style.color="red",t.addEventListener("input",(function(n){var r=n.target;"fio"===r.id&&(r.value=r.value.replace(/[^а-яё -,.]/gi,"")),"tel"===r.id&&(r.value=r.value.replace(/^\+?[0378]([-()]*\d){9,11}$/gi,""),t.addEventListener("input",(function(){r.value.length<18&&(s[0].disabled=!0,s[0].style.background="gray",r.insertAdjacentElement("afterend",e),e.style.display="block"),r.value.length>=18&&(s[0].disabled=!1,s[0].style.background="#e9bb26",e.style.display="none")})))}))})),c.forEach((function(t){t.addEventListener("blur",(function(t){var e=t.target;"fio"===e.id&&(e.value=e.value.replace(/[^а-яё -]/gi,""),e.value=e.value.trim(),e.value=e.value.replace(/\s+/gi," "),e.value.length<2&&(s[0].disabled=!0,s[0].style.background="gray"),e.value.length>=2&&(s[0].disabled=!1,s[0].style.background="#e9bb26"),e.value.match(/^-+|-+$/)?(e.value=e.value.replace(/^-+|-+$/g,""),e.value.match(/^\s+|\s+$/)&&(e.value=e.value.replace(/^\s+|\s+$/g,""))):e.value=e.value.replace(/-+/g,"-"),e.value=e.value.split(/\s+/).map((function(t){return t[0].toUpperCase()+t.substring(1)})).join(" ")),"tel"===e.id&&(e.value=e.value.replace(/^\+?[0378]([-()]*\d){9,11}$/gi,""),e.value=e.value.trim())}))})),n=document.querySelector(".mob-menu-btn"),r=document.querySelector(".mobile-menu"),l=document.querySelector(".mobile-menu-close"),o=document.querySelector(".overlay"),a=r.querySelectorAll("a"),n.addEventListener("click",(function(){r.classList.add("active-menu"),o.style.zIndex="100",o.style.opacity="1"})),l.addEventListener("click",(function(){r.classList.remove("active-menu"),o.style.zIndex="-100",o.style.opacity="0"})),a.forEach((function(t){t.addEventListener("click",(function(){r.classList.remove("active-menu"),o.style.zIndex="-100",o.style.opacity="0"}))}))})();