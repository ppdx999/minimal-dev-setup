import React from "react";
import { render } from "react-dom";
import { Button } from "./button";

const App = () => (
  <div>
    <h1>Hello World! React with TypeScript!!!</h1>
    <Button></Button>
  </div>
);

render(<App />, document.getElementById("root"));
