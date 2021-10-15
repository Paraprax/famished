import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
  imageSrc: "https://i.ytimg.com/vi/qh9yn9vGNzg/maxresdefault.jpg",
  name: "Mr. Aziz' Pizza",
  address: "1962 Waterfront Way",
  city: "Manhattan",
  state: "NY",
  zipCode: "2004",
  category: "Take-Out",
  rating: 4.2,
  reviewCount: 202,
};

const businessesArray = [business, business, business, business, business, business];

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Hitting Yelp API with - ${term}, ${location}, ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>Famished</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businessesArray} />
      </div>
    );
  }
}

export default App;
