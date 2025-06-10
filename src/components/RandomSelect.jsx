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
    <div className="text-center p-4">
      <button
        onClick={fetchBar}
        className="rounded bg-pink-600 px-4 py-2 text-white hover:bg-pink-700"
      >
        {loading ? 'Finding bar...' : 'Find a Random Bar in Berlin'}
      </button>

      {bar && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{bar.name}</h2>
          <p>{bar.address}</p>
        </div>
      )}
    </div>
  );
}
