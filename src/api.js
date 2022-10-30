import axios from 'axios';

const instance =axios.create({
    baseURL: 'http://api.elitechpart.com/api/'
})

export default instance;