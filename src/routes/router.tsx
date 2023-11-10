/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import { createBrowserRouter } from "react-router-dom";
import SignIn from "../views/Auth/SignIn";
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from "../hooks/AuthHooks";
import Dashboard from "../views/Dashboard/Dashboard";
import { AppRoutes } from "./routes";
import Master from "../layouts/Master";
import Auth from "../layouts/Auth";
import ErrorView from "../views/UtilityViews/ErrorView";
import SignUp from "../views/Auth/SignUp";
import ResetPassword from "../views/Auth/ResetPassword";
import VisitHistory from "../views/VisitHistory/VisitHistory";
import Appointment from "../views/Appointment/Appointment";
import ComponentLibrary from "../views/ComponentLibrary/ComponentLibrary";

const router = createBrowserRouter([
    {
        children: [
            {
                path: AppRoutes.Auth,
                element: <UnAuthenticatedRoutes />,
                children: [
                    {
                        element: <Auth />,
                        children: [
                            { path: AppRoutes.SignIn, element: <SignIn />, index: true },
                            { path: AppRoutes.SignUp, element: <SignUp /> },
                            { path: AppRoutes.ResetPassword, element: <ResetPassword /> },
                        ]
                    }
                ],
            },
            {
                path: "/",
                element: <AuthenticatedRoutes />,
                children: [
                    { path: AppRoutes.ComponentLibrary, element: <ComponentLibrary /> },
                    {
                        element: <Master />,
                        children: [
                            { path: AppRoutes.Dashboard, element: <Dashboard />, index: true },
                            {
                                path: AppRoutes.VisitHistories,
                                children: [
                                    { element: <VisitHistory />, index: true },
                                ]
                            },
                            {
                                path: AppRoutes.Appointments,
                                children: [
                                    { element: <Appointment />, index: true },
                                ]
                            },
                        ]
                    }
                ],
            },
        ],
        errorElement: <ErrorView />,
    },
]);

export default router;
