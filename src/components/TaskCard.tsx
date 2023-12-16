import React from 'react';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ITask, Id } from "./types";
import { Div, Flex, Img } from "./BaseComponents";
import { IconMenu } from "@tabler/icons-react";
import Dropdown from "./Dropdown";
import CardEditorModal from './modals/CardEditorModal';
import ConfirmationModal from './modals/ConfirmationModal';
// import { getLabelsByKeys, getMembersByKeys } from './DefaultValues';


const TaskCard = ({ currentTask, containerKey, orgKey }: { currentTask: ITask, containerKey: Id, orgKey: string; }) => {
    const [task, setTask] = React.useState<ITask>(currentTask || { content: "", labels: [], members: [], containerId: containerKey, serialNumber: 12, created_at: new Date().toString() })
    // const labels = getLabelsByKeys(task.labels || []);
    // const members = getMembersByKeys(task.members || [])
    const [isEditModalOpen, setEditIsModalOpen] = React.useState(false);
    const [isDeleteModalOpen, setDeleteIsModalOpen] = React.useState(false);
    const { setNodeRef, attributes, listeners, transform, transition, isDragging, } = useSortable({ id: task.key!, data: { type: "Task", task } });
    const style = { transition, transform: CSS.Transform.toString(transform) };
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
    const dateStamp = new Date().toLocaleString(undefined, options);

    if (isDragging) {
        return (
            <div ref={setNodeRef} style={style} className=" p-2 h-[120px] min-h-max items-center flex rounded-md border border-primary cursor-grab" />
        );
    }

    return (
        <div ref={setNodeRef} style={style}{...attributes}{...listeners} className="p-2 bg-orange-200 rounded-md cursor-grab" >
            <Flex className="gap-3 pb-1">
                <Div className="bg-red-500 h-[10px] w-12 rounded-md"></Div>
                <Div className="bg-green-600 h-[10px] w-12 rounded-md"></Div>
                <Div className="w-6 h-6 p-1 ml-auto cursor-pointer">
                    <Dropdown icon={<IconMenu size={15} />} align="end" items={[{ label: "Edit Card", onClick: () => { setEditIsModalOpen(!isEditModalOpen) }, icon: <IconMenu size={15} /> }, { label: "Delete Card", onClick: () => { setDeleteIsModalOpen(!isDeleteModalOpen) }, icon: <IconMenu size={15} /> }]} />
                    <CardEditorModal isModalOpen={isEditModalOpen} setIsModalOpen={setEditIsModalOpen} task={task} setTask={setTask} orgKey={orgKey} />
                    <ConfirmationModal isModalOpen={isDeleteModalOpen} setIsModalOpen={setDeleteIsModalOpen} onCancel={() => console.log("delete")} onAction={() => console.log("delete")} />
                </Div>
            </Flex>
            <Div className="py-1 text-justify text-14">{task.content}</Div>
            <Flex className="items-end gap-2 cursor-default">
                <Div className="text-10 text-neutral-400">{dateStamp}</Div>
                <Flex className="gap-2 ml-auto">
                    <Img className="rounded-full w-[25px] h-[25px]" src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais" />
                    <Img className="rounded-full w-[25px] h-[25px]" src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais" />
                </Flex>
            </Flex>
        </div>
    );
}

export default TaskCard;
