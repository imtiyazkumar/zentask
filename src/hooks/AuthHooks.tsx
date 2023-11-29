/**
 * Project Radience
 *
 * @author      Moin Khan
 * @copyright   Stamats Communications, Inc.
 *
 * Built by Eonyx Infotech LLP.
 * @link https://eonyx.io
 *
 */

import { useAuth } from "../root/providers/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { IRouteState } from "../App.d";
import { AppRoutes } from "../routes/routes";

export const AuthenticatedRoutes = () => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.token) return <Navigate to={AppRoutes.SignIn} state={{ prev: location }} replace />;

    return <Outlet />;
};

export const UnAuthenticatedRoutes = () => {
    const auth = useAuth();
    const location = useLocation();
    const from = (location.state as IRouteState)?.prev?.pathname || null;

    if (auth.token) return <Navigate to={from || AppRoutes.Dashboard} replace />;

    return <Outlet />;
};
