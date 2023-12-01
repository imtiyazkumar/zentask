import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Id, Task } from "./types";
import { Div, Flex, Img } from "./BaseComponents";
import { IconMenu } from "@tabler/icons-react";

interface Props {
    task: Task;
    deleteTask: (id: Id) => void;
    updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task }: Props) {

    const { setNodeRef, attributes, listeners, transform, transition, isDragging, } = useSortable({ id: task.id, data: { type: "Task", task } });
    const style = { transition, transform: CSS.Transform.toString(transform) };

    if (isDragging) {
        return (
            <div ref={setNodeRef} style={style} className=" p-2 h-[100px] min-h-max items-center flex rounded-md border border-primary cursor-grab" />
        );
    }

    return (
        <div ref={setNodeRef} style={style}{...attributes}{...listeners} className="p-2 bg-orange-200 rounded-md cursor-grab" >
            <Flex className="gap-3 pb-1">
                <Div className="bg-red-500 h-[10px] w-12 rounded-md"></Div>
                <Div className="bg-red-500 h-[10px] w-12 rounded-md"></Div>
                <Div className="w-6 h-6 p-1 ml-auto bg-blue-500 rounded-full cursor-pointer hover:flex"><IconMenu size={15} /></Div>
            </Flex>
            <Div className="py-1 text-justify text-14">{task.content}</Div>
            <Flex className="justify-end gap-2">
                {/* {<> */}
                <Img className="rounded-full w-[25px] h-[25px]" src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais" />
                <Img className="rounded-full w-[25px] h-[25px]" src="https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais" />
                {/* </>
                } */}
            </Flex>
        </div>
    );
}

export default TaskCard;
