/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { createBrowserRouter } from "react-router-dom";
import { AuthenticatedRoutes, UnAuthenticatedRoutes } from "../hooks/AuthHooks";
import { AppRoutes } from "./routes";
import MasterLayout from "../layouts/MasterLayout";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../views/Auth/SignIn";
import SignUp from "../views/Auth/SignUp";
import ResetPassword from "../views/Auth/ResetPassword";
import Dashboard from "../views/General/Dashboard";
import Organization from "../views/General/Organization";
import Members from "../views/General/Members";
import Organizations from "../views/Administration/Organizations";
import Users from "../views/Administration/Users";
import Profile from "../views/Profile/Profile";
import ProfileEditor from "../views/Profile/ProfileEditor";


const router = createBrowserRouter([
    {
        children: [
            {
                path: AppRoutes.Auth,
                element: <UnAuthenticatedRoutes />,
                children: [
                    {
                        element: <AuthLayout />,
                        children: [
                            { path: AppRoutes.SignIn, element: <SignIn />, index: true },
                            { path: AppRoutes.SignUp, element: <SignUp /> },
                            // { path: AppRoutes.RequestResetPassword, element: <RequestResetPassword /> },
                            { path: AppRoutes.ResetPassword, element: <ResetPassword /> },
                        ]
                    }
                ],
            },
            {
                path: "/",
                element: <AuthenticatedRoutes />,
                children: [
                    {
                        element: <MasterLayout />,
                        children: [
                            { path: AppRoutes.Dashboard, element: <Dashboard />, index: true },

                            { path: AppRoutes.Organization, element: <Organization /> },
                            { path: AppRoutes.Members, element: <Members /> },

                            { path: AppRoutes.Profile, element: <Profile /> },
                            { path: AppRoutes.ProfileEditor, element: <ProfileEditor /> },

                            { path: AppRoutes.Organizations, element: <Organizations /> },
                            { path: AppRoutes.Users, element: <Users /> },
                        ]
                    }
                ],
            },
        ],
        // errorElement: <AuthLayout><ErrorView code={ErrorCode.E404} /></AuthLayout>,
    },
]);

export default router;
