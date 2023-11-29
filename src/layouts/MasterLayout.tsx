/**
 * Project Ouma Health
 *
 * @author      Moin Khan
 * @copyright   Teleperinatal, Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./fragments/topbar/Topbar";
import Footer from "./fragments/footer/Footer";
import Sidebar from "./fragments/sidebar/Sidebar";
import { cn } from "../utils/helper";
import { Div } from "../components/BaseComponents";

const MasterLayout: React.FC = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);

    return (
        <React.Fragment>
            <Div className="hidden md:flex"><Sidebar /></Div>
            <Div className={cn("md:hidden", { "hidden": !isSidebarExpanded })}>
                <Sidebar className="z-50 !w-full bg-white" isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} isMobile={true} />
            </Div>
            <Div className="md:ml-[250px]">
                <Topbar onMenuClick={() => setIsSidebarExpanded(v => !v)} />
                <Div className="min-h-[calc(100vh-128px)] bg-neutral-100">
                    <Outlet />
                </Div>
                <Footer />
            </Div>
        </React.Fragment>
    );
};

export default MasterLayout;
