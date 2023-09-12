import { createBrowserRouter } from "react-router-dom";
import { CountersPage } from "../counters/CountersPage";
import { MainTemplate } from "../ds/templates";
import { HomePage } from "../home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
    ],
  },
]);
