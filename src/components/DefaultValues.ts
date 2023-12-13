import { IContainer, ILabel, IOrganization, ITask, IUser, } from "./types";

export enum Labels {
    Bug = "bug",
    Feature = "feature",
    Urgent = "urgent",
    Warning = "warning",
    Study = "study"
}

export const allMembers: IUser[] = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        key: "key1",
        organizationId: "org1",
        profileImage: "https://example.com/profile1.jpg"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        key: "key2",
        organizationId: "org2",
        profileImage: "https://example.com/profile2.jpg"
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        key: "key3",
        organizationId: "org3",
        profileImage: "https://example.com/profile3.jpg"
    },
    {
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob.johnson@example.com",
        key: "key4",
        organizationId: "org4",
        profileImage: "https://example.com/profile4.jpg"
    },
    {
        firstName: "Eva",
        lastName: "Williams",
        email: "eva.williams@example.com",
        key: "key5",
        organizationId: "org5",
        profileImage: "https://example.com/profile5.jpg"
    },
    {
        firstName: "Chris",
        lastName: "Anderson",
        email: "chris.anderson@example.com",
        key: "key6",
        organizationId: "org6",
        profileImage: "https://example.com/profile6.jpg"
    },
    {
        firstName: "Sara",
        lastName: "Taylor",
        email: "sara.taylor@example.com",
        key: "key7",
        organizationId: "org7",
        profileImage: "https://example.com/profile7.jpg"
    },
    {
        firstName: "Michael",
        lastName: "Brown",
        email: "michael.brown@example.com",
        key: "key8",
        organizationId: "org8",
        profileImage: "https://example.com/profile8.jpg"
    },
];


export const allLabels: ILabel[] = [
    { title: Labels.Bug, key: "label1" },
    { title: Labels.Urgent, key: "label2" },
    { title: Labels.Feature, key: "label3" },
    { title: Labels.Warning, key: "label4" },
    { title: Labels.Study, key: "label15" },
]

export const defaultTasks: ITask[] = [
    {
        key: "task1",
        content: "Implement user authentication and authorization",
        created_at: new Date().toString(),
        containerId: "container1",
        labels: ["label1", "label2"],
        members: ["key1", "key2"],
    },
    {
        key: "task2",
        content: "Create API endpoints for data retrieval",
        created_at: new Date().toString(),
        containerId: "container2",
        labels: ["label2", "label3"],
        members: ["key2", "key3"],
    },
    {
        key: "task3",
        content: "Optimize database queries for better performance",
        created_at: new Date().toString(),
        containerId: "container3",
        labels: ["label4", "label5"],
        members: ["key4", "key3"],
    },
    {
        key: "task4",
        content: "these are contents of task with task key 4",
        created_at: new Date().toString(),
        containerId: "container3",
        labels: ["label4", "label5"],
        members: ["key4", "key3"],
    }
];



export const defaultContainers: IContainer[] = [
    {
        key: "container1",
        title: "Todo",
    },
    {
        key: "container2",
        title: "Work in progress",
    },
    {
        key: "container3",
        title: "Done",
    },
];

export const organization: IOrganization = {
    key: "Org1",
    title: "My Organization",
    manager: "Imtiyaz",
    containers: ["container1", "container2", "container3"],
    labels: ["label1", "label2", "label3"],
    tasks: ["task1", "task2", "task3", "task4"],
    members: ["key1", "key2", "key3"],
}
