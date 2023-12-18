import React from "react";
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { Div, Flex } from "../../components/BaseComponents";
import ColumnContainer from "../../components/ColumnContainer";
import Button from "../../components/Button";
import { IOrganization } from "../../components/types";
import { defaultContainers, defaultTasks } from "../../components/DefaultValues";

const Dashboard: React.FC = () => {

    const [update, setUpdate] = React.useState(false)
    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 } }));
    const [Organization, setOrganization] = React.useState<IOrganization>({ key: "org1", title: "Zantask", manager: "key9" })
    const [containers, setContainers] = React.useState(defaultContainers.filter(container => container.orgId === Organization.key).sort((container1, container2) => container2.serialNumber - container1.serialNumber))
    const [tasks, setTasks] = React.useState(defaultTasks.filter(task => task.orgId === Organization.key).sort((task1, task2) => task2.serialNumber - task1.serialNumber))

    React.useEffect(() => {
        setContainers(defaultContainers
            .filter(container => container.orgId === Organization.key)
            .sort((task1, task2) => task2.serialNumber - task1.serialNumber))
        setTasks(defaultTasks
            .filter(task => task.orgId === Organization.key)
            .sort((task1, task2) => task2.serialNumber - task1.serialNumber))
    }, [update, Organization.key])

    const containerKeys = containers.map(container => container.key);

    const onDragStart = (event: DragStartEvent) => {
        return
        console.log("start", event)
        setOrganization(Organization)
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
            const activeTaskKey = event.active.data.current?.task.key;
            const overTaskKey = event.over?.data.current?.task.key; const activeIndex = defaultTasks.findIndex(Task => Task.key === activeTaskKey);
            const overIndex = defaultTasks.findIndex(Task => Task.key === overTaskKey);
            if (activeIndex !== -1 && overIndex !== -1) {
                const tempSerial = defaultTasks[activeIndex].serialNumber;
                defaultTasks[activeIndex].serialNumber = defaultTasks[overIndex].serialNumber;
                defaultTasks[overIndex].serialNumber = tempSerial;
            }
        }

        const isOverAContainer = over.data.current?.type === "Container";
        if (isActiveATask && isOverAContainer) {
            const activeTaskKey = event.active.data.current?.task?.key
            const overContainerKey = event.over?.data.current?.container?.key;
            const activeIndex = defaultTasks.findIndex(Task => Task.key === activeTaskKey);
            defaultTasks[activeIndex].containerId = overContainerKey;
        }
        setUpdate(!update)

    }
    const onDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (!over) return;
        const isActiveAContainer = active.data.current?.type === "Container";
        const isOverAContainer = over.data.current?.type === "Container";
        if (isActiveAContainer && isOverAContainer) {
            const activeContainerKey = event.active.data.current?.container.key;
            const overContainerKey = event.over?.data.current?.container.key;

            const activeIndex = defaultContainers.findIndex(container => container.key === activeContainerKey);
            const overIndex = defaultContainers.findIndex(container => container.key === overContainerKey);

            if (activeIndex !== -1 && overIndex !== -1) {
                const tempSerial = defaultContainers[activeIndex].serialNumber;
                defaultContainers[activeIndex].serialNumber = defaultContainers[overIndex].serialNumber;
                defaultContainers[overIndex].serialNumber = tempSerial;
            }
        }
        setUpdate(!update)
    };

    return (
        <Flex className="h-full p-5 overflow-x-auto">
            <DndContext sensors={sensors} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver}>
                <Div className="flex gap-4 m-auto">
                    <Div className="flex gap-4">
                        <SortableContext items={containerKeys}>
                            {containers.map((col) => (
                                <ColumnContainer
                                    key={col.key}
                                    container={col}
                                    orgTasks={tasks}
                                    orgKey={Organization.key}
                                    setUpdate={setUpdate}
                                    update={update} />
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
