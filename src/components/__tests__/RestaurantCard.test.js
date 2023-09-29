import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/RestaurantCard.json";
import RestaurantCard from "../RestaurantCard";

describe("Restaurant Card test cases", () => {
  it("Should render the component with mock data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText(MOCK_DATA.info.name);

    expect(name).toBeInTheDocument();
  });
});
