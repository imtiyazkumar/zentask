export enum AppRoutes {
    Dashboard = "/",

    Auth = "/auth",
    SignIn = "/auth/sign-in",
    SignUp = "/auth/sign-up",
    ResetPassword = "/auth/reset",
    RequestResetPassword = "/auth/request-reset",

    Profile = "/profile/:id",
    ProfileEditor = "/profile-editor/:id",

    Organization = "/organization/:id",
    Members = "/members/:id",

    Users = "/admin/users",
    Organizations = "/admin/organizations",
}

export const RouteDefinitions = [
    { key: AppRoutes.Dashboard, label: "Dashboard", showInSidebar: true },

    { key: AppRoutes.SignIn, label: "Sign In" },
    { key: AppRoutes.SignUp, label: "Sign Up" },
    { key: AppRoutes.ResetPassword, label: "Reset" },
    { key: AppRoutes.RequestResetPassword, label: "Request Reset Password" },

    { key: AppRoutes.Profile, label: "My Profile" },
    { key: AppRoutes.ProfileEditor, label: "Profile Editor" },

    { key: AppRoutes.Organization, label: "Organization", showInSidebar: true },
    { key: AppRoutes.Members, label: "Members", showInSidebar: true },

    { key: AppRoutes.Users, label: "All Users", showInProfileSidebar: true },
    { key: AppRoutes.Organizations, label: "All Organizations", showInProfileSidebar: true },
];
