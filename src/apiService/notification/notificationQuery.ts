/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { useMutation, useQuery } from "@tanstack/react-query";
import { Notification } from "..";
import { PickRequired } from "../../App.d";
import { INotificationDTO } from "./notificationTypes";

const enum Notification_Query_Key {
    Notification = "notification",
}

const useQueryGetNotificationAll = ({ type }: PickRequired<INotificationDTO, "type">) => {
    return useQuery({
        queryKey: [Notification_Query_Key.Notification],
        queryFn: () => Notification.getAll({ type }),
    });

};

const useMutationMarkAllRead = () => {
    return useMutation({
        mutationFn: () => Notification.markAllRead(),
    });
};

const useMutationMarkRead = () => {
    return useMutation({
        mutationFn: (params: PickRequired<INotificationDTO, "id">) => Notification.markRead(params),
    });
};

const useMutationMarkUnread = () => {
    return useMutation({
        mutationFn: (params: PickRequired<INotificationDTO, "id">) => Notification.markUnread(params),
    });
};

const useMutationDestroy = () => {
    return useMutation({
        mutationFn: (params: PickRequired<INotificationDTO, "id">) => Notification.destroy(params),
    });
};

export default {
    useQueryGetNotificationAll,
    useMutationMarkAllRead,
    useMutationMarkRead,
    useMutationMarkUnread,
    useMutationDestroy,
};
