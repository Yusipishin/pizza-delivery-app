import React from "react";
import ReactDOM from 'react-dom/client'

import App from "./components/App";

ReactDOM.createRoot(document.getElementById('wrapper') as HTMLElement)
        .render(
          <React.StrictMode>
            <App/>
          </React.StrictMode>
        )