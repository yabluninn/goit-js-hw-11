import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery } from './js/render-functions.js';

const button = document.querySelector(".search-button");
const input = document.querySelector(".search-input");
const loader = document.querySelector(".loader");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  clearGallery();

  const query = input.value.trim();
  if (query === "") return;
  showLoader();

  try {
    const images = await getImagesByQuery(query);
    if (images.length > 0) {
      createGallery(images);
    }
  } catch (err) {
    console.error("Error loading images:", err);
  } finally {
    hideLoader();
  }
});

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}