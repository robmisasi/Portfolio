import { lazy } from "react";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import MainNav from "./MainNav";
import Home from "./pages/Home";

import "./index.css";

const history = createBrowserHistory();

const AboutLazy = lazy(() => import("./subApps/AboutApp"));

const App = () => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <HistoryRouter history={history}>
        <header>
          <MainNav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/work"
              element={<h1>Hello World from Work Page!</h1>}
            />
            <Route path="/about" element={<AboutLazy history={history} />} />
          </Routes>
        </main>
      </HistoryRouter>
    </>
  );
};

export default App;
