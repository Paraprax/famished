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
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
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
          <input onChange={this.handleTermChange} placeholder="Enter food genres (eg. gourmet, take-out, Japanese, pizza..)" />
          <input onChange={this.handleLocationChange} placeholder="Which city?" />
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearchButton}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
