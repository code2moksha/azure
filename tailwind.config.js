/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/index.html"],
	theme: {
		fontFamily: {
			sego: ["Segoe UI", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
		},

		screens: {
			xs: "540px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			lg1: "1080px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			"max-w-7xl": "1310px",
			transitionProperty: {
				width: "width",
			},
		},
	},
	plugins: [],
};
