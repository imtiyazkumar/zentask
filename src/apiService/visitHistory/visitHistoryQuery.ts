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
import { VisitHistory } from "..";
import { PickRequired } from "../../App.d";
import { IVisitHistoryDTO } from "./visitHistoryTypes";

const enum Visit_History_Query_Key {
    VisitHistory = "visitHistory",
}

const useQueryGetVisitHistory = ({ id }: PickRequired<IVisitHistoryDTO, "id">) => {
    return useQuery({
        queryKey: [Visit_History_Query_Key.VisitHistory],
        queryFn: () => VisitHistory.getOne({ id }),
    });

};

const useQueryGetVisitHistoryAll = () => {
    return useQuery({
        queryKey: [Visit_History_Query_Key.VisitHistory],
        queryFn: () => VisitHistory.getAll(),
    });

};


export default {
    useQueryGetVisitHistory,
    useQueryGetVisitHistoryAll,
};
