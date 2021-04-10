import React from "react";
import ReactDOM from "react-dom";
import PIXI from "pixi.js"

const App = () => (
  <h1>My React and TypeScript App!</h1>
);

function Welcome(props): JSX.Element {
  return <h1>Hello, {props.name}</h1>
}

const TestElement = <Welcome name="Shannon" />;

ReactDOM.render(
  TestElement,
  document.getElementById("root")
);
