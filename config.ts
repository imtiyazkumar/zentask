/**
 * Project Zentask-Web
 *
 * @author      Imtiyaz Ahmad
 * @copyright   https://github.com/imtiyazkumar
 *
 * @link https://github.com/imtiyazkumar/zentask-web
 *
 */

let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

if (timezone == "Asia/Calcutta") {
    timezone = "Asia/Kolkata";
}

const config = {
    apiBase: import.meta.env.VITE_API_BASE as string || "http://127.0.0.1:8000/api/",
    timezone: timezone,
    device_name: "Browser",
};

export default config;
