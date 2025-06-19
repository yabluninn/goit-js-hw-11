import{a as f,i as s,S as m}from"./assets/vendor-D8_O3--j.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const y=async a=>{try{const t=await f.get(`https://pixabay.com/api/?key=50871412-165a861e59de274a11f9f1fdc&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`);return t.data.hits.length<=0?(s.error({message:"Sorry, there are no images matching your search query. Please try again!"}),[]):t.data.hits}catch(t){return console.error(t),s.error({message:"Something went wrong. Please try again later."}),[]}},c=document.querySelector(".gallery"),u=document.querySelector(".loader");let i=null;const g=a=>{const t=a.map(r=>`
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
    `).join("");d(),c.insertAdjacentHTML("beforeend",t),i?i.refresh():i=new m(".gallery a",{captionsData:"alt",captionDelay:250})},d=()=>{c.innerHTML=""};function p(){u.style.display="block"}function h(){u.style.display="none"}const b=document.querySelector(".form"),w=document.querySelector(".search-input");b.addEventListener("submit",async a=>{a.preventDefault(),d();const t=w.value.trim();if(t===""){s.warning({message:"Please enter a search query."});return}p();try{const r=await y(t);r.length>0?g(r):s.info({message:"Sorry, there are no images matching your search query. Please try again!"})}catch(r){console.error("Error loading images:",r),s.error({message:"Something went wrong while loading images."})}finally{h()}});
//# sourceMappingURL=index.js.map
