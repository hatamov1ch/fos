import styled from "styled-components";
import backgroundImage from "../../assets/images/site/luxury-and-modern.jpg";

const StyledBanner = styled.div`
	background: url(${backgroundImage}) center / cover;
	min-height: 100vh;
	overflow: hidden;
	position: relative;

	// background overlay
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(110deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
`;

export const Content = styled.div`
	min-height: inherit;
	padding-top: 15rem;
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: space-between;
`;

export const Main = styled.div`
	color: var(--color-light-secondary);
	width: 75%;

	// Title
	h1 {
		font-size: 10rem;
		font-weight: 300;
		text-indent: -0.6rem;
		margin-bottom: 0.25em;

		span {
			display: block;
			font-weight: 700;
			text-transform: uppercase;
			text-shadow: 0 10px 5px rgba(0, 0, 0, 0.5);
		}
	}

	p {
		max-width: 70ch;
		color: var(--color-light-tertiary);
		margin-bottom: 5rem;
	}

	button {
		padding: 1.25em 3em;
		margin-bottom: 1.5em;
		background: transparent;
		border: 0.2rem solid var(--color-light-primary);
		color: inherit;
		letter-spacing: 2px;
		text-transform: uppercase;
		border-radius: var(--radius-primary);
		cursor: pointer;
		transition: var(--transition-primary) ease-in-out;

		&:hover {
			background: rgba(255, 255, 255, 0.5);
		}
	}
`;

export const List = styled.ul`
	list-style: none;

	li {
		margin: 1.25em 0;
		font-weight: 500;
		font-size: 1.75rem;
		overflow: hidden;
		position: relative;
	}
`;

export const Icon = styled.i`
	width: 4.2rem;
	fill: var(--color-light-secondary);
	margin-right: 0.75em;
	vertical-align: middle;
	transition: var(--transition-primary) ease-in-out;
`;

export const Form = styled.form`
	color: var(--color-light-tertiary);
	width: 40vw;
	max-width: 40rem;
	background: rgba(25, 25, 25, 0.95);
	border-radius: var(--radius-primary);
	box-shadow: 0 3px 15px rgba(0, 0, 0, 0.25);
	padding: 1em;
	border: 2px solid var(--color-light-primary);
	align-self: center;
	overflow: hidden;

	div {
		margin-bottom: 1.5em;

		&:last-child {
			margin-bottom: 0;
		}

		label {
			display: block;
			margin-bottom: 0.5em;
		}

		input {
			padding-top: 0.25em;
			padding-bottom: 0.5em;
			border-bottom: 1px solid var(--color-dark-tertiary);
		}

		textarea {
			resize: none;
			min-height: 30rem;
		}
	}

	[type="submit"] {
		font-weight: 500;
		letter-spacing: 1px;
		cursor: pointer;
		font-size: 1.4rem;
		margin-bottom: 0.5rem;

		&:hover ~ p {
			opacity: 1;
			transform: translateY(0);
			transition: var(--transition-primary);
		}
	}

	p {
		font-size: 1.4rem;
		text-align: center;
		opacity: 0;
		transform: translateY(100%);
		transition: var(--transition-primary) ease-in-out;
	}
`;

export default StyledBanner;