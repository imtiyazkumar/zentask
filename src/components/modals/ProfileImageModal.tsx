/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import React from "react";
import { IconX, IconZoomIn, IconZoomOut } from "@tabler/icons-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Div, Flex, Span } from "../BaseComponents";
import Button from "../Button";

const SCALE_MIN = 0.8;
const SCALE_MAX = 4.0;

interface ProfileImageModalProps {
    selectedImage: File | null;
    onCrop: (image: Blob | null) => void;
    uploading: boolean;
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
    imageRef: React.MutableRefObject<HTMLInputElement | null>
}

const ProfileImageModal: React.FC<ProfileImageModalProps> = function ({ isModalOpen, setIsModalOpen, onCrop, uploading, imageRef }) {
    const [scale, setScale] = React.useState(1);
    const resetFileInput = () => {
        if (imageRef.current) {
            imageRef.current.value = "";
        }
        onCrop(null);
    };

    const handleSaveCroppedImage = () => {
        // if (!editorRef.current) return;
        // editorRef.current.getImageScaledToCanvas().toBlob(onCrop);
        setScale(1);
        resetFileInput();
    };

    const handleChangeImage = () => {
        setScale(1);
        imageRef.current?.click();
    };

    const handleCloseMOdal = () => {
        setIsModalOpen(false);
        resetFileInput();
    };

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        if ((e.deltaY > 0 && scale <= SCALE_MIN) || (e.deltaY < 0 && scale >= SCALE_MAX)) return;

        setScale(s => e.deltaY < 0 ? s + 0.1 : s - 0.1);
    };

    const zoomIn = () => {
        if (scale >= SCALE_MAX) return;

        setScale(s => s + 0.1);
    };

    const zoomOut = () => {
        if (scale <= SCALE_MIN) return;

        setScale(s => s - 0.1);
    };

    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="flex flex-col data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white w-[480px]">
                    <Dialog.Title className="flex items-center justify-between p-4 border-b border-border-dark">
                        <Span className="font-bold select-none text-18 text-dark">Profile Image</Span>
                        <Span className="w-6 h-6 cursor-pointer" onClick={handleCloseMOdal}>
                            <IconX size={24} className="text-dark" />
                        </Span>
                    </Dialog.Title>
                    <Flex className="relative flex items-center justify-center h-full">
                        <Div style={{ position: "relative", width: "100%", height: "100%" }} onWheel={handleWheel}>
                            {/* {selectedImage &&
                <AvatarEditor
                    ref={editorRef}
                    image={selectedImage}
                    width={300}
                    height={300}
                    borderRadius={1000}
                    color={[0, 0, 0, 0.5]}
                    scale={scale}
                    rotate={0}
                    style={{ width: "100%", height: "100%" }}
                />
            } */}
                        </Div>
                        <Flex className="absolute gap-2 bottom-3 right-3">
                            <IconZoomIn className="p-1.5 rounded cursor-pointer bg-white text-text hover:bg-neutral-200 active:bg-neutral-400" size={32} onClick={zoomIn} />
                            <IconZoomOut className="p-1.5 rounded cursor-pointer bg-white text-text hover:bg-neutral-200 active:bg-neutral-400" size={32} onClick={zoomOut} />
                        </Flex>
                    </Flex>
                    <Flex className="gap-4 p-4 border-t border-border-dark">
                        <Button onClick={handleChangeImage} variant="dark_outlined" className="ml-auto">Change</Button>
                        <Button onClick={handleSaveCroppedImage} loading={uploading}>Save</Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ProfileImageModal;
