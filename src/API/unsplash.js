
import axios from "axios";

export default axios.create({
baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
        'Client-ID PuMfjDS1_SjfbiRgKINzv9L_7bieRpvIRSwnq8sOusE'
    }
               
});

