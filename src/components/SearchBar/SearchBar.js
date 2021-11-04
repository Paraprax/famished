import React from "react";
import "./SearchBar.css";

//search bar component:
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match",
    };
    //'this' bindings:
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    //query strings for sort_by endpoint of the Yelp API:
    this.optionsForSortBy = {
      "By Relevance": "best_match",
      "By Rating": "rating",
      "By Reviews": "review_count",
    };
  }

  getSortClass(sortOption) {
    if (this.state.sortBy === sortOption) {
      return "active";
    }
    return "";
  }

  handleSortChange(sortOption) {
    this.setState({ sortBy: sortOption });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearchButton(event) {
    event.preventDefault();
    if (this.state.term && this.state.location && this.state.sortBy) {
      console.log("Search running");
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    } else {
      console.log("Search terms required");
    }
  }

  handleEnter(event) {
    if (event && event.key === "Enter") {
      event.preventDefault();
      console.log("Enter pressed");
      this.handleSearchButton(event);
    }
  }

  renderSortOptions() {
    return Object.keys(this.optionsForSortBy).map((sortOption) => {
      let optionValue = this.optionsForSortBy[sortOption];
      return (
        <li className={this.getSortClass(optionValue)} key={optionValue} onClick={this.handleSortChange.bind(this, optionValue)}>
          {sortOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Enter food genres (eg. pizza, take-out, Japanese, gourmet..)" />
          <input onChange={this.handleLocationChange} onKeyPress={this.handleEnter} placeholder="Which city?" />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearchButton}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
