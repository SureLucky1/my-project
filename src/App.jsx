import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import FooterV2 from "./components/footer/FooterV2";
import Home from "./pages/home/31082023TestHome";
import Navigationbar from "./components/navbar/test2";


function App() {
  const Layout = () => {
    
    return (
      <div className="app">

<Navigationbar />
        <Outlet/>
        <FooterV2 />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
