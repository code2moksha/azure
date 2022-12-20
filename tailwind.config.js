/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/index.html"],
	important: true,
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
			backgroundImage: {
				section1: "url('../ez-optimize-desktop.jpeg')",
			},
			boxShadow: {
				card1: "0 2px 5px rgb(0 0 0 / 14%)",
				card2: "0 5px 10px rgb(0 0 0 / 14%)",
				header: "0 0 8px -1px rgb(0 0 0 / 25%)",
				wrapper: "0 10px 20px rgb(0 0 0 / 14%)",
			},
		},
	},
	plugins: [],
};
