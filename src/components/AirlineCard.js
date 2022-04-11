import React, {Component} from 'react';
import './AirlineCard.css';
import './CardCollection';

class AirlineCard extends Component {
  render() {
      return (
      <div className="AirlineCard">
        <div className="AirlineCard-info">
          <img className="AirlineCard-logo" src={this.props.logoURL} alt={this.props.name}/>
          <h3 className="AirlineCard-name">{this.props.name}</h3>
        </div>
        <p className="AirlineCard-extra AirlineCard-alliance">{this.props.alliance}</p>
        <p className="AirlineCard-extra AirlineCard-phone">{this.props.phone}</p>
        <p className="AirlineCard-extra AirlineCard-site">{this.props.site}</p>
      </div>
    );
  }
}


export default AirlineCard;
