import{b as m}from"./assets/vendor-9b35bc79.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGKSURBVHgBzdgxVoNAEAbgIdsgFXACvYGlpTdRu5SWdnqD2FqJN9AbeAUvAnaUOLMv5GHC7s7szr6X/z3ekiwwX1gC2QCcY+q6fm6aZqAF13eQOWv1zL5jVxTFE66WtOD6TVVVl+M4fkGGtG37js3jsl5ZYkOdpCPT8U64Udf3/QMohiDTNN2vdP1ufDvSTvtPkRtiY4cJh+QCm1vHNtcaQxaCYN+bxWChbyx4RYUhAygEwcvhYxiGrZnfwEKfOUAcCF6Xtt8sO7RBEsgJRhMkhaxiNEAxECcmBRQL8WJiQCkQ2w+MYJEOi9x5inTUpkDYGA7IW4QBoRhghjFkSRARJgYkgYgxEpAUQtlAXCalbf5FfGZCX99FxM8yEUYAiQKxMREQMYiF4dxZcfmBxIdrEMO9xWs87Y0GZH6dCjJaEA2Q0YSkgow2JAVkckBiQSYXJAZ0mGtjswVliAQUnGtrQJYJ/EDzz7U1IRQ6Fh3T1e+ca2tD5riGjObahxd4Cl/nP29w/QUyZ63eHxt6jFIw0uczAAAAAElFTkSuQmCC",d=document.querySelector(".btn-footer");function A(){document.body.style.overflow="hidden"}function p(){document.body.style.overflow="visible"}const i=m.create('<div class="modal-team"></div>',{onShow:()=>{document.addEventListener("keydown",c),A()},onClose:()=>{document.removeEventListener("keydown",c),p()}});function u(){i.show();const s=document.querySelector(".modal-team");s.innerHTML=`<div class="modal modal-our-team container">
    <section class="our-team">
      <button class="modal-close-btn" type="button" aria-label="close">
        <img class="modal-close-svg" src="${r}" alt="" width="24" height="24" loading="lazy"/>
      </button>
       <h2 class = "title-team">Team <span class = "title-shark">JS 11</span></h2>
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
      <h3 class = "team-name">Vlad Kravchenko</h3>
      <p class = "team-position">Developed 4</p>
      </li>
      <li class = "team-item">
      <h3 class = "team-name">FirstName LastName</h3>
      <p class = "team-position">Developed 5</p>
      </li>
      </ul>
    </section>
    </div>
    `,document.querySelector(".modal-close-btn").addEventListener("click",h)}function h(s){i.close()}function c(s){s.code==="Escape"&&i.close()}d.addEventListener("click",u);
//# sourceMappingURL=commonHelpers.js.map
