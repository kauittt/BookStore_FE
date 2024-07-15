/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            //* Background
            "bgr-main": "#F4F4FF",
            "bgr-color": "#EF6B4A", // Màu cam
            "bgr-color-hover": "#C2371E", // Darker for hover
            "bgr-white": "#FFFFFF",

            //* Text
            "text-normal": "#090937",
            "text-color": "#6251DD", // Màu tím
            "text-color-hover": "#4937B8", // Darker for hover
            "text-light": "#676787",
            "text-white": "#FFFFFF",
            "text-error": "#e74c3c", // Màu đỏ
            "text-error-hover": "#c0392b", // Darker for hover

            //* Border
            border: "#cfcfcf",
        },
        extend: {
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
            },
            boxShadow: {
                custom: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
            },
        },
    },
    plugins: [],
};
