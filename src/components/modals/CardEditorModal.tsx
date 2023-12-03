import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Div, Flex, FlexColumn, Span } from "../BaseComponents";
import { IconX } from "@tabler/icons-react";
import TextArea from "./TextArea";

interface UserInfoModalProps {
    title?: string;
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    userId?: string;
}

const CardEditorModal: React.FC<UserInfoModalProps> = ({ isModalOpen, setIsModalOpen }) => {
    const [text, setText] = React.useState("");

    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="min-h-[250px] flex p-4 flex-col data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white w-[640px] ">
                    <Dialog.Title className="flex items-center justify-between pb-2 border-b border-border-dark">
                        <Span className="font-bold select-none text-16 text-neutral-700">Profile Image</Span>
                        <Span className="w-6 h-6 cursor-pointer" onClick={() => setIsModalOpen(!isModalOpen)}>
                            <IconX size={24} className="text-dark" />
                        </Span>
                    </Dialog.Title>
                    <Flex className="gap-3 py-2">
                        <FlexColumn className="w-2/3">
                            <Div className="py-2 font-medium text-12 text-neutral-700">Task Description</Div>
                            <Div>
                                <TextArea setText={setText} text={text} ></TextArea>
                            </Div>
                        </FlexColumn>
                        <FlexColumn></FlexColumn>
                    </Flex>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default CardEditorModal;
