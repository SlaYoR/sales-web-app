import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Le strict mode appelle 2 fois les useEffects pour vérifier que les fonctions sont pures!
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
