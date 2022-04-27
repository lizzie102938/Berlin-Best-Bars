import React, {Component} from 'react';
import '../Styles/BarCard.scss';
import './CardCollection';
import {Link} from 'react-scroll';

class BarCard extends Component {
  render() {

    return (
      <div className='BarCard'>
        <div className='BarCard-logo-name-extra'>
          <img className='BarCard-logo' src={this.props.logoURL} alt='bar logo'/>
          <div data-testid='BarCard-ID' className='BarCard-name-extra'>
            <h3 className='BarCard-name'>{this.props.name}</h3>
            <div className='BarCard-extra'>
              <div>
                <p className='BarCard-extra BarCard-price'>{this.props.price}</p>
              </div>
                <p className='BarCard-extra BarCard-phone'>{this.props.phone}</p>
                <p className='BarCard-extra BarCard-site'>{this.props.site}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BarCard;
