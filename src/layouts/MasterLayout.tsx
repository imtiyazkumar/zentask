import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./fragments/topbar/Topbar";
import Footer from "./fragments/footer/Footer";
import Sidebar from "./fragments/sidebar/Sidebar";
import { Div } from "../components/BaseComponents";

const MasterLayout: React.FC = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);

    const handleResize = () => {
        if (window.innerWidth > 768) { setIsSidebarExpanded(true) }
        if (window.innerWidth < 768) { setIsSidebarExpanded(false) }
    };

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <React.Fragment>
            <Div className={`${isSidebarExpanded ? "flex" : "hidden"}`}>
                <Sidebar className="z-50 !w-[220px] bg-white" />
            </Div>
            <Div className={`${isSidebarExpanded ? "ml-[220px]" : ""}`}>
                <Topbar onMenuClick={() => setIsSidebarExpanded(v => !v)} />
                <Div className="min-h-[calc(100vh-128px)] bg-neutral-100 p-6">
                    <Outlet />
                </Div>
                <Footer />
            </Div>
        </React.Fragment>
    );
};

export default MasterLayout;
