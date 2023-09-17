import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
// import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantDetail from "./components/RestaurantDetail";
import useOnlineStatus from "./utils/hooks/useOnlineStatus";

const About = React.lazy(() => import("./components/About"));
const Body = React.lazy(() => import("./components/Body"));

const AppLayout = () => {
  const isOnline = useOnlineStatus();

  return (
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
