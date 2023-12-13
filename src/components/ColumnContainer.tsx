import React from "react";
import { DndContext } from '@dnd-kit/core';
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";
import { IContainer, IOrganization, ITask } from "./types";
import { Div, Flex } from "./BaseComponents";
import { IconMenu } from "@tabler/icons-react";
import { defaultContainers, defaultTasks } from "./DefaultValues";

interface ContainerProps {
    containerKey: string;
    organization: IOrganization;
}

const ColumnContainer: React.FC<ContainerProps> = ({ containerKey, organization }) => {
    const currentContainer = defaultContainers.find(container => container.key === containerKey);
    const OrganizationTasks: ITask[] = defaultTasks.filter(task => organization.tasks.includes(task.key as string));
    const myTasks: ITask[] = OrganizationTasks.filter(task => task.containerId === containerKey);
    const [container, setContainer] = React.useState<IContainer>({ key: currentContainer?.key || "", title: currentContainer?.title || "" })
    const { setNodeRef, attributes, listeners, transform, isDragging } = useSortable({ id: container.key, data: { type: "Container", container } });
    const style = { transition: "ease-in-out", transform: CSS.Transform.toString(transform) };

    return (
        <div ref={setNodeRef} style={style} className={`w-[280px] border flex flex-col ${!isDragging ? "border-border-dark" : "border-primary"} rounded-xl p-4 bg-neutral-100`} >
            <Flex {...attributes} {...listeners} className="justify-between cursor-grab">
                <Div className="font-semibold text-14 text-neutral-700">{container.title}</Div>
                <Div className="cursor-pointer"><IconMenu /></Div>
            </Flex>
            <Div className="flex flex-col flex-grow gap-4 pt-3 overflow-x-hidden overflow-y-auto">
                <DndContext>
                    <SortableContext items={organization.tasks}>
                        {myTasks.map((task) => (
                            <TaskCard key={task.key} currentTask={task} />
                        ))}
                    </SortableContext>
                </DndContext>
            </Div>
            <button
                className="flex items-center gap-2 p-4 border-2 rounded-md border-columnBackgroundColor border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
                onClick={() => {
                    setContainer(container)
                }}
            >
                Add task
            </button>
        </div>
    );
}

export default ColumnContainer;
