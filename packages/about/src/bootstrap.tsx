import React from "react";
import { createRoot } from "react-dom/client";
import {
  createMemoryHistory,
  createBrowserHistory,
  Listener,
  Update,
} from "history";

interface MountProps {
  onNavigate?: Listener;
  initialPath?: string;
}

const mount = (
  container: HTMLElement,
  { onNavigate, initialPath }: MountProps
) => {
  const history = initialPath
    ? createMemoryHistory({ initialEntries: [initialPath] })
    : createBrowserHistory();

  let unlisten: () => void | undefined;
  if (onNavigate) {
    unlisten = history.listen(onNavigate);
  }

  const root = createRoot(container);
  root.render(<h1>Hello World from about app!</h1>);

  return {
    onParentNavigate: (update: Update) => {
      const { pathname } = history.location;
      const { pathname: nextPathname } = update.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
    unmount: () => {
      unlisten?.();
      root.unmount();
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_about-dev-root");
  if (devRoot) {
    mount(devRoot, {});
  }
}

export { mount };
