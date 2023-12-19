/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { Link } from "react-router-dom";
import { cn } from "../../../utils/helper";
import SidebarItem from "./SidebarItem";
import { AppRoutes, RouteDefinitions } from "../../../routes/routes";
import { Flex, FlexColumn, Img } from "../../../components/BaseComponents";
import logo from "../../../assets/zentask-logo.svg"
interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    return (
        <FlexColumn className={cn("border-r border-border-dark h-full fixed justify-start gap-6 p-5", className)}>
            <Flex className="px-2">
                <Link to={AppRoutes.Dashboard} className="flex"><Img src={logo} /></Link>
            </Flex>
            <FlexColumn className="justify-start flex-1 gap-4">
                {RouteDefinitions.filter(o => o.showInSidebar).map(o => <SidebarItem key={o.key} label={o.label} link={o.key} />)}
            </FlexColumn>

            {true &&
                <FlexColumn>
                    <SidebarItem key={AppRoutes.Organizations} label="Organizations" link={AppRoutes.Organizations} />
                    <SidebarItem key={AppRoutes.Users} label="Users" link={AppRoutes.Users} />
                </FlexColumn>
            }

        </FlexColumn>
    );
};

export default Sidebar;
