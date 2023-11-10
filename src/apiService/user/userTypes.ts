/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { IUser } from "../../types/user";

export interface IUserDTO extends IUser {
    password: string;
    code: string;
}
