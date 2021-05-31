import React from "react";
import ReactDOM from "react-dom";

const App: React.FC = () => (
  <h1>Iniciando App TODO!</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);