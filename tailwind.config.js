/** @type {import('tailwindcss').Config} */
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
                    DEFAULT: "#B8E4DA",
                    1: "#B8E4DA",
                    2: "#D57A66",
                    3: "#F2F7F5",
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
                },
                warning: {
                    600: "#DBAA00",
                },
                information: {
                    600: "#3D81DB",
                },
                text: "#20484F",
                dark: "#072125",
                neutral: {
                    50: "#FAFAFA",
                    300: "#EEEFF2",
                    400: "#CBD5E0",
                    600: "#718096",
                    500: "#A0AEC0",
                    800: "#1F2937",
                    900: "#111827",
                },
                labels: {
                    completed: "#ECF8F0",
                    missed: "#F2E7E7",
                    rescheduled: "#FBF4E4",
                    progress: "#DCF3FF",
                    primary: "#EDF1F3"
                },
                alerts: {
                    success_base: "#27A376",
                    success_light: "#E9FBF2",
                    error_base: "#E03137",
                    error_light: "#F8EAEA",
                    information_base: "#2F78EE"
                },
                border: {
                    dark: "#E6E8E9",
                }
            }
        },
    },
    plugins: [],
};

// Neutral/White #FFFFFF
// Neutral/50 #FAFAFA
// Neutral/300  #EEEFF2
// Neutral/600  #718096
// Neutral/500 #A0AEC0
// Neutral/800 #1F2937
// Neutral/900  #111827
// Primary/1  #B8E4DA
// Primary/2 #D57A66
// Primary/3  #F2F7F5
// Greyscale/200 #F1F2F4
// Greyscale/600 #687588
// Alerts/Error/Light  #F8EAEA
// Alerts/Success/Base  #27A376
// Alerts/Success/Light #E9FBF2
// Alerts/Information/Base #2F78EE
// Alerts/Error/Base  #E03137
// Warning/600  #DBAA00
// Text   #20484F
// Dark  #072125
// Border/Dark  #E6E8E9
// #D9D9D9
// #FBF4E4
// #FFE9E4
// #202125
// #D6DCE8
// #AAB2C5
// #EAEEF9
// #C9D4E2
