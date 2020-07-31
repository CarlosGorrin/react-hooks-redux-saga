import axios from 'axios';

// const baseURL = 'https://wwww.omdbapi.com/?apiKey=ffd0c3a5';
const baseURL = 'https://imdb-api.com/en/API/SearchMovie/k_GTH71R24/';

export const apiCall = (url, data, headers, methods) => axios({
    // method,
    url: baseURL + url,
    data,
    headers
});

