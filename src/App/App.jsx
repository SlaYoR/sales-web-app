import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { theme } from "./theme.js";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
