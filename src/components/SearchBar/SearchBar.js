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
}
