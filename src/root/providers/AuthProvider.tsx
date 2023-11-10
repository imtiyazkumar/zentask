/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import React from "react";
import { ReactChildren } from "../../App.d";
import { getAuthToken, setAuthToken } from "../services/authService";

type IProps = ReactChildren

export interface IAuthContext {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    clearToken: () => void;
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IProps> = ({ children }) => {
    const [token, setToken] = React.useState(getAuthToken());

    const clearToken = () => setToken("");

    React.useEffect(() => {
        setAuthToken(token);
    }, [token]);

    const AuthContextValue: IAuthContext = {
        token,
        setToken,
        clearToken,
    };

    return (
        <AuthContext.Provider value={AuthContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext);
