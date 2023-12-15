export type Id = string | number;

export type IContainer = {
    key: Id;
    title: string;
};

export interface ITask {
    key?: Id;
    content: string;
    created_at?: string;
    containerId: Id;
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
}

export interface IOrganization {
    key: string;
    title: string;
    manager: string; //Author
    containers: Array<string>;
    tasks: Array<Id>;
    members: Array<string>;
    labels: Array<string>
}

export enum DropdownType {
    Members = "members",
    Labels = "labels"
}
