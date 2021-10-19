import { yelpKey } from "./yelpkey";
const yelpApiKey = yelpKey;

const Yelp = {
  search(term, location, sortBy) {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    return fetch(yelpUrl);
  },
};
