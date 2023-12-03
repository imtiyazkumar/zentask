import { SortableContext, useSortable } from "@dnd-kit/sortable";
// import TrashIcon from "../icons/TrashIcon";
// import { Column, Id, Task } from "../types";
import { CSS } from "@dnd-kit/utilities";
import { useMemo } from "react";
// import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";
import { Column, Id, ITask } from "./types";
import { Div, Flex } from "./BaseComponents";
import { IconMenu } from "@tabler/icons-react";

interface Props {
    column: Column;
    deleteColumn: (id: Id) => void;
    updateColumn: (id: Id, title: string) => void;

    createTask: (columnId: Id) => void;
    updateTask: (id: Id, content: string) => void;
    deleteTask: (id: Id) => void;
    tasks: ITask[];
}

function ColumnContainer({
    column,
    // deleteColumn,
    // updateColumn,
    createTask,
    tasks,
    // deleteTask,
    // updateTask,
}: Props) {
    // const [editMode, setEditMode] = useState(false);

    const tasksIds = useMemo(() => {
        return tasks.map((task) => task.id);
    }, [tasks]);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },
        // disabled: editMode,
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    if (isDragging) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="
      bg-columnBackgroundColor
      opacity-40
      border-2
      border-pink-500
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
            ></div>
        );
    }

    return (
        <div ref={setNodeRef} style={style} className=" w-[280px] border flex flex-col border-border-dark rounded-xl p-4 bg-neutral-100" >
            <Flex {...attributes} {...listeners} className="justify-between cursor-grab">
                <Div className="font-semibold text-14 text-neutral-700">{column.title}</Div>
                <Div className="cursor-pointer"><IconMenu /></Div>
            </Flex>
            <Div className="flex flex-col flex-grow gap-4 pt-3 overflow-x-hidden overflow-y-auto">
                <SortableContext items={tasksIds}>
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                        // deleteTask={deleteTask}
                        // updateTask={updateTask}
                        />
                    ))}
                </SortableContext>
            </Div>
            <button
                className="flex items-center gap-2 p-4 border-2 rounded-md border-columnBackgroundColor border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
                onClick={() => {
                    createTask(column.id);
                }}
            >
                Add task
            </button>
        </div>
    );
}

export default ColumnContainer;
