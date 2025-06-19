import axios from 'axios';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export const getImagesByQuery = async (query) => {
  try {
    const response = await axios.get(`https://pixabay.com/api/?key=50871412-165a861e59de274a11f9f1fdc&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);

    if (response.data.hits.length <= 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return [];
    }

    return response.data.hits;
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
    return [];
  }
}