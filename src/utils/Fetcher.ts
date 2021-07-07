import axios from 'axios';

const axios_get_fetcher = (url: string) => axios.get(url).then(res => res.data);

export {
    axios_get_fetcher
}