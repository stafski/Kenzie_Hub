import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TechProvider } from "./providers/TechProvider/TechProvider";
import { UserProvider } from "./providers/UserProvider/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TechProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </TechProvider>
    </BrowserRouter>
  </React.StrictMode>
);
