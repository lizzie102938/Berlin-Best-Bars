import { useState } from 'react';

export default function RandomSelect() {
  const [bar, setBar] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBar = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/random-bar');
      const data = await res.json();
      setBar(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="random-bar-container">
      <button onClick={fetchBar} className="random-bar-button">
        {loading ? 'Finding bar...' : 'Find a random bar in Berlin'}
      </button>

      {bar && (
        <div className="bar-info">
          <h2 className="bar-name">{bar.name}</h2>
          <p className="bar-address">{bar.address}</p>
          {bar.url && (
            <p className="bar-url">
              <a href={bar.url} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </p>
          )}
          {bar.image && (
            <img src={bar.image} alt={bar.name} className="bar-image" />
          )}
        </div>
      )}
    </div>
  );
}
