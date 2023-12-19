/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import React from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";
import { IContainer, ITask, Id } from "../types";
import { Div, Flex, FlexColumn } from "../General Components/BaseComponents";
import { IconMenu } from "@tabler/icons-react";
import CardEditorModal from "../Modals/CardEditorModal";
import Button from "../General Components/Button";
import Input from "../General Components/Input";
import { defaultContainers } from "../DefaultValues";
import Dropdown from "../Dropdown and Checkbox/Dropdown";

interface ContainerProps {
    container: IContainer;
    orgKey: string;
    orgTasks: ITask[]
    update?: boolean;
    editMode?: boolean;
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColumnContainer: React.FC<ContainerProps> = ({ orgTasks, container, orgKey, setUpdate, editMode }) => {
    const [e, setEditMode] = React.useState(editMode)
    const [isEditModalOpen, setEditIsModalOpen] = React.useState(false);
    const myTasks: ITask[] = orgTasks.filter(task => task.containerId === container.key).sort((task1, task2) => task2.serialNumber - task1.serialNumber);
    const taskKeys = myTasks.map(task => task.key);
    const [currentContainer, setCurrentContainer] = React.useState<IContainer>({ key: container?.key || "", title: container?.title || "", orgId: orgKey, serialNumber: container.serialNumber || 78 })
    const { setNodeRef, attributes, listeners, transform, isDragging } = useSortable({ id: container.key, data: { type: "Container", container } });
    const style = { transition: "ease-in-out", transform: CSS.Transform.toString(transform) };
    const updateContainer = (key: Id) => {
        const activeIndex = defaultContainers.findIndex(container => container.key === key);
        defaultContainers[activeIndex] = (currentContainer);
        setEditMode(false)
    }

    return (

        <FlexColumn className={`w-80 border h-[calc(100vh-190px)] gap-2 ${!isDragging ? "border-border-dark" : "border-primary"} rounded-xl bg-neutral-100`}>
            <div ref={setNodeRef} style={style} className="h-[calc(100vh-190px)] overflow-y-scroll p-4" >
                {e ?
                    <Flex className="items-end gap-2 ">
                        <Input value={currentContainer.title} onChange={(e) => { setCurrentContainer({ ...currentContainer, title: e.target.value }) }}></Input>
                        <Button width="auto" height="small" variant="dark_filled" className="h-9" onClick={() => updateContainer(currentContainer.key)}>Save</Button>
                    </Flex> :
                    <Flex {...attributes} {...listeners} className="justify-between cursor-grab">
                        <Div className="font-semibold capitalize text-14 text-neutral-700">{currentContainer.title}</Div>
                        <Dropdown icon={<IconMenu />} align="end" items={[{ label: "Edit Container", onClick: () => { setEditMode(true) }, icon: <IconMenu size={16} /> }, { label: "Delete Card", onClick: () => {}, icon: <IconMenu size={15} /> }]} />
                    </Flex>
                }
                <Div className="flex flex-col flex-grow gap-4 pt-3">
                    <SortableContext items={taskKeys}>
                        {myTasks.map((task) => (<TaskCard key={task.key} task={task} containerKey={currentContainer.key} orgKey={orgKey} setUpdate={setUpdate} />))}
                    </SortableContext>
                </Div>
                <CardEditorModal isModalOpen={isEditModalOpen} setIsModalOpen={setEditIsModalOpen} orgKey={orgKey} setUpdate={setUpdate} containerId={container.key} />
            </div>
            <Button variant="dark_outlined" onClick={() => { setEditIsModalOpen(true); setCurrentContainer(container) }}>Add task </Button>
        </FlexColumn>
    );
}

export default ColumnContainer;
