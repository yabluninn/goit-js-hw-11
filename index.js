import{a as f,i as c,S as y}from"./assets/vendor-D8_O3--j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p=async s=>{try{const t=await f.get(`https://pixabay.com/api/?key=50871412-165a861e59de274a11f9f1fdc&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);return t.data.hits.length<=0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),t.data.hits}catch(t){return console.error(t),c.error({message:"Something went wrong. Please try again later."}),[]}},l=document.querySelector(".gallery");let n=null;const m=s=>{const t=s.map(r=>`
      <li class="image-container">
        <a href="${r.largeImageURL}" class="gallery-item">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="image-footer">
          <p><b>Likes</b>: ${r.likes}</p>
          <p><b>Views</b>: ${r.views}</p>
          <p><b>Comments</b>: ${r.comments}</p>
          <p><b>Downloads</b>: ${r.downloads}</p>
        </div>
      </li>
    `).join("");u(),l.insertAdjacentHTML("beforeend",t),n?n.refresh():n=new y(".gallery a",{captionsData:"alt",captionDelay:250})},u=()=>{l.innerHTML=""},g=document.querySelector(".search-button"),h=document.querySelector(".search-input"),d=document.querySelector(".loader");g.addEventListener("click",async s=>{s.preventDefault(),u();const t=h.value.trim();if(t!==""){b();try{const r=await p(t);r.length>0&&m(r)}catch(r){console.error("Error loading images:",r)}finally{L()}}});function b(){d.style.display="block"}function L(){d.style.display="none"}
//# sourceMappingURL=index.js.map
