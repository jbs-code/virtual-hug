import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ScreenHug from "../components/screens/ScreenHug";
import ScreenCard from "../components/screens/ScreenPreview";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/card/:from/:name/:text",
      element: <ScreenCard/>,
    },
    {
      path: "/hug/card/:from/:name/:text",
      element: <ScreenHug/>,
    },
  ]);