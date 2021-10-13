import React from "react";
import "./Business.css";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.bizName.imageSrc} alt="Spider-Man holding a pizza" />
        </div>
        <h2>{this.props.bizName.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.bizName.address}</p>
            <p>{this.props.bizName.city}</p>
            <p>{this.props.bizName.state + this.props.bizName.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.bizName.category}</h3>
            <h3 className="rating">{this.props.bizName.rating}</h3>
            <p>{this.props.bizName.reviewCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
