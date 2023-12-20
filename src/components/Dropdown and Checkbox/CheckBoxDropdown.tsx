/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import React, { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Div, Flex, Img } from "../General Components/BaseComponents";
import Checkbox from "./Checkbox";
import { IconX } from "@tabler/icons-react";
import { getLabels, getMembers } from "../DefaultValues";
import { DropdownType, ITask } from "../types";

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
}

interface DropdownProps {
    type: DropdownType;
    task: ITask;
    orgKey: string;
    align?: "start" | "center" | "end";
    icon?: ReactNode;
    label: string;
    isOpen: boolean;
    setTask: React.Dispatch<React.SetStateAction<ITask>>
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBoxDropdown: React.FC<DropdownProps> = ({ task, type, label, setTask, orgKey, icon, isOpen, setIsOpen, ...props }) => {
    const labels = getLabels(orgKey);
    const members = getMembers(orgKey);

    const addMember = (memberId: string) => {
        setTask((prev) => {
            if (prev && prev.members) {
                const isMemberAlreadyAdded = prev.members.includes(memberId);
                if (isMemberAlreadyAdded) {
                    return { ...prev, members: prev.members.filter((id) => id !== memberId) };
                }
                else {
                    return { ...prev, members: [...prev.members, memberId] };
                }
            }
            return prev;
        });
    };

    const addLabel = (labelId: string) => {
        setTask((prev) => {
            if (prev && prev.labels) {
                const isLabelAlreadyAdded = prev.labels.includes(labelId);
                if (isLabelAlreadyAdded) {
                    return { ...prev, labels: prev.labels.filter((id) => id !== labelId) };
                }
                else {
                    return { ...prev, labels: [...prev.labels, labelId] };
                }
            }
            return prev;
        });
    };

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
                        <Div className="ml-12">{type === DropdownType.Members ? "Members" : "Labels"}</Div>
                        <Flex className="justify-end w-10 h-6 cursor-pointer" onClick={() => setIsOpen(false)}> <IconX /></Flex>
                    </Flex>
                    {type === DropdownType.Members && <>{members?.map(d =>
                        <DropdownMenu.Item key={d.key} onClick={() => addMember(d.key)}>
                            <Flex className="gap-3 p-2 rounded-sm cursor-pointer hover:bg-slate-400">
                                <Img className="rounded-full w-[25px] h-[25px]" src={d.profileImage} />
                                <Div className="font-semibold capitalize text-16 text-neutral-700">{d.firstName}</Div>
                                <Checkbox checked={!!task.members!.includes(d.key)} onChange={() => addMember(d.key)} />
                            </Flex>
                        </DropdownMenu.Item>
                    )}</>}
                    {type === DropdownType.Labels && <>{labels?.map(d =>
                        <DropdownMenu.Item key={d.key} onClick={() => addLabel(d.key)}>
                            <Flex className="gap-2 p-1 m-2 rounded-sm cursor-pointer hover:bg-slate-400">
                                <Checkbox checked={!!task.labels!.includes(d.key)} onChange={() => addLabel(d.key)} />
                                <Flex className={`w-[150px] rounded ${d.backGround} px-2 text-14 select-none text-white capitalize`}>{d.title} </Flex>
                            </Flex>
                        </DropdownMenu.Item>
                    )}</>}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root >
    );
};

export default CheckBoxDropdown;
