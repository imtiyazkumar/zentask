/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { useMutation } from "@tanstack/react-query";
import { Auth } from "..";
import { IUserDTO } from "../user/userTypes";
import { PickRequired } from "../../App.d";

const useMutationSignIn = () => {
    return useMutation({
        mutationFn: (params: PickRequired<IUserDTO, "email" | "password">) => Auth.signIn(params),
    });
};

const useMutationSignUp = () => {
    return useMutation({
        mutationFn: (params: PickRequired<IUserDTO, "email" | "password">) => Auth.signUp(params),
    });
};

const useMutationRequestResetPassword = () => {
    return useMutation({
        mutationFn: (params: PickRequired<IUserDTO, "email">) => Auth.requestResetPassword(params),
    });
};

const useMutationSignOut = () => {
    return useMutation({
        mutationFn: () => Auth.signOut(),
    });
};

export default {
    useMutationSignIn,
    useMutationSignUp,
    useMutationRequestResetPassword,
    useMutationSignOut,
};
