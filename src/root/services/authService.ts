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

export enum LocalStorage {
    AuthToken = "authToken",
}

export const initAuthToken = (token: string): void => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const setAuthToken = (token: string): void => {
    localStorage.setItem(LocalStorage.AuthToken, token);
    initAuthToken(token);
};

export const getAuthToken = (): string => localStorage.getItem(LocalStorage.AuthToken) ?? "";

export const clearAuthToken = (): void => localStorage.removeItem(LocalStorage.AuthToken);
