export type Id = string | number;

export type Column = {
    id: Id;
    title: string;
};

export interface IProfile {
    id: string;
    name: string;
    email: string;
    organizationId: string
}

export interface ITask {
    id: Id;
    content: string;
    created_at?: string;
    columnId: Id;
    labels?: Array<string>;
    members?: Array<IProfile>
}
