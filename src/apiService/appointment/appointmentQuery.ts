/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { useQuery } from "@tanstack/react-query";
import { Appointment } from "..";
import { PickRequired } from "../../App.d";
import { IAppointmentDTO } from "./appointmentTypes";

const enum Appointment_Query_Key {
    Appointment = "appointment",
}

const useQueryVisitHistory = ({ id }: PickRequired<IAppointmentDTO, "id">) => {
    return useQuery({
        queryKey: [Appointment_Query_Key.Appointment],
        queryFn: () => Appointment.getOne({ id }),
    });

};

const useQueryVisitHistoryAll = () => {
    return useQuery({
        queryKey: [Appointment_Query_Key.Appointment],
        queryFn: () => Appointment.getAll(),
    });

};


export default {
    useQueryVisitHistory,
    useQueryVisitHistoryAll,
};
