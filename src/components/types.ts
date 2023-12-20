/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

export type Id = string | number | string;

export type IContainer = {
    key: Id;
    title: string;
    orgId: string,
    serialNumber: number;
};

export interface ITask {
    orgId: string,
    key: Id;
    content: string;
    created_at: Date;
    containerId: Id;
    labels?: Array<string>;
    members?: Array<string>;
    serialNumber: number;
}

export interface IUser {
    key: string;
    firstName: string;
    lastName: string;
    email: string;
    orgId: string;
    profileImage: string;
}

export interface ILabel {
    key: string;
    backGround: string;
    title: string;
    orgId: string;
}

export interface IOrganization {
    key: string;
    title: string;
    manager: string; //Author
}

export enum DropdownType {
    Members = "members",
    Labels = "labels"
}
