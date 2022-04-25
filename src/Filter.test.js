import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Components/Filter";



// test('Medium filter shows correct number of venues when only filter selected', () => {
//   render(<Filter />);

//   const checkbox = screen.getByLabelText('€€');
//   fireEvent.change(checkbox, { target: { for: 'mediumselect' } })

//   const findCards = () => screen.findByID('BarCard-ID');
//   expect(findCards).toHaveLength(5);
// });
