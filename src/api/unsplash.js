import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID 0IgglLAdD1bjTujxPZjHA9dSCJ8ri8OpWskXKab8k5o'
    }  
});