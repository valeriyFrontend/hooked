import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App/App";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import './assets/tailwind.css';
import "../src/assets/styles/main.scss";
import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={`/movie/:id`} element={<MovieDetail />} />
      </Routes>
    </Router>
  </StrictMode>
);
