/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            //* Background
            "bgr-main": "#F4F4FF",
            "bgr-color": "#EF6B4A",
            "bgr-color-hover": "#C2371E", // Darker for hover
            "bgr-white": "#FFFFFF",

            //* Text
            "text-normal": "#090937",
            "text-color": "#6251DD",
            "text-color-hover": "#4937B8", // Darker for hover
            "text-light": "#676787",
            "text-white": "#FFFFFF",
            "text-error": "#e74c3c",
        },
        extend: {
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
            },
        },
    },
    plugins: [],
};
