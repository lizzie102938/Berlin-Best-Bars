import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './components/Filter';
import {
  numberOfOne,
  numberOfTwo,
  numberOfThree,
} from './components/CardCollection';

// test('Cheap filter shows correct number of venues when only filter selected', () => {
//   render(<Filter />);

//   const checkbox = screen.getByLabelText('€');
//   fireEvent.change(checkbox, { target: { for: '€' } });

//   const findCards = () => screen.findByID('BarCard-ID');
//   expect(findCards).toHaveLength(numberOfOne);
// });

// test('Medium filter shows correct number of venues when only filter selected', () => {
//   render(<Filter />);

//   const checkbox = screen.getByLabelText('€€');
//   fireEvent.change(checkbox, { target: { for: '€€' } });

//   const findCards = () => screen.findByID('BarCard-ID');
//   expect(findCards).toHaveLength(numberOfTwo);
// });

// test('Expensive filter shows correct number of venues when only filter selected', () => {
//   render(<Filter />);

//   const checkbox = screen.getByLabelText('€€€');
//   fireEvent.change(checkbox, { target: { for: '€€€' } });

//   const findCards = () => screen.findByID('BarCard-ID');
//   expect(findCards).toHaveLength(numberOfThree);
// });
