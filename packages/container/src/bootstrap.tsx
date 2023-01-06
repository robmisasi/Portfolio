import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import App from "./App";
import i18n from "./strings/i18n";

const bootstrap = (container: HTMLElement) => {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StrictMode>
  );
};

const appRoot = document.getElementById("root");
if (appRoot) {
  bootstrap(appRoot);
}
