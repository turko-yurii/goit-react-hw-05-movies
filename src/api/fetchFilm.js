import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '85be37a90c90df7db10ddcbe0271c9f8';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWJlMzdhOTBjOTBkZjdkYjEwZGRjYmUwMjcxYzlmOCIsInN1YiI6IjY1MzU2MzE4YzE0ZmVlMDEwMGU5YTE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6Vl5Z9QPs0Kljgk0gLQ9VVSoJ4UBj9z4GMeWwep9b4w',
  },
};

// функція отримання переліку топових фільмів на день
export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  return response.data;
};

// функція отримання детальної інформації по обраному фільму
export const getDetailMovie = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}?language=en-US`,
    options
  );
  return response.data;
};

// функція отримання детальної інформації про акторський склад для сторінки кінофільму
export const getCast = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}/credits?language=en-US`,
    options
  );
  return response.data;
};

// функція запиту оглядів для сторінки кінофільму
export const getReviews = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}/reviews?language=en-US`,
    options
  );
  return response.data;
};

// функція пошуку фільма за назвою
export const getFilm = async filmName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${filmName}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data;
};
