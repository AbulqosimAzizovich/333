import axios from "../axios";

const searchApi = {
    searchCountry: async function (name) {
        return axios.get(`/name/${name.toLowerCase()}`);
    },
    getCountry: async function () {
        return axios.get(`/all`);
    },
    getOneCountry: async function (alpha3Code) {
        return axios.get(`/name/${alpha3Code}`)
    }

}


export default searchApi;