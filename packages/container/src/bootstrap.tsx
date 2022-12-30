import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const bootstrap = (container: HTMLElement) => {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

const appRoot = document.getElementById("root");
if (appRoot) {
  bootstrap(appRoot);
}
