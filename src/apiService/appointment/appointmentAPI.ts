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
import { IAppointmentDTO } from "./appointmentTypes";
import { IAppointment } from "../../types/appointment";

const getAll = async () => {
    return (await axios.post("appointments")).data as TApiSuccessResponse<{
        total: number;
        page: number;
        lastPage: number;
        appointments: Array<IAppointment>;
    }>;
};

const getOne = async ({ id }: PickRequired<IAppointmentDTO, "id">) => {
    return (await axios.post("appointments/" + id)).data as TApiSuccessResponse<{
        appointment: IAppointment;
    }>;
};

export default {
    getAll,
    getOne,
};
