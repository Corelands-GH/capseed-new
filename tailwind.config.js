/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		// container: {
		//   center: "true",

		// },

		container: {
			center: true,
			padding: "0rem",
			screens: {
				"2xl": "1920px",
			},
		},
		extend: {
			fontFamily: {
				playfair: "Playfair Display",
				poppins: "Poppins",
				Acta: "Acta Display Book",
			},
			screens: {
				xs: "400px",
				// This is your custom breakpoint
			},
			colors: {
				primary: "#1D332D",
				secondary: "#B3BAAA",
				brand: "#758368",
			},
		},
		fontFamily: {
			sans: "Poppins",
		},
	},
	plugins: [],
};
