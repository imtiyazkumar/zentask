// import React, { useMemo, useState } from "react";
// import ColumnContainer from "./ColumnContainer";
// import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
// import { SortableContext, arrayMove } from "@dnd-kit/sortable";
// import { createPortal } from "react-dom";
// import TaskCard from "./TaskCard";
// import { IContainer, IOrganization, ITask } from "./types";
// import { Div, Flex } from "./BaseComponents";
// import Button from "./Button";
// import { defaultTasks, organization } from './DefaultValues';

// const defaultCols: IContainer[] = [
//     {
//         key: "todo",
//         title: "Todo",
//     },
//     {
//         key: "doing",
//         title: "Work in progress",
//     },
//     {
//         key: "done",
//         title: "Done",
//     },
// ];

// // const defaultTasks: ITask[] = [
// //     {
// //         id: "1",
// //         columnId: "todo",
// //         content: "List admin APIs for dashboard",
// //     },
// //     {
// //         id: "2",
// //         columnId: "todo",
// //         content:
// //             "Develop user registration functionality with OTP delivered on SMS after email confirmation and phone number confirmation",
// //     },
// //     {
// //         id: "3",
// //         columnId: "doing",
// //         content: "Conduct security testing",
// //     },
// //     {
// //         id: "4",
// //         columnId: "doing",
// //         content: "Analyze competitors",
// //     },
// //     {
// //         id: "5",
// //         columnId: "done",
// //         content: "Create UI kit documentation",
// //     },
// //     {
// //         id: "6",
// //         columnId: "done",
// //         content: "Dev meeting",
// //     },
// //     {
// //         id: "7",
// //         columnId: "done",
// //         content: "Deliver dashboard prototype",
// //     },
// //     {
// //         id: "8",
// //         columnId: "todo",
// //         content: "Optimize application performance",
// //     },
// //     {
// //         id: "9",
// //         columnId: "todo",
// //         content: "Implement data validation",
// //     },
// //     {
// //         id: "10",
// //         columnId: "todo",
// //         content: "Design database schema",
// //     },
// //     {
// //         id: "11",
// //         columnId: "todo",
// //         content: "Integrate SSL web certificates into workflow",
// //     },
// //     {
// //         id: "12",
// //         columnId: "doing",
// //         content: "Implement error logging and monitoring",
// //     },
// //     {
// //         id: "13",
// //         columnId: "doing",
// //         content: "Design and implement responsive UI",
// //     },
// // ];

// enum ActiveItem {
//     Task = "Task",
//     Container = "Container"
// }
// export interface IOrganization {
//     key: string;
//     title: string;
//     manager: string; //Author
//     columns: Array<string>;
//     tasks: Array<string>;
//     members: Array<string>;
//     labels: Array<string>
// }


// function KanbanBoard() {

//     const swapStrings = (array: string[], string1: string, string2: string): string[] => {
//         const index1 = array.indexOf(string1);
//         const index2 = array.indexOf(string2);

//         if (index1 === -1 || index2 === -1) {
//             console.log("One or both of the provided strings are not in the array.");
//             return [...array]; // Return a copy of the original array if strings are not found
//         }

//         // Swap the strings using destructuring assignment
//         [array[index1], array[index2]] = [array[index2], array[index1]];

//         return array;
//     };
//     const [columns, setColumns] = useState<IContainer[]>(defaultCols);
//     // const columnsId = useMemo(() => columns.map((col) => col.key), [columns]);
//     const [Organization, setOrganization] = React.useState(organization)

//     console.log("before", organization.containers)

//     const [tasks, setTasks] = useState<ITask[]>(defaultTasks);

//     const [activeColumn, setActiveColumn] = useState<IContainer | null>(null);

//     const [activeTask, setActiveTask] = useState<ITask | null>(null);

//     const sensors = useSensors(
//         useSensor(PointerSensor, {
//             activationConstraint: {
//                 distance: 10,
//             },
//         })
//     );

//     return (
//         <DndContext sensors={sensors} onDragStart={onDragStart} onDragOver={onDragOver} onDragEnd={onDragEnd} >
//             <Flex className="h-full p-5 overflow-x-auto">
//                 <Div className="flex gap-4 m-auto">
//                     <Div className="flex gap-4">
//                         <SortableContext items={Organization.containers}>
//                             {Organization.containers.map((col) => (
//                                 <ColumnContainer
//                                     key={col}
//                                     containerKey={col}
//                                     organization={organization}
//                                 />
//                             ))}
//                         </SortableContext>
//                     </Div>
//                     <Button variant="dark_outlined" onClick={createNewColumn}> + Add Column</Button>
//                 </Div>
//             </Flex>
//         </DndContext>
//     );




//     // function createTask(columnId: Id) {
//     //     const newTask: ITask = {
//     //         key: generateId(),
//     //         columnId,
//     //         content: `Task ${tasks.length + 1}`,
//     //     };

