import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Div, Flex, FlexColumn, Span } from "../BaseComponents";
import { IconHeart, IconX } from "@tabler/icons-react";
import TextArea from "./TextArea";
import CheckBoxDropdown from "../CheckBoxDropdown";
import Button from "../Button";
import { DropdownType, ITask } from "../types";
import { defaultTasks } from "../DefaultValues";

interface CardEditorProps {
    task: ITask;
    orgKey: string
    setTask: React.Dispatch<React.SetStateAction<ITask>>;
    isModalOpen: boolean;
    isAdding?: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    update?: boolean;
    setUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardEditorModal: React.FC<CardEditorProps> = ({ task, setTask, isModalOpen, setIsModalOpen, orgKey, isAdding, setUpdate, update }) => {

    const onSave = () => {
        if (isAdding) {
            defaultTasks.push({ ...task, content: text });
            setUpdate!(!update);
            setTask((prevTask) => {
                return { ...prevTask, content: "", members: [], labels: [] };
            });
        }
        setTask((prevTask) => {
            return { ...prevTask, content: text };
        });
        setIsModalOpen(false)
    }
    const [isOpen, setIsOpen] = React.useState(false);

    const [text, setText] = React.useState(task.content);
    const [isOpenLabel, setIsOpenLabel] = React.useState(false);

    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="flex p-4 flex-col data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white w-[550px] ">
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
                                <TextArea setText={setText} text={text} ></TextArea>
                            </Div>
                        </FlexColumn>
                        <FlexColumn className="self-start gap-4 pt-10">
                            <CheckBoxDropdown task={task} isOpen={isOpen} setIsOpen={setIsOpen} label="Members" icon={<IconHeart size={14} />} type={DropdownType.Members} setTask={setTask} orgKey={orgKey} />
                            <CheckBoxDropdown task={task} isOpen={isOpenLabel} setIsOpen={setIsOpenLabel} label="Labels" icon={<IconHeart size={14} />} type={DropdownType.Labels} setTask={setTask} orgKey={orgKey} />
                            <Button variant="primary_filled" onClick={onSave}>Save</Button>
                        </FlexColumn>
                    </Flex>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default CardEditorModal;
