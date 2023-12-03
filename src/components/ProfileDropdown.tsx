/**
 * Project Ouma Health
 *
 * @author      Afaan Bilal
 * @copyright   Teleperinatal, Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// // import { Div, Flex, FlexColumn } from "../general/BaseComponents";
// import { _ } from "../../utils/helper";
// import { AuthQuery } from "../../apiService";
// import { useAuth } from "../../root/providers/AuthProvider";
// import { AppRoutes } from "../../routes/routes";
// import Avatar from "../general/Avatar";
// import SkeletonLoader from "../loading/SkeletonLoader";
import { Div, Flex } from './BaseComponents';

interface ProfileDropdownProps {
    name: string;
    loading: boolean;
    image?: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = () => {
    // const auth = useAuth();
    // const navigate = useNavigate();

    // const { mutate, isPending } = AuthQuery.useMutationSignOut();
    // name = !loading ? name : "";

    const [isOpen, setIsOpen] = React.useState(false);

    // const signOut = () => {
    //     mutate(_, {
    //         onSuccess: () => {
    //             auth.clearToken();
    //         },
    //     });
    // };

    return (
        <DropdownMenu.Root open={isOpen} onOpenChange={o => setIsOpen(o)}>
            <DropdownMenu.Trigger className="outline-none select-none">
                <Flex className="gap-3">
                    {/* <Avatar name={name} image={image} avatarClassName="select-none" /> */}
                    <Div className="font-semibold select-none text-16">
                        {/* <SkeletonLoader loading={loading} className="w-24">{name}</SkeletonLoader> */}
                    </Div>
                    <IconChevronDown size={14} className="text-neutral-500" />
                </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    sideOffset={8}
                    align="end"
                    alignOffset={-5}
                    className="bg-white border w-44 rounded-2xl shadow-custom">
                    {/* <FlexColumn className="outline-none select-none">
                        <Flex className="gap-4 p-3 cursor-pointer hover:rounded-b-none rounded-2xl hover:bg-neutral-300 hover:text-primary-2" onClick={() => { navigate(AppRoutes.Profile); setIsOpen(false); }}>
                            <Avatar name={name} image={image} avatarClassName="h-5 w-5" fallbackClassName="h-5 w-5" />
                            <Div className="font-semibold text-16">Profile</Div>
                        </Flex>
                        <Flex className="gap-4 p-3 cursor-pointer hover:rounded-t-none rounded-2xl hover:bg-neutral-300 hover:text-primary-2 group" onClick={signOut}>
                            {isPending ?
                                <IconLoader2 size={20} className="animate-spin text-text group-hover:text-primary-2" /> :
                                <IconLogout size={20} className="text-text group-hover:text-primary-2" />
                            }
                            <Div className="font-semibold text-16">Logout</Div>
                        </Flex>
                    </FlexColumn> */}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default ProfileDropdown;
