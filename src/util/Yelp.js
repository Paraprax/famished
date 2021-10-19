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
    return fetch(yelpUrl, headersObject)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          console.log(jsonResponse);
          console.log("Yelp module triggered");
          const restaurants = jsonResponse.businesses.map((restaurant) => {
            return {
              id: restaurant.id,
              imageSrc: restaurant.image_url,
              name: restaurant.name,
              address: restaurant.location.address1,
              city: restaurant.location.city,
              state: restaurant.location.state,
              zipCode: restaurant.location.zip_code,
              category: restaurant.categories[0].title,
              rating: restaurant.rating,
              reviewCount: restaurant.review_count,
            }; //return object
          }); //restaurants callback
          return restaurants;
        } //if-statement
      }); //then callback
  }, //search object
}; //yelp object
