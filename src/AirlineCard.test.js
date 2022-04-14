import { render, screen, fireEvent } from "@testing-library/react";
import AirlineCard from "./Components/AirlineCard";

test('render airline card', () => {
  render(<AirlineCard
    name="American Airlines"
    site="AA.com"
    alliance="Oneworld"
    phone="+1 800 433 7300"
    logoURL="https://www.kayak.com/rimg/provider-logos/airlines/v/AA.png?crop=false&width=108&height=92&fallback=default2.png&_v=8c6d0e40bdbaad9c51e737b05c12347f"
    />);
});


test('render more information on hover', async () => {
  render(<AirlineCard
    name="American Airlines"
    site="AA.com"
    alliance="Oneworld"
    phone="+1 800 433 7300"
    logoURL="https://www.kayak.com/rimg/provider-logos/airlines/v/AA.png?crop=false&width=108&height=92&fallback=default2.png&_v=8c6d0e40bdbaad9c51e737b05c12347f"
    />);

    fireEvent.mouseEnter(screen.getByText('American Airlines'));

    expect(screen.getByText('Oneworld')).toBeInTheDocument()
    expect(screen.getByText('+1 800 433 7300')).toBeInTheDocument()
    expect(screen.getByText('AA.com')).toBeInTheDocument()
});
