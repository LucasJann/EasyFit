import React, { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/index";

import UnderWeight from "./components/Goal/UnderWeight";
import IdealWeight from "./components/Goal/IdealWeight";
import OverWeight from "./components/Goal/OverWeight";
import Feed from "./components/Goal/Feed";
import Obese from "./components/Goal/Obese";
import Goal from "./components/Goal/Goal";
import About from "./components/Layout/About";
import Login from "./components/Layout/Login";
import Profile from "./components/Layout/Profile";
import Register from "./components/Layout/Register";
import LandingPage from "./components/Layout/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <Login /> },
      { path: "/registerPage", element: <Register /> },
      { path: "/landingPage", element: <LandingPage /> },
      { path: "/profilePage", element: <Profile /> },
      { path: "/aboutPage", element: <About /> },
      { path: "/goalPage", element: <Goal /> },
      { path: "/underWeight", element: <UnderWeight /> },
      { path: "/idealWeight", element: <IdealWeight /> },
      { path: "/overWeight", element: <OverWeight /> },
      { path: "/obese", element: <Obese /> },
      { path: "/feed", element: <Feed /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
