import React from "react";
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { organization } from "../../components/DefaultValues";
import { Div, Flex } from "../../components/BaseComponents";
import ColumnContainer from "../../components/ColumnContainer";
import Button from "../../components/Button";


const Dashboard: React.FC = () => {

    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 } }));
    const [Organization, setOrganization] = React.useState(organization)

    const swapStrings = (array: string[], string1: string, string2: string): string[] => {
        const index1 = array.indexOf(string1);
        const index2 = array.indexOf(string2);
        if (index1 === -1 || index2 === -1) { return [...array] }
        [array[index1], array[index2]] = [array[index2], array[index1]];
        return array;
    };

    const onDragStart = (event: DragStartEvent) => {
        console.log(event)
        // if (event.active.data.current?.type === "Container") {
        //     setActiveColumn(event.active.data.current.container);
        //     return;
        // }
        // if (event.active.data.current?.type === "Task") {
        //     setActiveTask(event.active.data.current.task);
        //     return;
        // }
    }

    const onDragOver = (event: DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;
        const activeId = active.id;
        const overId = over.id;
        if (activeId === overId) return;
        const isActiveATask = active.data.current?.type === "Task";
        const isOverATask = over.data.current?.type === "Task";
        if (isActiveATask && isOverATask) {
            // const newTasks = swapStrings(organization.tasks, active.id as string, over.id as string);
            setOrganization((org) => ({ ...org, tasks: organization.tasks }))
        }
    }

    const onDragEnd = (event: DragEndEvent) => {
        // setActiveColumn(null);
        // setActiveTask(null);
        const { active, over } = event;
        if (!over) return;
        const isActiveAContainer = active.data.current?.type === "Container";
        const isOverAContainer = over.data.current?.type === "Container";
        if (isActiveAContainer && isOverAContainer) {
            const newContainers = swapStrings(organization.containers, active.id as string, over.id as string);
            setOrganization((org) => ({ ...org, containers: newContainers }))
        }
    }

    return (
        <Flex className="h-full p-5 overflow-x-auto">
            <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
                <Div className="flex gap-4 m-auto">
                    <Div className="flex gap-4">
                        <SortableContext items={Organization.containers}>
                            {Organization.containers.map((col) => (
                                <ColumnContainer
                                    key={col}
                                    containerKey={col}
                                    organization={organization}
                                    setOrganization={setOrganization}
                                />
                            ))}
                        </SortableContext>
                    </Div>
                    <Button variant="dark_outlined" onClick={() => {}}> + Add Column</Button>
                </Div>
            </DndContext>
        </Flex>
    );
}

export default Dashboard;
