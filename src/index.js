import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const FILM = {
  filmTitle: `The Grand Budapest Hotel`,
  genre: `Drama`,
  realeseYear: 2014,
};

ReactDOM.render(<App film={FILM} />, document.querySelector(`#root`));
