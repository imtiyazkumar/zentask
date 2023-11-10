/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { EmptyObject } from "../App.d";

export type TApiSuccessResponse<T = EmptyObject> = T;

export type TApiErrorResponse = {
    apiStatus: number;
    statusText: string;
    status: string;
    message: string;
};
