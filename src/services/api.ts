import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge',
})