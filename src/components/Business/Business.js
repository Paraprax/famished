import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt="Spider-Man holding a pizza" />
        </div>
        <h2>{this.props.Business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.Business.address}</p>
            <p>{this.props.Business.city}</p>
            <p>{this.props.Business.state + this.props.Business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.Business.category}</h3>
            <h3 className="rating">{this.props.Business.rating}</h3>
            <p>{this.props.Business.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
