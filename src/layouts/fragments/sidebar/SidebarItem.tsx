/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */


import { NavLink } from "react-router-dom";
import { AppRoutes } from "../../../routes/routes";
import { Span } from "../../../components/BaseComponents";
import { routeIcon } from "../../../routes/icons";

interface SidebarItemProps {
    label: string;
    link: AppRoutes;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, link }) => {
    return (
        <NavLink to={link} className={({ isActive }) => "flex items-center px-5 py-3 gap-3 group " + (isActive ? "active bg-primary rounded-md shadow-[0_5px_30px_0_rgba(7,33,37,0.3)]" : "inactive")}>
            {({ isActive }) =>
                <>
                    {routeIcon(link, isActive)}
                    <Span className="flex-1 text-14 font-medium group-[.active]:text-white group-[.inactive]:text-neutral-500">{label}</Span>
                </>
            }
        </NavLink>
    );
};

export default SidebarItem;
