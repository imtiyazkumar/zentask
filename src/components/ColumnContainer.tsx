import React from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";
import { IContainer, ITask } from "./types";
import { Div, Flex, FlexColumn } from "./BaseComponents";
import { IconMenu } from "@tabler/icons-react";
import CardEditorModal from "./modals/CardEditorModal";
import Button from "./Button";

interface ContainerProps {
    container: IContainer;
    orgKey: string;
    orgTasks: ITask[]
    update?: boolean;
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColumnContainer: React.FC<ContainerProps> = ({ orgTasks, container, orgKey, setUpdate }) => {
    const [isEditModalOpen, setEditIsModalOpen] = React.useState(false);
    const myTasks: ITask[] = orgTasks.filter(task => task.containerId === container.key).sort((task1, task2) => task2.serialNumber - task1.serialNumber);
    const taskKeys = myTasks.map(task => task.key);
    const [currentContainer, setCurrentContainer] = React.useState<IContainer>({ key: container?.key || "", title: container?.title || "", orgId: orgKey, serialNumber: container.serialNumber || 78 })
    const { setNodeRef, attributes, listeners, transform, isDragging } = useSortable({ id: container.key, data: { type: "Container", container } });
    const style = { transition: "ease-in-out", transform: CSS.Transform.toString(transform) };

    return (
        <FlexColumn className={`w-80 border h-[calc(100vh-190px)] overflow-y-auto gap-2 ${!isDragging ? "border-border-dark" : "border-primary"} rounded-xl p-4 bg-neutral-100`}>
            <div ref={setNodeRef} style={style} className="h-[calc(100vh-190px)] overflow-y-auto" >
                <Flex {...attributes} {...listeners} className="justify-between cursor-grab">
                    <Div className="font-semibold text-14 text-neutral-700">{currentContainer.title}{currentContainer.serialNumber}</Div>
                    <Div className="cursor-pointer"><IconMenu /></Div>
                </Flex>
                <Div className="flex flex-col flex-grow gap-4 pt-3">
                    <SortableContext items={taskKeys}>
                        {myTasks.map((task) => (
                            <TaskCard key={task.key} task={task} containerKey={currentContainer.key} orgKey={orgKey} setUpdate={setUpdate} />
                        ))}
                    </SortableContext>
                </Div>

                <CardEditorModal isModalOpen={isEditModalOpen} setIsModalOpen={setEditIsModalOpen} orgKey={orgKey} setUpdate={setUpdate} containerId={container.key} />
            </div>
            <Button variant="dark_outlined" onClick={() => { setEditIsModalOpen(true); setCurrentContainer(container) }}>Add task </Button>
        </FlexColumn>
    );
}

export default ColumnContainer;
