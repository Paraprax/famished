import { yelpKey } from "./yelpkey";
const yelpApiKey = yelpKey;

const Yelp = {
  search(term, location, sortBy) {
    const CORSanywhere = "https://cors-anywhere.herokuapp.com/";
    const yelpUrl = `${CORSanywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    const headersObject = {
      headers: {
        Authorization: `Bearer: ${yelpKey}`,
      },
    };
    return fetch(yelpUrl, headersObject).then((response) => {
      return response.json();
    });
  },
};
