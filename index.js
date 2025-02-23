import{a as d,S as u,i as l}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="https://pixabay.com",m="/api";function g(a){const r=new URLSearchParams({key:"48897316-c1284323f9ede48e892c0fd4f",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=f+m+`?${r}`;return d.get(o)}const p=new u(".gallery a",{captionsData:"alt",captionDelay:250,close:"true"});function h(a){const r=document.querySelector(".gallery"),o=a.map(s=>`<li class="gallery-item">
            <a class='gallery-link' href="${s.largeImageURL}">
              <img class="li-img"
              src="${s.webformatURL}" 
              alt="${s.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${s.likes}</td><td>${s.views}</td><td>${s.comments}</td><td>${s.downloads}</tr>
                </table>
              
                </div>
              </a>
            </li>
            
    `).join("");r.insertAdjacentHTML("afterbegin",o),p.refresh()}const c=document.querySelector(".form"),y=document.querySelector(".input-search"),n=document.querySelector(".wait-msg");c.addEventListener("submit",a=>{a.preventDefault();let r=y.value.trim();if(!r){l.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"});return}n.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',g(r).then(o=>{o.data.hits.length==0?l.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}):h(o.data.hits),n.textContent=""}).catch(o=>{n.textContent="Ups ...",console.log(o)}),c.reset()});
//# sourceMappingURL=index.js.map
