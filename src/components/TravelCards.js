import { Component } from "react";
import './TravelCards.css';

class TravelCards extends Component {
  render() {
    return(
      <div className="TravelCards">
        <div className="TravelCards-text">
          <h4>Our top destinations to fly with these airlines:</h4>
        </div>
        <div className="TravelCards-photocards">
          <h2 className="TravelCards-colombia TravelCards-name"><span>Colombia</span></h2>
          <h2 className="TravelCards-dubai TravelCards-name"><span>Dubai</span></h2>
          <h2 className="TravelCards-newyork TravelCards-name"><span>New York</span></h2>
          <h2 className="TravelCards-berlin TravelCards-name"><span>Berlin</span></h2>
        </div>
      </div>
    )
  }
}

export default TravelCards;
