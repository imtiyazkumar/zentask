export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
};

export interface ITask {
    id: Id;
    content: string;
    created_at?: string;
    columnId: Id;
    labels?: Array<string>;
    members?: Array<string>
}

export interface IUser {
    key: string;
    firstName: string;
    lastName: string;
    email: string;
    organizationId: string;
    profileImage: string;
}

export interface ILabel {
    key: string;
    title: string;
    color: string;
}

export interface IOrganization {
    key: string;
    title: string;
    manager: string;
    columns: Array<Column>;
    tasks: Array<ITask>;
    members: Array<IUser>;
    labels: Array<ILabel>
}
