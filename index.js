import{a as f,i as l,S as y}from"./assets/vendor-D8_O3--j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p=async s=>{try{const t=await f.get(`https://pixabay.com/api/?key=50871412-165a861e59de274a11f9f1fdc&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`);return t.data.hits.length<=0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),[]):t.data.hits}catch(t){return console.error(t),l.error({message:"Something went wrong. Please try again later."}),[]}},c=document.querySelector(".gallery"),u=document.querySelector(".loader");let n=null;const m=s=>{const t=s.map(r=>`
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
    `).join("");d(),c.insertAdjacentHTML("beforeend",t),n?n.refresh():n=new y(".gallery a",{captionsData:"alt",captionDelay:250})},d=()=>{c.innerHTML=""};function g(){u.style.display="block"}function h(){u.style.display="none"}const b=document.querySelector(".form"),L=document.querySelector(".search-input");b.addEventListener("submit",async s=>{s.preventDefault(),d();const t=L.value.trim();if(t!==""){g();try{const r=await p(t);r.length>0&&m(r)}catch(r){console.error("Error loading images:",r)}finally{h()}}});
//# sourceMappingURL=index.js.map
