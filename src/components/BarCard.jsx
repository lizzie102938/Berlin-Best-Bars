import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/BarCard.scss';
import './CardCollection';

class BarCard extends Component {
  render() {
    return (
      <div className="BarCard">
        <div className="BarCard-logo-name-extra">
          <img className="BarCard-logo" src={this.props.logo} alt="bar-logo" />
          <div data-testid="BarCard-ID" className="BarCard-name-extra">
            <h3 className="BarCard-name">{this.props.name}</h3>
            <div className="BarCard-extra">
              <div>
                <p className="BarCard-extra BarCard-price">
                  {this.props.price}
                </p>
              </div>
              <p className="BarCard-extra BarCard-phone">{this.props.phone}</p>
              <p className="BarCard-extra BarCard-site">{this.props.site}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
BarCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  phone: PropTypes.string,
  site: PropTypes.string,
};

export default BarCard;
