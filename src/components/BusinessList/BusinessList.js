import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business.js";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {/* {console.log(this.props.businesses)} */}
        {this.props.businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
