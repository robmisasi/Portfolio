import { lazy } from "react";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import MainNav from "./MainNav";

import "./index.css";

const history = createBrowserHistory();

const AboutLazy = lazy(() => import("./subApps/AboutApp"));

const App = () => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <HistoryRouter history={history}>
        <MainNav />
        <Routes>
          <Route path="/" element={<AboutLazy />} />
        </Routes>
      </HistoryRouter>
    </>
  );
};

export default App;
