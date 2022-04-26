import { Component } from 'react';
import '../styles/RecCards.scss';

class RecCards extends Component {
  render() {
    return(
      <div className='RecCards'>
        <div className='RecCards-text'>
          <h4>Top picks this week..</h4>
        </div>
        <div className='RecCards-photocards'>
          <h2 className='RecCards-1 RecCards-name'><span>Das Hotel</span></h2>
          <h2 className='RecCards-2 RecCards-name'><span>Klunkerkranich</span></h2>
          <h2 className='RecCards-3 RecCards-name'><span>ORA</span></h2>
          <h2 className='RecCards-4 RecCards-name'><span>Kantine am Berghain</span></h2>
        </div>
      </div>
    )
  }
}

export default RecCards;
