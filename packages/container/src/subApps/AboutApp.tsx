import { useRef, useEffect } from "react";
import { mount } from "about/AboutApp";
import { BrowserHistory, Update } from "history";

import emptyFunction from "../utils/emptyFunction";

const AboutApp = ({ history }: { history: BrowserHistory }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) {
      return emptyFunction;
    }

    const div = ref.current as HTMLDivElement;
    if (div.shadowRoot) {
      return emptyFunction;
    }

    const shadowRoot = div.attachShadow({ mode: "open" });

    const { onParentNavigate, unmount } = mount(shadowRoot, {
      onNavigate: (update: Update) => {
        if (history.location.pathname !== update.location.pathname) {
          history.push({ pathname: update.location.pathname });
        }
      },
      initialPath: history.location.pathname,
    });

    const unlisten = history.listen(onParentNavigate);
    return () => {
      unmount();
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ref} />;
};

export default AboutApp;
