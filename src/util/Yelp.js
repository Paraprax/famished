import { yelpKey } from "./yelpkey"; //this file is git-ignored!
const yelpApiKey = yelpKey; //replace this value with your Yelp API key from https://www.yelp.ca/developers/documentation/v3/get_started

export const Yelp = {
  search(term, location, sortBy) {
    const CORSanywhere = "https://cors-anywhere.herokuapp.com/"; //request temporary access to CORS anywhere demo @ https://cors-anywhere.herokuapp.com/corsdemo
    const yelpUrl = `${CORSanywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    const headerObject = {
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
    };
    return fetch(yelpUrl, headerObject)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          console.log(jsonResponse);
          console.log("Yelp module triggered");
          return jsonResponse.businesses.map((business) => ({
            //values as per keys in Yelp's business endpoint documentation @: yelp.com/developers/documentation/v3/business
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }));
        }
      });
  },
};
