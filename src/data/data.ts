import {
  clashbar,
  kinkbar,
  monkeybar,
  pawndotcombar,
  redwoodbar,
  trinkteufelbar,
  velvetbar,
  victoriabar,
  bellboybar,
  buckandbreckbar,
  greendoorbar,
  fitchersvogelbar,
} from '../Images';

export const data = {
  bars: [
    {
      site: 'www.buckandbreck.com',
      price: '€€€',
      phone: '+49 30 40 555 994',
      name: 'Buck and Breck',
      logo: buckandbreckbar,
    },
    {
      site: 'clash-berlin.de',
      price: '€',
      phone: '+49 30 325 263 87',
      name: 'Clash',
      logo: clashbar,
    },
    {
      site: 'www.fitchersvogel.com',
      price: '€€',
      name: "Fitcher's Vogel",
      logo: fitchersvogelbar,
    },
    {
      site: 'www.monkeybarberlin.de',
      price: '€€',
      phone: '+49 30 120221210',
      name: 'Monkey Bar',
      logo: monkeybar,
    },
    {
      site: 'www.victoriabar.de',
      price: '€€',
      phone: '+49 30 257 59977',
      name: 'Victoria Bar',
      logo: victoriabar,
    },
    {
      site: 'www.velvet-bar-berlin.de',
      price: '€€€',
      phone: '+49 163 4605031',
      name: 'Velvet',
      logo: velvetbar,
    },
    {
      site: 'bellboybar.com',
      price: '€€€',
      phone: '+49 030 20077070',
      name: 'Bellboy Bar',
      logo: bellboybar,
    },
    {
      site: 'www.trinkteufel.de',
      price: '€',
      phone: '+49 30 6147128',
      name: 'Trinkteufel',
      logo: trinkteufelbar,
    },
    {
      site: 'www.greendoor.de/de',
      price: '€€',
      phone: '+30 2152515',
      name: 'Green Door',
      logo: greendoorbar,
    },
    {
      site: 'kink-berlin.de',
      price: '€€€',
      phone: '+49 30 41 20 73 44',
      name: 'Kink',
      logo: kinkbar,
    },
    {
      site: 'https://redwoodbar.de/',
      price: '€€',
      phone: '+49 30 29036158 ',
      name: 'Redwood Bar',
      logo: redwoodbar,
    },
    {
      site: 'pawndotcombar.berlin',
      price: '€€',
      phone: '+49 30 62924947',
      name: 'Pawn Dot Com',
      logo: pawndotcombar,
    },
  ],
};

export const numberOfOne = data.bars.filter((bar) => bar.price === '€');
export const numberOfTwo = data.bars.filter((bar) => bar.price === '€€');
export const numberOfThree = data.bars.filter((bar) => bar.price === '€€€');
