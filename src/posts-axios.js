import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://project1-posts.firebaseio.com/'
});

export default instance;