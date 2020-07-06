import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-f860d.firebaseio.com/'
});

export default instance;