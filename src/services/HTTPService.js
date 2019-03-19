import axios from 'axios';

const http = axios.create({
   baseURL: 'http://localhost:3000/api/'
});

class HTTPService {
    get() {
        return http.get('cars')
    }

    post(url, body) {
        return http.post(url, body)
    }
}

export const httpService = new HTTPService();