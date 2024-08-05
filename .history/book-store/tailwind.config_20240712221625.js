/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            //* Background
            "bgr-main": "F4F4FF",
            "bgr-color": "EF6B4A",

            //* Text
            "text-normal": "090937",
            "text-color": "6251DD",
            "text-light": "676787",
        },
        extend: {},
    },
    plugins: [],
};
