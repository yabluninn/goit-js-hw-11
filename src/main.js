import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';

const form = document.querySelector(".form");
const input = document.querySelector(".search-input");

form.addEventListener("submit", async (e) => {
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