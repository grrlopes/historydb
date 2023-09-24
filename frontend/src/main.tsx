import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Tracking } from "./components/content/track/Tracking";

const queryclient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="tracking" element={<Tracking />} />
            <Route path="history" element={<Tracking />} />
            <Route path="community" element={<Tracking />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
