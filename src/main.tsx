/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppWrapper from "./root/AppWrapper.tsx";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
    <React.StrictMode>
        <AppWrapper>
            <App />
        </AppWrapper>
    </React.StrictMode>
);
