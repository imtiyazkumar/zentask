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

import { Div, Flex } from "../../../components/general/BaseComponents";
import { IconMenu2 } from "@tabler/icons-react";
import ProfileDropdown from "../../../components/dropdowns/ProfileDropdown";
import NotificationDropdown from "../../../components/dropdowns/NotificationDropdown";
import { UserQuery } from "../../../apiService";
import { IUserInformation } from "../../../types/user";

interface TopbarProps {
    onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
    const { data, isLoading } = UserQuery.useQueryGetUser();
    const user = data?.user_information ?? {} as IUserInformation;

    return (
        <Flex className="h-16 gap-6 px-6 border-b print:hidden border-border-dark">
            <Div className="cursor-pointer md:hidden" onClick={onMenuClick}><IconMenu2 size={24} className="text-neutral-900" /></Div>
            <Div className="ml-auto">&nbsp;</Div>
            <NotificationDropdown />
            <Div className="border-l h-[30px] mx-4"></Div>
            <ProfileDropdown
                name={(user.firstname || "") + " " + (user.lastname || "")}
                loading={isLoading}
                image={user.image || "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"}
            />
        </Flex>
    );
};

export default Topbar;
