import BarCard from './BarCard';
import '../Styles/CardCollection.scss';
import { data } from '../data/data.ts';

export default function CardCollection({ conditionProps }) {
  const { one, two, three } = conditionProps;

  // Create a Set of selected prices based on the toggles
  const selectedPrices = new Set();
  if (one) selectedPrices.add('€');
  if (two) selectedPrices.add('€€');
  if (three) selectedPrices.add('€€€');

  // If none selected, return nothing
  if (selectedPrices.size === 0) return null;

  const filteredBars = data.bars.filter((bar) => selectedPrices.has(bar.price));

  return (
    <div className="CardCollection">
      <div className="CardCollection-cards">
        {filteredBars.map((bar) => (
          <BarCard
            key={bar.name}
            name={bar.name}
            logo={bar.logo}
            site={bar.site}
            price={bar.price}
            exp={bar.exp}
            phone={bar.phone}
          />
        ))}
      </div>
    </div>
  );
}
