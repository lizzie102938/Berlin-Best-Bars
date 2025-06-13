import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/BarCard.scss';
import './CardCollection';

class BarCard extends Component {
  render() {
    return (
      <div className="bar-card">
        <div className="bar-card-logo-name-extra">
          <img className="bar-card-logo" src={this.props.logo} alt="bar-logo" />
          <div data-testid="bar-card-ID" className="bar-card-name-extra">
            <h3 className="bar-card-name">{this.props.name}</h3>
            <div className="bar-card-extra">
              <div>
                <p className="bar-card-extra bar-card-price">
                  {this.props.price}
                </p>
              </div>
              <p className="bar-card-extra bar-card-phone">
                {this.props.phone}
              </p>
              <p className="bar-card-extra bar-card-site">{this.props.site}</p>
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
