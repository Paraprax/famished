import React from "react";
import "./SearchBar.css";

//query strings for sort_by endpoint of the Yelp API:
const optionsForSortBy = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviews": "review_count",
};

//search bar component:
class SearchBar extends React.Component {
  renderSortOptions() {
    Object.keys(optionsForSortBy).map((option) => {
      let optionValue = optionsForSortBy[option];
      return <li key={optionValue}>{option}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortOptions}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Restaurants" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <div>What's good?</div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
