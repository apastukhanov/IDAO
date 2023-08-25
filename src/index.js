import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";

import "./styles/global.css";
import "./styles/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.otf";
import "./styles/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Roman.otf";
import "./styles/fonts/Inter/Inter-Medium.ttf";
import "./styles/fonts/Inter/Inter-SemiBold.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
