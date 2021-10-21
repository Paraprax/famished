import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { Yelp } from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    console.log(`Hitting Yelp API with - ${term}, ${location}, ${sortBy}`);
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div id="header-bar">
          <span id="famished">Famished</span><span id='tagline'>find the feast you're looking for</span>
        </div>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
