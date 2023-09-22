import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
// import Body from "./components/Body";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantDetail from "./components/RestaurantDetail";
import UserContext from "./utils/context/UserContext";
import useOnlineStatus from "./utils/hooks/useOnlineStatus";
import appStore from "./utils/store/appStore";

const About = React.lazy(() => import("./components/About"));
const Body = React.lazy(() => import("./components/Body"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Default user");
  const isOnline = useOnlineStatus();

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <div className="appLayout">
          <Header isOnline={isOnline} />
          {isOnline ? (
            <Outlet />
          ) : (
            <div>
              Oops!! Looks like you are offline! Please check your internet
              Connection
            </div>
          )}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<h1>Loading !!!</h1>}>
            <Body />
          </React.Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <React.Suspense fallback={<h1>Loading !!!</h1>}>
            <About />
          </React.Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetail />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
