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
    //query strings for sort_by endpoint of the Yelp API:
    this.optionsForSortBy = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviews": "review_count",
    };
  }

  getSortClass(sortOption) {
    if (this.state.sortBy === sortOption) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortChange(sortOption) {
    this.setState({ sortBy: sortOption });
  }

  handleTermChange(event) {
    this.setState = {
      term: event.target.value,
    };
  }

  handleLocationChange(event) {
    this.setState = {
      location: event.target.value,
    };
  }

  renderSortOptions() {
    return Object.keys(this.optionsForSortBy).map((option) => {
      let optionValue = this.optionsForSortBy[option];
      return (
        <li className={this.getSortClass(this.sortOptionValue)} key={optionValue} onClick={this.handleSortChange.bind(this, this.sortOptionValue)}>
          {option}
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
          <input placeholder="Search Restaurants" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Search</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