//     //     setTasks([...tasks, newTask]);
//     // }

//     // function deleteTask(id: Id) {
//     //     const newTasks = tasks.filter((task) => task.key !== id);
//     //     setTasks(newTasks);
//     // }

//     // function updateTask(id: Id, content: string) {
//     //     const newTasks = tasks.map((task) => {
//     //         if (task.key !== id) return task;
//     //         return { ...task, content };
//     //     });

//     //     setTasks(newTasks);
//     // }




//     function createNewColumn() {
//         const columnToAdd: IContainer = {
//             key: generateId(),
//             title: `Column ${columns.length + 1}`,
//         };

//         setColumns([...columns, columnToAdd]);
//     }

//     // function deleteColumn(id: Id) {
//     //     const filteredColumns = columns.filter((col) => col.key !== id);
//     //     setColumns(filteredColumns);

//     //     const newTasks = tasks.filter((t) => t.columnId !== id);
//     //     setTasks(newTasks);
//     // }

//     // function updateColumn(id: Id, title: string) {
//     //     const newColumns = columns.map((col) => {
//     //         if (col.key !== id) return col;
//     //         return { ...col, title };
//     //     });

//     //     setColumns(newColumns);
//     // }

//     function onDragStart(event: DragStartEvent) {
//         if (event.active.data.current?.type === "Container") {
//             setActiveColumn(event.active.data.current.container);
//             return;
//         }
//         if (event.active.data.current?.type === "Task") {
//             setActiveTask(event.active.data.current.task);
//             return;
//         }
//     }

//     function onDragEnd(event: DragEndEvent) {
//         // setActiveColumn(null);
//         // setActiveTask(null);

//         const { active, over } = event;
//         if (!over) return;

//         const activeId = active.id;
//         const overId = over.id;

//         if (activeId === overId) return;

//         const isActiveAColumn = active.data.current?.type === "Column";
//         if (!isActiveAColumn) return;

//         // console.log("DRAG END");

//         // setColumns((columns) => {
//         //     const activeColumnIndex = columns.findIndex((col) => col.key === activeId);

//         //     const overColumnIndex = columns.findIndex((col) => col.key === overId);

//         //     return arrayMove(columns, activeColumnIndex, overColumnIndex);
//         // });
//     }

//     function onDragOver(event: DragOverEvent) {
//         const { active, over } = event;
//         console.log("active,over", active, over)
//         if (!over) return;

//         const activeId = active.id;
//         const overId = over.id;

//         if (activeId === overId) return;

//         const isActiveATask = active.data.current?.type === "Task";
//         const isOverATask = over.data.current?.type === "Task";

//         const isActiveAContainer = active.data.current?.type === "Container";
//         const isOverAContainer = over.data.current?.type === "Container";

//         // console.log("isActiveATask", isActiveATask, isOverATask)
//         console.log("isOverAContainer", isActiveAContainer, isOverAContainer)


//         if (isActiveAContainer && isOverAContainer) {
//             const newContainers = swapStrings(organization.containers, active.id as string, over.id as string);
//             console.log("/after", organization.containers)
//             setOrganization((org) => ({ ...org, containers: newContainers }))
//         }

//         if (isActiveATask && isOverATask) {
//             const newTasks = swapStrings(organization.tasks, active.id as string, over.id as string);
//             // console.log("newContainers", organization.tasks)
//             setOrganization((org) => ({ ...org, tasks: newTasks }))
//         }
//         // console.log("after", organization.tasks)


//         // Im dropping a Task over another Task
//         if (isActiveATask && isOverATask) {
//             setTasks((tasks) => {
//                 const activeIndex = tasks.findIndex((t) => t.key === activeId);
//                 const overIndex = tasks.findIndex((t) => t.key === overId);

//                 if (tasks[activeIndex].columnId != tasks[overIndex].columnId) {
//                     tasks[activeIndex].columnId = tasks[overIndex].columnId;
//                     return arrayMove(tasks, activeIndex, overIndex - 1);
//                 }

//                 return arrayMove(tasks, activeIndex, overIndex);
//             });
//         }

//         const isOverAColumn = over.data.current?.type === "Column";

//         // Im dropping a Task over a column
//         if (isActiveATask && isOverAColumn) {
//             setTasks((tasks) => {
//                 const activeIndex = tasks.findIndex((t) => t.key === activeId);

//                 tasks[activeIndex].columnId = overId;
//                 console.log("DROPPING TASK OVER COLUMN", { activeIndex });
//                 return arrayMove(tasks, activeIndex, activeIndex);
//             });
//         }
//     }
// }



// function generateId() {
//     /* Generate a random number between 0 and 10000 */
//     return Math.floor(Math.random() * 10001);
// }

// export default KanbanBoard;
