import axios from 'axios';

const API_KEY = '41c4a8884e304bc5b34b6807dfc288cb';
const PATH_API_KEY = '&apiKey=';
const PATH = 'https://newsapi.org/v2/everything?sources=';

const getUrlById = (id: string): string => `${PATH}${id}${PATH_API_KEY}${API_KEY}`;

export const getNewsData = (id: string) => {
    axios.get(getUrlById(id))
        .then(response => {
            // console.log('Service', response.data);
            return response.data;
        });
};