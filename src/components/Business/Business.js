import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a href={this.props.business.url} target="blank">
            <img src={this.props.business.imageSrc} alt={this.props.business.name} />
          </a>
        </div>
        <a href={this.props.googleURL} target="blank">
          <h2 className="Business-name">{this.props.business.name}</h2>
        </a>
        <div className="Business-information">
          <div className="Business-address">
            <a href={this.props.addressURL} target="blank">
              <p>{this.props.business.address}</p>
            </a>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state + this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">Avg rating: {this.props.business.rating}</h3>
            <p>from {this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
