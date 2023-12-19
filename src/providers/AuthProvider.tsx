/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */


import React from "react";
// import { getAuthToken, setAuthToken } from "../services/authService";
import { ReactChildren } from "../App.d";

type IProps = ReactChildren

export interface IAuthContext {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    clearToken: () => void;
}

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<IProps> = ({ children }) => {
    // const [token, setToken] = React.useState(getAuthToken());
    const [token, setToken] = React.useState("abc");


    const clearToken = () => setToken("");

    React.useLayoutEffect(() => {
        // setAuthToken(token);
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

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => React.useContext(AuthContext);
