import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./store/store";

import App from "./components/App/App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("wrapper") as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
