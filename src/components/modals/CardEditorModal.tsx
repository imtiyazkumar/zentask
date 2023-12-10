import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Div, Flex, FlexColumn, Span } from "../BaseComponents";
import { IconX } from "@tabler/icons-react";
import TextArea from "./TextArea";
// import * as Accordion from "@radix-ui/react-accordion";
// import Checkbox from "../Checkbox";
import CheckBoxDropdown from "../CheckBoxDropdown";

interface UserInfoModalProps {
    title?: string;
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    userId?: string;
}

const CardEditorModal: React.FC<UserInfoModalProps> = ({ isModalOpen, setIsModalOpen }) => {
    const [text, setText] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="min-h-[250px] flex p-4 flex-col data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white w-[550px] ">
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
                            <Div className="h-[50px]"></Div>
                        </FlexColumn>
                        <FlexColumn>
                            <CheckBoxDropdown isOpen={isOpen} setIsOpen={setIsOpen} label="Members" icon={<IconX size={14} />} members={[
                                { firstName: "imtiyaz", key: "key1", lastName: "hjhh", organizationId: "ghhh", profileImage: "" },
                                { firstName: "imtiyaz", key: "key1", lastName: "hjhh", organizationId: "ghhh", profileImage: "" },
                                { firstName: "imtiyaz", key: "key1h", lastName: "hjhh", organizationId: "ghhh", profileImage: "" },
                                { firstName: "imtiyaz", key: "keyh1", lastName: "hjhh", organizationId: "ghhh", profileImage: "" },
                                { firstName: "imtiyaz", key: "key1uh", lastName: "hjhh", organizationId: "ghhh", profileImage: "" },
                                { firstName: "imtiyaz", key: "keyh1.", lastName: "hjhh", organizationId: "ghhh", profileImage: "" },
                                { firstName: "imtiyaz", key: "key1kkh", lastName: "hjhh", organizationId: "ghhh", profileImage: "" },
                                { firstName: "imtiyaz", key: "keyh1hh", lastName: "hjhh", organizationId: "ghhh", profileImage: "" },
                            ]} />
                        </FlexColumn>
                        {/* <FlexColumn>
                            <Accordion.Root type="single" className="w-full gap-3 px-4 py-3 space-y-4" collapsible>
                                <Accordion.Item key="header-1" value="item-1" className="overflow-hidden w-[180px]">
                                    <Accordion.Header className="w-full">
                                        <Accordion.Trigger>
                                            <Flex className="w-[180px] p-2  rounded-md h-7 bg-slate-500">
                                                <Div className="font-semibold text-16 text-slate-100">Labels</Div>
                                            </Flex>
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="w-full data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] py-2">
                                        <FlexColumn className="items-start justify-between gap-2 py-2 h-[120px] overflow-y-auto px-2">
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                        </FlexColumn>
                                    </Accordion.Content>
                                </Accordion.Item>

                                <Accordion.Item key="header-2" value="item-2" className="overflow-hidden w-[180px]">
                                    <Accordion.Header className="w-full">
                                        <Accordion.Trigger>
                                            <Flex className="w-[180px] p-2  rounded-md h-7 bg-slate-500">
                                                <Div className="font-semibold text-16 text-slate-100">Labels</Div>
                                            </Flex>
                                        </Accordion.Trigger>
                                    </Accordion.Header>
                                    <Accordion.Content className="w-full data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] py-2">
                                        <FlexColumn className="items-start justify-between gap-6 py-2 h-[150px] overflow-y-auto px-2">
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                            <Checkbox label="Imtiyaz Ahmad" checked={true} onChange={() => {}} className="font-semibold text-12 text-neutral-900" />
                                        </FlexColumn>
                                    </Accordion.Content>
                                </Accordion.Item>

                            </Accordion.Root>
                        </FlexColumn> */}
                    </Flex>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default CardEditorModal;
