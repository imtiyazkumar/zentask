/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import * as Dialog from "@radix-ui/react-dialog";
import { Div, Flex, Span } from "../BaseComponents";
import Button from "../Button";
import { IconX } from "@tabler/icons-react";

interface ConfirmationModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    onAction: VoidFunction;
    onCancel: VoidFunction;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isModalOpen, setIsModalOpen, onAction, onCancel }) => {
    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="">
                    <Dialog.Title className="flex items-center justify-between p-6 border-b">
                        <Div className="font-bold text-18 text-dark">Are you sure</Div>
                        <Span className="w-6 h-6 cursor-pointer" onClick={() => { setIsModalOpen(false); }}><IconX size={24} className="text-dark" /></Span>
                    </Dialog.Title>
                    <Flex >
                        <Button variant="dark_outlined" onClick={onCancel}>Cancel</Button>
                        <Button variant="primary_filled" onClick={onAction}>Delete</Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ConfirmationModal;
