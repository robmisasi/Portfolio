import React from "react";
import { createRoot } from "react-dom/client";

const bootstrap = (container: HTMLElement) => {
  const root = createRoot(container);
  root.render(<h1>Hello World!</h1>);
};

const appRoot = document.getElementById("root");
if (appRoot) {
  bootstrap(appRoot);
}
