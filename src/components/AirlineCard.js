import React, {Component} from 'react';
import '../Styles/AirlineCard.scss';
import './CardCollection';

class AirlineCard extends Component {
  render() {

    return (
      <div className="AirlineCard">
        <div className='AirlineCard-logo-name-extra'>
          <img className="AirlineCard-logo" src={this.props.logoURL} alt={this.props.name}/>
          <div className='AirlineCard-name-extra'>
            <h3 className='AirlineCard-name'>{this.props.name}</h3>
            <div className="AirlineCard-extra">
              <div>
                <p className="AirlineCard-extra AirlineCard-alliance">{this.props.alliance}</p>
              </div>
                <p className="AirlineCard-extra AirlineCard-phone">{this.props.phone}</p>
                <p className="AirlineCard-extra AirlineCard-site">{this.props.site}</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default AirlineCard;
