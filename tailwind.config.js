/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                main: ["manrope", "sans-serif"]
            },
            colors: {
                primary: {
                    DEFAULT: "#043F97",
                    base: "#FA8700",
                    1: "#FA8700",
                    2: "#D57A66",
                    3: "#F2F7F5",
                    100: "#ECF8F0CC",
                    200: "#CEEFDF",
                    600: "#1C8C6E",
                },
                secondary: {
                    100: "#EDF1F3",
                    500: "#1A1C1E",
                    2: "#D57A66",
                    3: "#F2F7F5",
                    600: "#1C8C6E",
                },
                error: {
                    600: "#BE3F4A",
                    100: "#F2E7E7",
                },
                warning: {
                    600: "#DBAA00",
                    100: "#FBF4E4",
                },
                information: {
                    600: "#3D81DB",
                    100: "#DCF3FF",
                },
                text: "#20484F",
                grayscale: {
                    50: "#fafafa",
                    200: "#F1F2F4",
                    600: "#718096",
                    900: "#111827",
                },
                border: {
                    dark: "#E6E8E9",
                }
            },
            fontSize: {
                10: ["10px", "16px"],
                12: ["12px", "19px"],
                14: ["14px", "22px"],
                16: ["16px", "24px"],
                18: ["18px", "27px"],
                20: ["20px", "28px"],
                24: ["24px", "31px"],
                32: ["32px", "40px"],
                48: ["48px", "57px"],
            },
            boxShadow: {
                custom: "0px 5px 40px 0px rgba(0, 0, 0, 0.10)",
            },
        },
    },
    plugins: [],
};
