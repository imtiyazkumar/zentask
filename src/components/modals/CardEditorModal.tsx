/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Div, Flex, FlexColumn, Span } from "../General Components/BaseComponents";
import { IconHeart, IconX } from "@tabler/icons-react";
import TextArea from "../General Components/TextArea";
import CheckBoxDropdown from "../Dropdown and Checkbox/CheckBoxDropdown";
import Button from "../General Components/Button";
import { DropdownType, ITask, Id } from "../types";
import { defaultTasks, getTaskKey, getTaskSerial } from "../DefaultValues";

interface CardEditorProps {
    task?: ITask;
    orgKey: string
    isModalOpen: boolean;
    containerId: Id;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardEditorModal: React.FC<CardEditorProps> = ({ task, isModalOpen, setIsModalOpen, orgKey, containerId, setUpdate }) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpenLabel, setIsOpenLabel] = React.useState(false);

    const [thisTask, setThisTask] = React.useState<ITask>({ containerId: task?.containerId || containerId, content: task?.content || "", key: task?.key || getTaskKey(), orgId: task?.orgId || orgKey, serialNumber: task?.serialNumber || getTaskSerial(), created_at: task?.created_at || new Date(), labels: task?.labels || [], members: task?.members || [] });

    const onSave = () => {
        if (!thisTask.content.length) { alert("Content can't be empty"); return; }
        if (!task) {
            console.log("thisTask", new Date().toLocaleString(undefined, options))
            defaultTasks.push(thisTask);
            setUpdate((u) => !u);
            setThisTask({ containerId: containerId, content: "", key: getTaskKey(), orgId: orgKey, serialNumber: getTaskSerial(), created_at: new Date(), labels: [], members: [] });
        }
        else {
            const activeIndex = task ? defaultTasks.findIndex(Task => Task.key === thisTask.key) : defaultTasks.length + 1;
            defaultTasks[activeIndex] = (thisTask);
            setUpdate((u) => !u);
            // setThisTask({ containerId: containerId, content: "", key: getTaskKey(), orgId: orgKey, serialNumber: getTaskSerial(), created_at: new Date().toString(), labels: [], members: [] });
        }
        setIsModalOpen(false)
    };

    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="flex p-4 overflow-x-auto flex-col data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white w-[400px] md:w-[550px] ">
                    <Dialog.Title className="flex items-center justify-between pb-2 border-b border-border-dark">
                        <Span className="font-bold select-none text-16 text-neutral-700">Manage Task</Span>
                        <Span className="w-6 h-6 cursor-pointer" onClick={() => setIsModalOpen(!isModalOpen)}>
                            <IconX size={24} className="text-dark" />
                        </Span>
                    </Dialog.Title>
                    <Flex className="gap-3 py-2">
                        <FlexColumn className="w-2/3">
                            <Div className="py-2 font-medium text-14 text-neutral-700">Task Description</Div>
                            <Div>
                                <TextArea setText={setThisTask} task={thisTask} ></TextArea>
                            </Div>
                        </FlexColumn>
                        <FlexColumn className="self-start gap-4 pt-10">
                            <CheckBoxDropdown task={thisTask} isOpen={isOpen} setIsOpen={setIsOpen} label="Members" icon={<IconHeart size={14} />} type={DropdownType.Members} setTask={setThisTask} orgKey={orgKey} />
                            <CheckBoxDropdown task={thisTask} isOpen={isOpenLabel} setIsOpen={setIsOpenLabel} label="Labels" icon={<IconHeart size={14} />} type={DropdownType.Labels} setTask={setThisTask} orgKey={orgKey} />
                            <Button variant="primary_filled" onClick={onSave}>Save</Button>
                        </FlexColumn>
                    </Flex>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default CardEditorModal;
