import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	:root {
		// Colors
		--color-dark-primary: #1c1c1c;
		--color-dark-secondary: #333333;
		--color-global: #4d5156;
		--color-light-primary: #ffffff;
		--color-light-secondary: #fafafa;
		--color-light-tertiary: #eeeeee;
		--color-accent: yellow;

		// Gradients
		--gradient-accent: linear-gradient(315deg, rgb(251, 176, 52), rgb(255, 221, 0) 74%);

		// Background Images
		--background-banner: "";

		// Font Families
		--ff-primary: "Montserrat";

		// Transitions
		--transition-primary: 300ms;
		--transition-secondary: 500ms;
	}	

	html {
		font-size: 62.5%;
	}

	html, body {
		min-height: 100%;
	}

	 *,
	 *::before,
	 *::after {
	 	margin: 0;
	 	padding: 0;
	 	box-sizing: border-box;
	 }

	 body {
	 	color: var(--color-global);
	 	font-family: var(--ff-primary), sans-serif;
	 	font-weight: 400;
	 	font-style: normal;
	 	font-size: 1.6rem;
	 }

	 h1,
	 h2,
	 h3 {
	 	line-height: 1.25;
	 }

	 p {
	 	line-height: 1.6;
	 }

	 address {
	 	font-style: inherit;
	 }

	 a {
	 	color: inherit;
	 }

	 input {
	 	font-size: inherit;
	 	font-family: inherit;
	 	font-weight: inherit;
	 	font-style: inherit;
	 }

	 button {
	 	border: 0;
	 }

	 img {
	 	width: 100%;
	 	display: block;
	 }
`;

export const Container = styled.div`
	width: 100%;
	max-width: 150rem;
	margin: 0 auto;
`;

export default GlobalStyles;
