import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Components/Filter";

test('Sky Team filter shows only one airline when only filter selected', () => {
  render(<Filter />);

  const checkbox = screen.getByLabelText('Sky Team');
  fireEvent.change(checkbox, { target: { for: 'skyteamselect' } })

  const findCards = () => screen.findByID('AirlineCard-ID');
  expect(findCards).toHaveLength(1);
});
