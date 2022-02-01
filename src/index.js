import ReactDOM from "react-dom";
import { CircleContextProvider } from "./store/circle-context";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CircleContextProvider>
    <App />
  </CircleContextProvider>,
  rootElement
);
