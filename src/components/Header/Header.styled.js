import styled from "styled-components";

const StyledHeader = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999999;

	.hamburger-react {
		display: none;
	}

	@media (max-width: 768px) {
		background: var(--color-dark-primary);
		position: fixed;

		.hamburger-react {
			display: block;
			color: var(--color-light-primary);
			z-index: 9999;
			right: 0;
			position: fixed;
			left: 90%;
		}
	}
`;

export const Content = styled.div`
	padding-top: 5rem;

	@media (max-width: 768px) {
		padding: 1rem 0;
	}
`;

export const Navigation = styled.div`
	display: flex;

	ul {
		list-style: none;
		display: flex;

		li {
			margin-right: 3.125em;
			cursor: pointer;
			font-size: 1.8rem;
		}
	}

	@media (max-width: 768px) {
		transition: var(--transition-primary) linear;
		background: var(--color-dark-primary);
		overflow: hidden;
		height: ${({ isMobile }) => (isMobile ? "100%" : "0")};
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;

		ul {
			flex-direction: column;
			margin: auto;

			li {
				font-size: 2.2rem;
				margin: 1em 0;
				text-align: center;
			}
		}
	}
`;

export const Link = styled.span`
	font-size: inherit;
	font-weight: 500;
	color: var(--color-light-primary);
	letter-spacing: 0.2rem;
`;

export default StyledHeader;
