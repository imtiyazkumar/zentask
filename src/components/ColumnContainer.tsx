import React from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";
import { IContainer, ITask } from "./types";
import { Div, Flex } from "./BaseComponents";
import { IconMenu } from "@tabler/icons-react";
import { getTasks } from "./DefaultValues";
import CardEditorModal from "./modals/CardEditorModal";

interface ContainerProps {
    container: IContainer;
    orgKey: string;
}

const ColumnContainer: React.FC<ContainerProps> = ({ container, orgKey }) => {
    const [isEditModalOpen, setEditIsModalOpen] = React.useState(false);
    const [task, setTask] = React.useState<ITask>({ content: "", labels: [], members: [], containerId: container.key, serialNumber: 6, created_at: new Date().toString(), key: "" })
    const myTasks: ITask[] = getTasks(container.key);

    const [currentContainer, setCurrentContainer] = React.useState<IContainer>({ key: container?.key || "", title: container?.title || "", orgId: orgKey, serialNumber: 8 })
    const { setNodeRef, attributes, listeners, transform, isDragging } = useSortable({ id: container.key, data: { type: "Container", container } });
    const style = { transition: "ease-in-out", transform: CSS.Transform.toString(transform) };

    return (
        <div ref={setNodeRef} style={style} className={`w-[280px] border flex flex-col ${!isDragging ? "border-border-dark" : "border-primary"} rounded-xl p-4 bg-neutral-100`} >
            <Flex {...attributes} {...listeners} className="justify-between cursor-grab">
                <Div className="font-semibold text-14 text-neutral-700">{currentContainer.title}</Div>
                <Div className="cursor-pointer"><IconMenu /></Div>
            </Flex>
            <Div className="flex flex-col flex-grow gap-4 pt-3 overflow-x-hidden overflow-y-auto">
                <SortableContext items={Object.keys(myTasks)}>
                    {myTasks.map((task) => (
                        <TaskCard key={task.key} currentTask={task} containerKey={currentContainer.key} orgKey={orgKey} />
                    ))}
                </SortableContext>
            </Div>
            <button
                className="flex items-center gap-2 p-4 border-2 rounded-md border-columnBackgroundColor border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
                onClick={() => {
                    setEditIsModalOpen(true)
                    setCurrentContainer(container)
                }}
            >
                Add task
            </button>
            <CardEditorModal isModalOpen={isEditModalOpen} setIsModalOpen={setEditIsModalOpen} task={task} setTask={setTask} isAdding={true} orgKey={orgKey} />

        </div>
    );
}

export default ColumnContainer;
