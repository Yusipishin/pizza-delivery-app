import React from "react";
import ReactDOM from 'react-dom/client'

import App from "./components/app/App";

ReactDOM.createRoot(document.getElementById('wrapper') as HTMLElement)
        .render(
          <React.StrictMode>
            <App/>
          </React.StrictMode>
        )