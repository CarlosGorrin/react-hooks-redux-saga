import axios from 'axios';

const baseURL = 'http://wwww.omdbapi.com/?apiKey=ffd0c3a5';

export const apiCall = (url, data, headers, methods) => axios({
    method,
    url: baseURL + url,
    data,
    headers
});