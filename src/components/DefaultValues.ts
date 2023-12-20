/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { IContainer, ILabel, ITask, IUser, Id, } from "./types";

export enum Labels {
    Bug = "bug",
    Feature = "feature",
    Urgent = "urgent",
    Warning = "warning",
    Study = "study"
}

export const defaultMembers: IUser[] = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        key: "key1",
        orgId: "org1",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
    {
        firstName: "Imtiyaz",
        lastName: "Ahmad",
        email: "john.doe@example.com",
        key: "key9",
        orgId: "org1",
        profileImage: "https://media.licdn.com/dms/image/D4D03AQFUTu_HflUpoA/profile-displayphoto-shrink_200_200/0/1694194830742?e=1708560000&v=beta&t=gXANxvCHb5Tt02SjK4loBcGygrmCBDZIVWfJu2MQHKg"
    }, {
        firstName: "Junaid",
        lastName: "Khan",
        email: "john.doe@example.com",
        key: "key10",
        orgId: "org1",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        key: "key2",
        orgId: "org2",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        key: "key3",
        orgId: "org3",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
    {
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob.johnson@example.com",
        key: "key4",
        orgId: "org4",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
    {
        firstName: "Eva",
        lastName: "Williams",
        email: "eva.williams@example.com",
        key: "key5",
        orgId: "org5",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
    {
        firstName: "Chris",
        lastName: "Anderson",
        email: "chris.anderson@example.com",
        key: "key6",
        orgId: "org1",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
    {
        firstName: "Sara",
        lastName: "Taylor",
        email: "sara.taylor@example.com",
        key: "key7",
        orgId: "org7",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
    {
        firstName: "Michael",
        lastName: "Brown",
        email: "michael.brown@example.com",
        key: "key8",
        orgId: "org1",
        profileImage: "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701388800&semt=ais"
    },
];

export const defaultLabels: ILabel[] = [
    { title: Labels.Bug, key: "label1", backGround: "bg-cyan-950", orgId: "org1" },
    { title: Labels.Urgent, key: "label2", backGround: "bg-red-600", orgId: "org1" },
    { title: Labels.Feature, key: "label3", backGround: "bg-purple-600", orgId: "org1" },
    { title: Labels.Warning, key: "label4", backGround: "bg-yellow-600", orgId: "org1" },
    { title: Labels.Study, key: "label15", backGround: "bg-green-600", orgId: "org1" },
];

export const defaultTasks: ITask[] = [
    {
        key: "task1",
        content: "Implement user authentication and authorization 1",
        created_at: new Date(),
        containerId: "container1",
        labels: ["label1", "label2"],
        members: ["key1", "key9"],
        serialNumber: 1,
        orgId: "org1"
    },
    {
        key: "task2",
        content: "Create API endpoints for data retrieval 2",
        created_at: new Date(),
        containerId: "container2",
        labels: ["label2", "label3"],
        members: ["key10", "key9"],
        serialNumber: 2,
        orgId: "org1",
    },
    {
        key: "task3",
        content: "Optimize database queries for better performance 3",
        created_at: new Date(),
        containerId: "container3",
        labels: ["label4", "label5"],
        members: ["key9", "key1"],
        serialNumber: 3,
        orgId: "org1"
    },
    {
        key: "task4",
        content: "these are contents of task with task key 4",
        created_at: new Date(),
        containerId: "container3",
        labels: ["label4", "label5"],
        members: ["key9", "key1"],
        serialNumber: 4,
        orgId: "org1"
    },
    {
        key: "task5",
        content: "these are contents of task with task key 5",
        created_at: new Date(),
        containerId: "container3",
        labels: ["label4", "label5"],
        members: ["key1", "key10"],
        serialNumber: 5,
        orgId: "org1"
    }
];

export const defaultContainers: IContainer[] = [
    {
        key: "container1",
        title: "Todo",
        orgId: "org1",
        serialNumber: 1
    },
    {
        key: "container2",
        title: "Work in progress",
        orgId: "org1",
        serialNumber: 2
    },
    {
        key: "container3",
        title: "Done",
        orgId: "org1",
        serialNumber: 3
    },
];

export const getTasks = (containerId: Id) => {
    const container3Tasks = defaultTasks
        .filter(task => task.containerId === containerId)
        .sort((task1, task2) => task2.serialNumber - task1.serialNumber)
    return container3Tasks;
};

export const getContainers = (orgId: string) => {
    const orgContainers = defaultContainers
        .filter(container => container.orgId === orgId)
        .sort((task1, task2) => task2.serialNumber - task1.serialNumber)
    return orgContainers;
};

export const getLabels = (orgId: string) => {
    const orgLabels = defaultLabels
        .filter(label => label.orgId === orgId)
    return orgLabels;
};

export const getMembers = (orgId: string) => {
    const orgLabels = defaultMembers
        .filter(member => member.orgId === orgId)
    return orgLabels;
};

export const getLabelsByKeys = (keysToFilter: Array<string>) => {
    return defaultLabels.filter(label => keysToFilter.includes(label.key));
};

export const getMembersByKeys = (keysToFilter: Array<string>) => {
    return defaultMembers.filter(member => keysToFilter.includes(member.key));
};

export const getTaskKey = () => {
    return "task" + defaultTasks.length + 2;
}
export const getTaskSerial = () => {
    return defaultTasks.length + 2;
}

export const getContainerKey = () => {
    return "container" + defaultContainers.length + 2;
}
export const getContainerSerial = () => {
    return defaultContainers.length + 2;
}
