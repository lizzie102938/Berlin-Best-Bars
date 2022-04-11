import React, {Component} from 'react';
import './AirlineCard.css';
// import './CardCollection';
// const AIRLINE_API = "kayak.com/rimg/provider-logos/airlines/v/";

class AirlineCard extends Component {
  render() {
      return (
      <div className="AirlineCard">
        <div className="AirlineCard-info">
          <img className="AirlineCard-logo" src={this.props.logoURL} alt={this.props.name}/>
          <h3 className="AirlineCard-name">{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default AirlineCard;
