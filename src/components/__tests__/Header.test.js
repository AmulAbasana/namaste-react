import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/store/appStore";
import Header from "../Header";

describe("Header component test cases", () => {
  it("Should render Login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "Login" });

    expect(loginBtn).toBeInTheDocument();
  });

  it("Should render change text to Logout on click of button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    let loginBtn = screen.getByRole("button", { name: "Login" });

    expect(loginBtn).toBeInTheDocument();

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout" });

    expect(logoutBtn).toBeInTheDocument();

    fireEvent.click(logoutBtn);

    loginBtn = screen.getByRole("button", { name: "Login" });

    expect(loginBtn).toBeInTheDocument();
  });

  it("Should render cart item text", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartText = screen.getByText(/Cart/);

    expect(cartText).toBeInTheDocument();
  });
});
