import React from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./store/store";

import App from "./components/App";

ReactDOM.createRoot(document.getElementById('wrapper') as HTMLElement)
        .render(
          <React.StrictMode>
            <Provider store={store}>
              <App/>
            </Provider>
          </React.StrictMode>
        )