import BarCard from './BarCard';
import '../Styles/CardCollection.scss';

export default function CardCollection(props) {
  console.log(props);
    let data = {
      bars: [
      { site: "www.buckandbreck.com",
        price: "€€€",
        phone: "+49 30 40 555 994",
        name: "Buck and Breck",
        logoURL: "https://www.isteinereisewert.de/wp-content/uploads/2013/07/Buck-and-Breck.Speakeasy-Bar-berlin.JPG-e1373378348348.jpg"
      },
      { site: "clash-berlin.de",
      price: "€",
      phone: "+49 30 325 263 87",
      name: "Clash",
      logoURL: "https://scontent-ber1-1.xx.fbcdn.net/v/t31.18172-8/16402548_1590820664265438_3820100402934509258_o.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=G0FkSpdUVC8AX_452f0&_nc_ht=scontent-ber1-1.xx&oh=00_AT9rsOraq5GhhwK9oOyMnkM8XtNQN9qo9IuhAXLJ7BmgFA&oe=628C7D22"
      },
      { site: "www.fitchersvogel.com",
        price: "€€",
        name: "Fitcher's Vogel",
        logoURL: "https://static.wixstatic.com/media/9a9b8e_35988ffff46344e888bd0ea352048443.jpg/v1/fill/w_560,h_518,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9a9b8e_35988ffff46344e888bd0ea352048443.jpg"
      },
      { site: "www.monkeybarberlin.de",
      price: "€€",
      phone: "+49 30 120221210",
      name: "Monkey Bar",
      logoURL: "https://www.monkeybarberlin.de/global/img/logo.png"
      },
      { site: "www.victoriabar.de",
      price: "€€",
      phone: "+49 30 257 59977",
      name: "Victoria Bar",
      logoURL: "https://www.victoriabar.de/typo3conf/ext/bootstrap_package_mint/Resources/Public/Images/victoriabar-logo.svg"
      },
      { site: "www.velvet-bar-berlin.de",
      price: "€€€",
      phone: "+49 163 4605031",
      name: "Velvet",
      logoURL: "https://scontent-ber1-1.xx.fbcdn.net/v/t1.18169-9/10710757_564947016971394_3906587653862368609_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=iqQy17GhA3oAX-3-jTR&_nc_ht=scontent-ber1-1.xx&oh=00_AT8NELU9WyESlv8XeMomN0JRbIYvZZJ79v3-bYz4HSxPDg&oe=628C4897"
      },
      { site: "bellboybar.com",
      price: "€€€",
      phone: "+49 030 20077070",
      name: "Bellboy Bar",
      logoURL: "https://www.ebsmatchstaff.com/media/venue_logos/bellboy_black_logo.PNG"
      },
      { site: "www.trinkteufel.de",
      price: "€",
      phone: "+49 30 6147128",
      name: "Trinkteufel",
      logoURL: "https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/121232397_3421777181224117_622727784941628252_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uhBjSF3jxG0AX_bsOtR&_nc_ht=scontent-ber1-1.xx&oh=00_AT-aZ9ca_LRlLRPQi_kISbcQA7FfAQKumonQlz3gUmd43g&oe=628B5156"
      },
      { site: "www.greendoor.de/de",
      price: "€€",
      phone: "+30 2152515",
      name: "Green Door",
      logoURL: "https://images.xceed.me/bars/logos/green-door-bar-bar-berlin-xceed-logo7f9d.png?w=84&h=84&fm=auto"
      },
      { site: "kink-berlin.de",
      price: "€€€",
      phone: "+49 30 41 20 73 44",
      name: "Kink",
      logoURL: "https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/75576611_2742255699174106_6914526291450396672_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eRtvT4FglXIAX_nvwsI&_nc_ht=scontent-ber1-1.xx&oh=00_AT-gFimCH9DJtC5hNu1a1cYqyA2cIbNkravC81TcviLLpw&oe=628C5099"
      },
      { site: "https://redwoodbar.de/",
      price: "€€",
      phone: "+49 30 29036158 ",
      name: "Redwood Bar",
      logoURL: "https://redwoodbar.de/redwood-bar.jpg"
      },
      {
        site: "pawndotcombar.berlin",
        price: "€€",
        phone: "+49 30 62924947",
        name: "Pawn Dot Com",
        logoURL: "https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/70579459_119917399393727_2220933129269411840_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-iCsMdCD-XYAX8PFHJz&tn=aKXgBU6YVM4AuJnF&_nc_ht=scontent-ber1-1.xx&oh=00_AT8IWpteIhvCH43oFhJn6LvuFyJ-ug9YVMdvIpjpmfcOeg&oe=628B492B"
      }
    ]
  };

  return (
    <div className='CardCollection'>
      <div className='CardCollection-cards'>

        {props.conditionProps.cheap && props.conditionProps.medium && props.conditionProps.exp
          ? data.bars.map((a) => (
              <BarCard
                name={a.name}
                logoURL={a.logoURL}
                site={a.site}
                exp={a.exp}
                phone={a.phone}
              />
            ))  : ''}

        {!props.conditionProps.cheap && !props.conditionProps.medium && !props.conditionProps.exp
          ? data.bars.map((a) => (
              <BarCard
                name={a.name}
                logoURL={a.logoURL}
                site={a.site}
                price={a.price}
                phone={a.phone}
              />
            ))  : ''}

        {props.conditionProps.cheap && !props.conditionProps.medium && !props.conditionProps.exp
          ? data.bars.map((a) =>
              a.price === '€' ? (
                <BarCard
                  name={a.name}
                  logoURL={a.logoURL}
                  site={a.site}
                  price={a.price}
                  phone={a.phone}
                />
              ) : ('')
            ) : ''}

        {!props.conditionProps.cheap && props.conditionProps.medium && !props.conditionProps.exp
          ? data.bars.map((a) =>
              a.price === '€€' ? (
                <BarCard
                  name={a.name}
                  logoURL={a.logoURL}
                  site={a.site}
                  price={a.price}
                  phone={a.phone}
                />
              ) : ('')
            )  : ''}

        {!props.conditionProps.cheap && !props.conditionProps.medium && props.conditionProps.exp
          ? data.bars.map((a) =>
              a.price === '€€€' ? (
                <BarCard
                  name={a.name}
                  logoURL={a.logoURL}
                  site={a.site}
                  price={a.price}
                  phone={a.phone}
                />
              ) : ('')
            )  : ''}

        {props.conditionProps.cheap && props.conditionProps.medium && !props.conditionProps.exp
          ? data.bars.map((a) =>
              a.price === '€' || a.price ==='€€' ? (
                <BarCard
                  name={a.name}
                  logoURL={a.logoURL}
                  site={a.site}
                  price={a.price}
                  phone={a.phone}
                />
              ) : ('')
            )  : ''}

        {!props.conditionProps.cheap && props.conditionProps.medium && props.conditionProps.exp
          ? data.bars.map((a) =>
              a.price === '€' || a.price === '€€€' ? (
                <BarCard
                  name={a.name}
                  logoURL={a.logoURL}
                  site={a.site}
                  price={a.price}
                  phone={a.phone}
                />
              ) : ('')
            )  : ''}

        {props.conditionProps.cheap && !props.conditionProps.medium && props.conditionProps.exp
          ? data.bars.map((a) =>
              a.price === '€' || a.price === '€€€' ? (
                <BarCard
                  name={a.name}
                  logoURL={a.logoURL}
                  site={a.site}
                  price={a.price}
                  phone={a.phone}
                />
              ) : ('')
            )  : ''}
      </div>
    </div>
  );
}
