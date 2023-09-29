import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../../components/RestaurantCard";
import MOCK_DATA from "../../mocks/RestaurantCard.json";
import withPromoted from "../hoc/withPromoted";

describe("withPromoted Test cases", () => {
  it("it should render Restaurant card component with promoted label", () => {
    const Component = withPromoted(RestaurantCard);
    render(<Component resData={MOCK_DATA} />);

    const promotedText = screen.getByText("Promoted");
    const name = screen.getByText(MOCK_DATA.info.name);

    expect(promotedText).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
