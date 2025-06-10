const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.get('/random-bar', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.foursquare.com/v3/places/search?query=bar&near=Berlin&limit=50',
      {
        headers: {
          Authorization: process.env.FOURSQUARE_API_KEY,
          Accept: 'application/json',
        },
      }
    );

    const data = await response.json();
    const bars = data.results;

    if (!bars.length) {
      return res.status(404).json({ error: 'No bars found' });
    }

    const randomBar = bars[Math.floor(Math.random() * bars.length)];

    res.json({
      name: randomBar.name,
      address: randomBar.location?.formatted_address,
      image: null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bars' });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
