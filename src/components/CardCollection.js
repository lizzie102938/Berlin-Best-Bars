import React, { Component } from 'react';
import axios from "axios";
import AirlineCard from './AirlineCard';
import "./CardCollection.css"
// const API_URL = "https://kayak.com/h/mobileapis/directory/airlines/homework"

class CardCollection extends Component {
  // state = {
  //   cards: []
  // }
  // componentDidMount() {
  //   axios.get(`https://kayak.com/h/mobileapis/directory/airlines/homework`)
  //   .then(res => {
  //     const cards = res.data;
  //     this.setState({ cards });
  //   })
  // }

  static defaultProps = {
    airlines : [
      { site: "AA.com",
        alliance: "OW",
        phone: "+1 800 433 7300",
        name: "American Airlines",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/AA.png?crop=false&width=108&height=92&fallback=default2.png&_v=8c6d0e40bdbaad9c51e737b05c12347f"
      },
      {
        site: "delta.com",
        alliance: "ST",
        phone: "+1 888 750 3284",
        name: "Delta",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/DL.png?crop=false&width=108&height=92&fallback=default1.png&_v=02a9af26513d796d51e54147426d15b5"
      },
      {
        site: "flyUIA.com",
        alliance: "none",
        phone: "+38 (044) 581-50-50",
        name: "Ukraine International Airlines",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/PS.png?crop=false&width=108&height=92&fallback=default2.png&_v=d9d949b58188e00fcfa02d4139ecbc2e"
      },
      {
        site: "anawings.co.jp",
        alliance: "none",
        phone: "+81 3 5757 4200",
        name: "ANA",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/EH.png?crop=false&width=108&height=92&fallback=default1.png&_v=62b4b9a45bf8b49cc47ef65707139fdf"
      },
      {
        site: "emirates.com",
        alliance: "none",
        phone: "+971 600 555 555",
        name: "Emirates",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/EK.png?crop=false&width=108&height=92&fallback=default1.png&_v=c871d68692a355e7e426e7a7a41976ce"
      },
      {
        site: "lhcityline.com",
        alliance: "none",
        phone: "+1 800 645 38 80",
        name: "Lufthansa CityLine",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/CL.png?crop=false&width=108&height=92&fallback=default3.png&_v=4d488c3f2c22607da16ee8983bdcf80f"
      },
      {
        site: "singaporeair.com",
        alliance: "none",
        phone: "+65 6223 8888",
        name: "SilkAir",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/MI.png?crop=false&width=108&height=92&fallback=default1.png&_v=24431ace404156442008f4ae420f5237"
      },
      {
        site: "flyUIA.com",
        alliance: "none",
        phone: "+38 (044) 581-50-50",
        name: "Ukraine International Airlines",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/PS.png?crop=false&width=108&height=92&fallback=default2.png&_v=d9d949b58188e00fcfa02d4139ecbc2e"
      },
      // Ukraine Airlines is repeated in the mock-up so I have done so here intentionally
      {
        site: "finnair.com",
        alliance: "OW",
        phone: "+358 600 140 140",
        name: "Finnair",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/AY.png?crop=false&width=108&height=92&fallback=default2.png&_v=381727f16ff1a212dffe2239684e67ab"
      },
      {
        site: "alaskaair.com",
        alliance: "OW",
        phone: "+1 800 252 75 22",
        name: "Alaska Airlines",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/AS.png?crop=false&width=108&height=92&fallback=default2.png&_v=7e7c4110616a97db4d99676711cb7247"
      },
      {
        site: "avianca.com",
        alliance: "SA",
        phone: "+57 18000 953 434",
        name: "Avianca",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/AV.png?crop=false&width=108&height=92&fallback=default2.png&_v=4b0e0000efbc54f535fc6b466987c6b0"
      },
      {
        site: "swiss.com",
        alliance: "SA",
        phone: "+41 61 582 36 56",
        name: "SWISS",
        logoURL: "https://www.kayak.com/rimg/provider-logos/airlines/v/LX.png?crop=false&width=108&height=92&fallback=default3.png&_v=fa51cb755e76e9f221e488bb98999eeb"
      },


    ]
  };
  render() {
    return (
      <div className="CardCollection">
        <div className="CardCollection-cards">
          {this.props.airlines.map((a) => (
            <AirlineCard name={a.name} logoURL={a.logoURL} site={a.site} alliance={a.alliance} phone={a.phone}/>
          ))}
        </div>
      </div>
    )
}
}

export default CardCollection;
