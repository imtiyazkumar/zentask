/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

export enum AppRoutes {
    Dashboard = "/",

    Auth = "/auth",
    SignIn = "/auth/sign-in",
    SignUp = "/auth/sign-up",
    ResetPassword = "/auth/reset",

    Appointments = "/appointments",

    VisitHistories = "/visit-histories",

    ComponentLibrary = "/component-library",
}

export const RouteDefinitions = [
    { key: AppRoutes.Dashboard, label: "Dashboard" },

    { key: AppRoutes.SignIn, label: "Sign In" },
    { key: AppRoutes.SignUp, label: "Sign Up" },
    { key: AppRoutes.ResetPassword, label: "Reset" },

    { key: AppRoutes.Appointments, label: "Appointments" },

    { key: AppRoutes.VisitHistories, label: "Visit histories" },

    { key: AppRoutes.ComponentLibrary, label: "Component library" },
];
