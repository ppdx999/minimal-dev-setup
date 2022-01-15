import React from "react";
import { render } from "react-dom";
import { Pagination } from "./components/Pagination";

const App = () => (
  <>
    <Pagination max={10} />
  </>
);

render(<App />, document.getElementById("root"));
