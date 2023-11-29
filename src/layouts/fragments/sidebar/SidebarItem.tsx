/**
 * Project Ouma Health
 *
 * @author      Anees Muzzafer
 * @copyright   Teleperinatal, Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import { NavLink } from "react-router-dom";
import { Div, Span } from "../../../components/general/BaseComponents";
import { AppRoutes } from "../../../routes/routes";
import { routeIcon } from "../../../routes/icons";

interface SidebarItemProps {
    label: string;
    link: AppRoutes;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, link }) => {
    return (
        <NavLink to={link} className={({ isActive }) => "flex items-center px-5 py-3 gap-3 group " + (isActive ? "active bg-text rounded-full shadow-[0_5px_30px_0_rgba(7,33,37,0.3)]" : "inactive")}>
            {({ isActive }) =>
                <>
                    {routeIcon(link, isActive)}
                    <Span className="flex-1 text-14 font-medium group-[.active]:text-white group-[.inactive]:text-neutral-500">{label}</Span>
                    {link === AppRoutes.Messages && <Div className="flex items-center justify-center w-6 h-6 font-semibold text-white rounded-full bg-alerts-error_base text-14">8</Div>}
                </>
            }
        </NavLink>
    );
};

export default SidebarItem;
