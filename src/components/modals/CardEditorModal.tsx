import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Div, Flex, FlexColumn, Span } from "../BaseComponents";
import { IconHeart, IconX } from "@tabler/icons-react";
import TextArea from "./TextArea";
import CheckBoxDropdown, { ILabel, IUser } from "../CheckBoxDropdown";
import Button from "../Button";

interface UserInfoModalProps {
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    members?: Array<IUser>;
    labels?: Array<ILabel>;
    onSave: () => void
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export enum Labels {
    Bug = "cyan-950",
    Feature = "purple-600",
    Urgent = "red-600",
    Warning = "yellow-600",
    Study = "green-600"
}

const CardEditorModal: React.FC<UserInfoModalProps> = ({ content, setContent, members, labels, onSave, isModalOpen, setIsModalOpen }) => {
    onSave = () => {
        setContent(text);
        setIsModalOpen(false)
    }
    const [isOpen, setIsOpen] = React.useState(false);

    const [text, setText] = React.useState(content);
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
                            <CheckBoxDropdown isOpen={isOpen} setIsOpen={setIsOpen} label="Members" icon={<IconHeart size={14} />} members={members} />
                            <CheckBoxDropdown isOpen={isOpenLabel} setIsOpen={setIsOpenLabel} label="Labels" icon={<IconHeart size={14} />} labels={labels} />
                            <Button variant="primary_filled" onClick={onSave}>Save</Button>
                        </FlexColumn>
                    </Flex>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default CardEditorModal;
