import { yelpKey } from "./yelpkey";
const yelpApiKey = yelpKey;

export const Yelp = {
  search(term, location, sortBy) {
    const CORSanywhere = "https://cors-anywhere.herokuapp.com/";
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
