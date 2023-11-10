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
import { ReactChildren } from "../App.d";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultQueryOptions } from "../utils/QueryDefaults.config";
import { initializeAxios } from "./services/axiosService";

initializeAxios();

const AppWrapper: React.FC<ReactChildren> = ({ children }) => {
    const queryClient = new QueryClient({ defaultOptions: DefaultQueryOptions() });

    return (
        <React.Fragment>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </QueryClientProvider>
        </React.Fragment>
    );
};

export default AppWrapper;
