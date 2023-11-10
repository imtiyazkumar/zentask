/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import axios from "axios";
import { PickRequired } from "../../App.d";
import { TApiSuccessResponse } from "../types";
import { INotificationDTO } from "./notificationTypes";

const getAll = async ({ type }: PickRequired<INotificationDTO, "type">) => {
    return (await axios.post("notifications/" + type)).data as TApiSuccessResponse;
};

const markAllRead = async () => {
    return (await axios.post("notifications/mark-all-read")).data as TApiSuccessResponse;
};

const markRead = async ({ id }: PickRequired<INotificationDTO, "id">) => {
    return (await axios.post("notifications/mark-read/" + id)).data as TApiSuccessResponse;
};

const markUnread = async ({ id }: PickRequired<INotificationDTO, "id">) => {
    return (await axios.post("notifications/mark-unread/" + id)).data as TApiSuccessResponse;
};

const destroy = async ({ id }: PickRequired<INotificationDTO, "id">) => {
    return (await axios.delete("notifications/" + id)).data as TApiSuccessResponse;
};

export default {
    getAll,
    markAllRead,
    markRead,
    markUnread,
    destroy,
};
