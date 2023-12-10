import React, { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Div, Flex } from "./BaseComponents";
import Checkbox from "./Checkbox";
import { IconX } from "@tabler/icons-react";

export interface IUser {
    key: string;
    firstName: string;
    lastName: string;
    organizationId: string;
    profileImage: string;
}

export interface ILabel {
    key: string;
    title: string;
    color: string;
}


interface DropdownProps {
    members?: Array<IUser>;
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

const addLabel = (labelId: string) => {
    console.log(labelId)

}


const CheckBoxDropdown: React.FC<DropdownProps> = ({ label, members, labels, icon, isOpen, setIsOpen, ...props }) => {

    return (
        <DropdownMenu.Root open={isOpen}>
            <DropdownMenu.Trigger onClick={() => setIsOpen(true)}>
                <Flex className="w-[150px] h-6 rounded-sm px-2 py-3.5 bg-slate-300 gap-2 from-neutral-400">
                    <Div> {icon}</Div><Div>{label}</Div>
                </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content {...props} sideOffset={10} alignOffset={-5} className=" bg-white border rounded-md max-h-[300px] overflow-y-auto">
                    <Flex className="justify-between p-2 border-b">
                        <Div className="ml-12">{members ? "Members" : "Labels"}</Div>
                        <Flex className="justify-end w-10 h-6 cursor-pointer" onClick={() => setIsOpen(false)}> <IconX /></Flex>
                    </Flex>
                    {members && <>{members?.map(d =>
                        <DropdownMenu.Item key={d.key} onClick={() => addMember(d.key)}>
                            <Flex className="gap-3 p-2 rounded-sm cursor-pointer hover:bg-slate-400">
                                <Div className="w-8 h-8 bg-orange-300 rounded-full"></Div>
                                <Div className="font-semibold capitalize text-16 text-neutral-700">{d.firstName} {d.firstName}</Div>
                                <Checkbox checked={true} onChange={() => addMember(d.key)} />
                            </Flex>
                        </DropdownMenu.Item>
                    )}</>}
                    {labels && <>{labels?.map(d =>
                        <DropdownMenu.Item key={d.key} onClick={() => addLabel(d.key)}>
                            <Flex className="gap-2 p-1 m-2 rounded-sm cursor-pointer hover:bg-slate-400">
                                <Checkbox checked={true} onChange={() => addMember(d.key)} />
                                <Flex className={`w-[150px] rounded bg-${d.color} px-2 text-14 select-none text-white`}>{d.title}</Flex>
                            </Flex>
                        </DropdownMenu.Item>
                    )}</>}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root >
    );
};

export default CheckBoxDropdown;
