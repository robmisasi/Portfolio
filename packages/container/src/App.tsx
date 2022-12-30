import { lazy } from "react";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const AboutLazy = lazy(() => import("./subApps/AboutApp"));

const App = () => {
  return (
    <>
      <h1>Hello World from container app</h1>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<AboutLazy />} />
        </Routes>
      </HistoryRouter>
    </>
  );
};

export default App;
