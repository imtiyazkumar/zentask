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
import config from "../../../config";
import { TApiErrorResponse } from "../../apiService/types";

export const initializeAxios = () => {
    axios.defaults.baseURL = config.apiBase;
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response && error.response.data && error.response.data) {
                error = {
                    apiStatus: error.response.status,
                    statusText: error.response.statusText,
                    ...error.response.data,
                } as TApiErrorResponse;
            }
            return Promise.reject(error as TApiErrorResponse);
        }
    );

};
