import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Tracking } from "./components/content/track/Tracking";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="tracking" element={<Tracking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
