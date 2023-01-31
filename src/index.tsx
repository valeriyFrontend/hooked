import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import "../src/assets/styles/main.scss";
import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
