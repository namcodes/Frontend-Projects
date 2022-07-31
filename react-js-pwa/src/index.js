import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import App from "./App";
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
         <App />
    </BrowserRouter>
);
reportWebVitals();

serviceWorker.register();