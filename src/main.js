import { getImagesByQuery } from './js/pixabay-api.js';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = document.querySelector(".search-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearGallery();

  const query = input.value.trim();
  if (query === "") {
    iziToast.warning({
      message: 'Please enter a search query.',
    });
    return;
  }
  showLoader();

  try {
    const images = await getImagesByQuery(query);
    if (images.length > 0) {
      createGallery(images);
    } else {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    }
  } catch (err) {
    console.error("Error loading images:", err);
    iziToast.error({
      message: 'Something went wrong while loading images.',
    });
  } finally {
    hideLoader();
  }
});