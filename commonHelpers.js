import{b as p}from"./assets/vendor-9b35bc79.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGKSURBVHgBzdgxVoNAEAbgIdsgFXACvYGlpTdRu5SWdnqD2FqJN9AbeAUvAnaUOLMv5GHC7s7szr6X/z3ekiwwX1gC2QCcY+q6fm6aZqAF13eQOWv1zL5jVxTFE66WtOD6TVVVl+M4fkGGtG37js3jsl5ZYkOdpCPT8U64Udf3/QMohiDTNN2vdP1ufDvSTvtPkRtiY4cJh+QCm1vHNtcaQxaCYN+bxWChbyx4RYUhAygEwcvhYxiGrZnfwEKfOUAcCF6Xtt8sO7RBEsgJRhMkhaxiNEAxECcmBRQL8WJiQCkQ2w+MYJEOi9x5inTUpkDYGA7IW4QBoRhghjFkSRARJgYkgYgxEpAUQtlAXCalbf5FfGZCX99FxM8yEUYAiQKxMREQMYiF4dxZcfmBxIdrEMO9xWs87Y0GZH6dCjJaEA2Q0YSkgow2JAVkckBiQSYXJAZ0mGtjswVliAQUnGtrQJYJ/EDzz7U1IRQ6Fh3T1e+ca2tD5riGjObahxd4Cl/nP29w/QUyZ63eHxt6jFIw0uczAAAAAElFTkSuQmCC",A=document.querySelector(".btn-footer");function f(){document.body.style.overflow="hidden"}function v(){document.body.style.overflow="visible"}const d=p.create('<div class="modal-team"></div>',{onShow:()=>{document.addEventListener("keydown",u),f()},onClose:()=>{document.removeEventListener("keydown",u),v()}});function y(){d.show();const t=document.querySelector(".modal-team");t.innerHTML=`<div class="modal modal-our-team container">
    <section class="our-team">
      <button class="modal-close-btn" type="button" aria-label="close">
      
        <img class="modal-close-svg" src="${h}" alt="" width="24" height="24" loading="lazy"/>
      </button>
       <h2 class = "title-team">Team <span class = "title-11">JS 11</span></h2>
      <ul class="list team-list">
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">Team leader, developed authorization feature</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>

      <p class = "team-position">Scrum master, developed</p>

      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">Developed dark theme feature, footer, modal 'Our team'</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">Developed cards for books for each category</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">1</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">Developed 2</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">3 </p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">Developed 4</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">Developed 5</p>
      </li>
      </ul>
    </section>
    </div>
    `,document.querySelector(".modal-close-btn").addEventListener("click",b)}function b(t){d.close()}function u(t){t.code==="Escape"&&d.close()}A.addEventListener("click",y);const m=document.querySelector('input[type="checkbox"]'),g=document.querySelector(".sign-up-button"),o={startBackdrop:document.querySelector(".start-backdrop"),startCloseBtn:document.querySelector(".start-close-btn"),form:document.querySelector(".start-form")},L="form-data";let l={};function k(){o.startBackdrop.classList.remove("start-hidden"),document.body.classList.add("scroll-lock")}function E(){o.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock")}function N(t){t.preventDefault();const{name:a,email:n,password:c}=t.currentTarget.elements;l.name=a.value,l.email=n.value,l.password=c.value,localStorage.setItem(L,JSON.stringify(l)),t.currentTarget.reset(),o.startBackdrop.classList.add("start-hidden")}function S(t){t.code==="Escape"&&(o.startBackdrop.classList.add("start-hidden"),document.body.classList.remove("scroll-lock"))}o.startCloseBtn.addEventListener("click",E);o.form.addEventListener("submit",N);window.addEventListener("keydown",S);const r=localStorage.getItem("theme");r&&(document.body.classList.add(r),m.checked=r==="dark");function C(){m.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))}m.addEventListener("change",C);g.addEventListener("click",k);
//# sourceMappingURL=commonHelpers.js.map
