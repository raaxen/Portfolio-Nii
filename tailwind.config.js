/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './App.tsx', './main.tsx', './components/**/*.{ts,tsx}', './Screens/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				ephesis: ['Ephesis', 'cursive'],
			},
		},
	},
	plugins: [],
};