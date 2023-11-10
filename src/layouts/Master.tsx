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
import { Outlet } from "react-router-dom";
import Sidebar from "./fragments/sidebar/Sidebar";
import Topbar from "./fragments/footer/Footer";
import Footer from "./fragments/topbar/Topbar";

const Master: React.FC = () => {
    return (
        <React.Fragment>
            <Sidebar />
            <Topbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default Master;
