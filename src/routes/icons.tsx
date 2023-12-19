/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { AppRoutes } from "./routes";
import { IconLayoutDashboard, IconHistory, IconMessageDots, IconCalendar, IconUser, IconPhone, IconShield } from "@tabler/icons-react";

const ACTIVE_COLOR = "#FFFFFF";
const INACTIVE_COLOR = "#A0AEC0";

export const routeIcon = (key: AppRoutes, active: boolean = false, size: number = 18, activeColor: string = ACTIVE_COLOR, inactiveColor: string = INACTIVE_COLOR) => {
    switch (key) {
        case AppRoutes.Dashboard:
            return <IconLayoutDashboard color={active ? activeColor : inactiveColor} size={size} />;
        case AppRoutes.Organization:
            return <IconHistory color={active ? activeColor : inactiveColor} size={size} />;
        case AppRoutes.Members:
            return <IconMessageDots color={active ? activeColor : inactiveColor} size={size} />;
        case AppRoutes.Profile:
            return <IconCalendar color={active ? activeColor : inactiveColor} size={size} />;
        case AppRoutes.ProfileEditor:
            return <IconUser color={active ? activeColor : inactiveColor} size={size} />;
        case AppRoutes.Organizations:
            return <IconPhone color={active ? activeColor : inactiveColor} size={size} />;
        case AppRoutes.Users:
            return <IconShield color={active ? activeColor : inactiveColor} size={size} />;
        default:
            return <IconLayoutDashboard color={active ? activeColor : inactiveColor} size={size} />;
    }
};
