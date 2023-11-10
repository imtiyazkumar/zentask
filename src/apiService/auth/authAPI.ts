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
import { IUserDTO } from "../user/userTypes";

const signIn = async ({ email, password }: PickRequired<IUserDTO, "email" | "password">) => {
    return (await axios.post("auth/sign-in", { email, password })).data as TApiSuccessResponse<{
        token: string;
        me: string;
    }>;
};

const signUp = async ({ email, password }: PickRequired<IUserDTO, "email" | "password">) => {
    return (await axios.post("auth/sign-up", { email, password })).data as TApiSuccessResponse<{
        token: string;
        me: string;
    }>;
};

const requestResetPassword = async ({ email }: PickRequired<IUserDTO, "email">) => {
    return (await axios.post("auth/request-reset-password", { email })).data as TApiSuccessResponse<{
        vc_id: string;
    }>;
};

const signOut = async () => {
    return (await axios.post("auth/sign-out")).data as TApiSuccessResponse;
};

export default {
    signIn,
    signUp,
    requestResetPassword,
    signOut
};
