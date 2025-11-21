/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#697565', // Sage Green (Nice Color for Buttons)
                secondary: '#3C3D37', // Dark Olive Gray
                dark: '#000000', // Solid Black
                'dark-secondary': '#000000', // Solid Black (All sections same color)
                light: '#ECDFCC', // Beige (Nice Color for Text)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
