import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { Yelp } from "../../util/Yelp";

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
