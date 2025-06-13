import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = 5000;

// Enable CORS for your frontend origin (or use '*' to allow all)
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

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

    const cleanBarId = randomBar.fsq_id.replace(/[^a-zA-Z0-9]/g, '');

    console.log('Using place ID:', cleanBarId);

    // Fetch photos for the selected bar
    const photosRes = await fetch(
      `https://api.foursquare.com/v3/places/${cleanBarId}/photos`,
      {
        headers: {
          Authorization: process.env.FOURSQUARE_API_KEY,
          Accept: 'application/json',
        },
      }
    );

    const photos = await photosRes.json();

    let imageUrl = null;
    if (Array.isArray(photos) && photos.length > 0) {
      const photo = photos[0];
      imageUrl = `${photo.prefix}original${photo.suffix}`;
    }

    res.json({
      name: randomBar.name,
      address: randomBar.location?.formatted_address,
      rating: randomBar.rating,
      categories: randomBar.categories?.map((cat) => cat.name).join(', '),
      image: imageUrl,
      url: randomBar.website || null,
    });
  } catch (err) {
    console.error('Error fetching from Foursquare:', err);
    res
      .status(500)
      .json({ error: 'Failed to fetch bars', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
