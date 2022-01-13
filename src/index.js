import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ThemeValueProvider from "./context/ThemeContext";
import PlanProvider from "./context/PlanContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeValueProvider>
      <PlanProvider>
        <App />
      </PlanProvider>
    </ThemeValueProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
