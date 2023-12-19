/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./fragments/footer/Footer";
import { ReactChildren } from "../App.d";
import { Div, Flex, FlexColumn } from "../components/General Components/BaseComponents";

const AuthLayout: React.FC<ReactChildren> = ({ children }) => {
    return (
        <FlexColumn className="w-full h-fit md:h-full">
            <Flex className="justify-center w-full py-5 border-b border-border-dark rounded-b-xl">
                <Div className="h-8 font-semibold text-primary-2 text-32 w-28">Zentask</Div>
            </Flex>
            <Flex className="flex-1 py-6 md:py-0">
                {children ?? <Outlet />}
            </Flex>
            <Footer variant="auth" />
        </FlexColumn>
    );
};
export default AuthLayout;
