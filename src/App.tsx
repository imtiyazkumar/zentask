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
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";

const App: React.FC = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
