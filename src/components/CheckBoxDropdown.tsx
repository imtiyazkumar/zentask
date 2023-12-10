import React, { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Div, Flex } from "./BaseComponents";
import Checkbox from "./Checkbox";

interface IUser {
    key: string;
    firstName: string;
    lastName: string;
    organizationId: string;
    profileImage: string;
}

interface ILabel {
    key: string;
    title: string;
    color: string;
}


interface DropdownProps {
    members: Array<IUser>;
    labels?: Array<ILabel>;
    align?: "start" | "center" | "end";
    icon?: ReactNode;
    label: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const addMember = (memberId: string) => {
    console.log(memberId)

}

const CheckBoxDropdown: React.FC<DropdownProps> = ({ label, members, labels, icon, isOpen, setIsOpen, ...props }) => {
    return (
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger onClick={() => setIsOpen(true)}>
                <Flex>
                    {icon}
                    <Div>{label}</Div>
                </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content {...props} sideOffset={10} align="start" alignOffset={-5}>
                    {members && <>{members?.map(d =>
                        <DropdownMenu.Item key={d.key}>
                            <Checkbox label={d.firstName} checked={true} onChange={() => addMember(d.key)} className="font-semibold text-12 text-neutral-900" />
                        </DropdownMenu.Item>
                    )}</>}
                    {labels && <>{labels?.map(d =>
                        <DropdownMenu.Item key={d.key}>
                            <Checkbox label={d.title} checked={true} onChange={() => addMember(d.key)} className="font-semibold text-12 text-neutral-900" />
                        </DropdownMenu.Item>
                    )}</>}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root >
    );
};

export default CheckBoxDropdown;
