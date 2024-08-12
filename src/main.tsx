import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./app.css";

// Looks way better this way, than the default :D
const root = document.getElementById("root");

if (root) {
  const create = createRoot(root);

  create.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
