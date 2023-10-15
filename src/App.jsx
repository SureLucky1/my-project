import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useState, createContext } from 'react';
import FooterV2 from "./components/footer/FooterV2";
import Home from "./pages/home/31082023TestHome";
import Navigationbar from "./components/navbar/test2";
import Rr from "./components/navbar/kk";
import { Provider } from "./index";

function App() {
  const Layout = () => {
    const [langValue, setlangValue] = useState("English");
    const [Dollar, setDollar] = useState("NT$ TWD");
    return (
      <div className="app">
        <Provider value={{ langValue, setlangValue, Dollar, setDollar }}>
<Navigationbar />
        <Outlet/>
        <FooterV2 />
        </Provider>
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
        {
          path: "/rr",
          element: <Rr />,
        },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
