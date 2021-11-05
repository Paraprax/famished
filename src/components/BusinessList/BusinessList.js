import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business.js";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => {
          return <Business key={business.id} business={business} googleURL={`https://www.google.com/maps/search/?api=1&query=${business.name}+${business.city}`} addressURL={`https://www.google.com/maps/search/?api=1&query=${business.address}`} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
