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
import { IVisitHistoryDTO } from "./visitHistoryTypes";
import { PickRequired } from "../../App.d";
import { TApiSuccessResponse } from "../types";
import { IVisitHistory } from "../../types/visitHistory";

const getAll = async () => {
    return (await axios.post("visit-history")).data as TApiSuccessResponse<{
        total: number;
        page: number;
        lastPage: number;
        visit_histories: Array<IVisitHistory>;
    }>;
};

const getOne = async ({ id }: PickRequired<IVisitHistoryDTO, "id">) => {
    return (await axios.post("visit-history/" + id)).data as TApiSuccessResponse<{
        "visit_history": IVisitHistory;
    }>;
};

export default {
    getAll,
    getOne,
};
