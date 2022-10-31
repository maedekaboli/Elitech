import axios from 'axios';

const instance =axios.create({
    baseURL: 'https://api.elitechpart.com/api/'
})

export default instance;