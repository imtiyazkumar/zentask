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

import { Link } from "react-router-dom";
// import Button from "../../../components/buttons/Button";
// import { Div, Flex, FlexColumn, Img, Span } from "../../../components/general/BaseComponents";
// import { AppRoutes, RouteDefinitions } from "../../../routes/routes";
import { cn } from "../../../utils/helper";
import SidebarItem from "./SidebarItem";
import { IconX } from "@tabler/icons-react";
import { Div, Flex, FlexColumn, Img, Span } from "../../../components/BaseComponents";

interface SidebarProps {
    isExpanded?: boolean;
    setIsExpanded?: (e: boolean) => void;
    className?: string;
    isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded = true, setIsExpanded, className, isMobile }) => {
    return (
        <FlexColumn onClick={() => isMobile && setIsExpanded?.(false)} className={cn("border-r border-border-dark h-full fixed justify-start gap-[30px] p-5 overflow-y-scroll", className, { "w-[250px]": isExpanded, "w-[100px]": !isExpanded })}>
            <Flex className="justify-between px-2 md:px-0 md:justify-center">
                <Link to={AppRoutes.Dashboard} className="flex justify-center"><Img src="/assets/ouma-color-logo.svg" style={{ width: 120, height: 33 }} /></Link>
                {isMobile && <IconX className="cursor-pointer" size={24} onClick={() => setIsExpanded?.(false)} />}
            </Flex>
            <FlexColumn className="justify-start flex-1 gap-4">
                {RouteDefinitions.filter(o => o.showInSidebar).map(o => <SidebarItem key={o.key} label={o.label} link={o.key} />)}
            </FlexColumn>
            {isExpanded &&
                <FlexColumn className="gap-4 p-4 bg-primary-3 rounded-2xl">
                    <Div className="p-3 bg-white rounded-full w-fit">
                        <Img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGfim-ZN8SHpQg45VszjLjr2JCJ9aMw8q31KIgXyKlKsh8aRm9" className="w-8 h-8" />
                    </Div>
                    <FlexColumn className="gap-1.5">
                        <Span className="font-bold text-16 text-text">Daniel is already the size of a Melon</Span>
                        <Span className="text-12 text-text">The baby's five senses have developed</Span>
                    </FlexColumn>
                    <Button height="small">Learn More</Button>
                </FlexColumn>
            }
            {true &&
                <FlexColumn>
                    <SidebarItem key={AppRoutes.Administration} label="Administration" link={AppRoutes.Administration} />
                </FlexColumn>
            }
            <FlexColumn className="justify-start gap-4">
                <SidebarItem key={AppRoutes.Appointments} label="Help & FAQ" link={AppRoutes.Appointments} />
                <SidebarItem key={AppRoutes.ContactUs} label="Contact Us" link={AppRoutes.ContactUs} />
            </FlexColumn>
        </FlexColumn>
    );
};

export default Sidebar;
