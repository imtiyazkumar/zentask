/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import React from 'react';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ITask, Id } from "../types";
import { Div, Flex, Img } from "../General Components/BaseComponents";
import { IconMenu } from "@tabler/icons-react";
import Dropdown from "../Dropdown and Checkbox/Dropdown";
import CardEditorModal from '../modals/CardEditorModal';
import ConfirmationModal from '../modals/ConfirmationModal';
import { getLabelsByKeys, getMembersByKeys } from '../DefaultValues';
import { options } from '../helper';

const TaskCard = ({ task, orgKey, containerKey, setUpdate }: { task: ITask, containerKey: Id, orgKey: string; setUpdate: React.Dispatch<React.SetStateAction<boolean>>; }) => {
    const labels = getLabelsByKeys(task.labels || []);
    const members = getMembersByKeys(task.members || [])
    const [isEditModalOpen, setEditIsModalOpen] = React.useState(false);
    const [isDeleteModalOpen, setDeleteIsModalOpen] = React.useState(false);
    const { setNodeRef, attributes, listeners, transform, transition, isDragging, } = useSortable({ id: task.key!, data: { type: "Task", task } });
    const style = { transition, transform: CSS.Transform.toString(transform) };

    return (
        <div ref={setNodeRef} style={style}{...attributes}{...listeners} className={`p-2 bg-white rounded-md border cursor-grab ${isDragging ? "border-primary z-40" : "border-border-dark"}`} >
            <Flex className="gap-3 pb-1">
                {labels.map(label =>
                    <Div key={label.key} className={`${label.backGround} h-[10px] w-12 rounded-md`}></Div>
                )}
                <Div className="w-6 h-6 p-1 ml-auto cursor-pointer">
                    <Dropdown icon={<IconMenu size={15} />} align="end" items={[{ label: "Edit Card", onClick: () => { setEditIsModalOpen(!isEditModalOpen) }, icon: <IconMenu size={15} /> }, { label: "Delete Card", onClick: () => { setDeleteIsModalOpen(!isDeleteModalOpen) }, icon: <IconMenu size={15} /> }]} />
                    <CardEditorModal isModalOpen={isEditModalOpen} setIsModalOpen={setEditIsModalOpen} task={task} orgKey={orgKey} containerId={containerKey} setUpdate={setUpdate} />
                    <ConfirmationModal isModalOpen={isDeleteModalOpen} setIsModalOpen={setDeleteIsModalOpen} onCancel={() => console.log("delete")} onAction={() => console.log("delete")} />
                </Div>
            </Flex>
            <Div className="py-1 text-justify text-14">{task.content}</Div>
            <Flex className="items-end gap-2 cursor-default">
                <Div className="text-10 text-neutral-400">{task.created_at.toLocaleString(undefined, options)}</Div>
                <Flex className="gap-2 ml-auto">
                    {members.map(member =>
                        <Img key={member.key} className="rounded-full w-[25px] h-[25px]" src={member.profileImage} />
                    )}
                </Flex>
            </Flex>
        </div>
    );
}

export default TaskCard;
