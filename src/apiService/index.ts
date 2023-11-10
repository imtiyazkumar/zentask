/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

import appointmentAPI from "./appointment/appointmentAPI";
import authAPI from "./auth/authAPI";
import visitHistoryAPI from "./visitHistory/visitHistoryAPI";

import authQuery from "./auth/authQuery";
import visitHistoryQuery from "./visitHistory/visitHistoryQuery";
import appointmentQuery from "./appointment/appointmentQuery";
import notificationAPI from "./notification/notificationAPI";
import notificationQuery from "./notification/notificationQuery";

export const Auth = authAPI;
export const VisitHistory = visitHistoryAPI;
export const Appointment = appointmentAPI;
export const Notification = notificationAPI;

export const AuthQuery = authQuery;
export const VisitHistoryQuery = visitHistoryQuery;
export const AppointmentQuery = appointmentQuery;
export const NotificationQuery = notificationQuery;
