/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
