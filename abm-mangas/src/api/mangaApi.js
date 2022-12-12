import axios from 'axios';

export const mangaApi = axios.create({
    baseURL: 'https://api.mangaupdates.com/v1'
});