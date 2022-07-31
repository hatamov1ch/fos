import styled, { keyframes } from "styled-components";

// Images
import backgroundImage from "../../assets/images/site/luxury-and-modern.jpg";

// Animations
const scrollBottomAnimation = keyframes`
	from {
		opacity: .5;
		transform: translate(-50%, -.5rem) scale(.95);
	}
	to {
		opacity: .75;
		transform: translate(-50%, .5rem) scale(1);
	}
`;

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

  @media (max-width: 1100px) {
    height: auto;
    padding: 0 0 7.5rem;
  }
`;

export const Content = styled.div`
  min-height: inherit;
  padding-top: 15rem;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1050px) {
    flex-direction: column;
    padding-top: 12.5srem;
  }
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  color: var(--color-light-secondary);
  width: 75%;

  // Title
  h1 {
    font-size: 10rem;
    font-size: clamp(3.55rem, 5vw, 10rem);
    font-weight: 300;
    text-indent: -0.6rem;
    margin-bottom: 0.25em;

    @media (max-width: 1200px) {
      text-indent: unset;
    }

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

    @media (max-width: 1200px) {
      padding: 1.25em 1.75em;
    }
  }

  @media (max-width: 1100px) {
    width: 65%;
  }

  @media (max-width: 1050px) {
    width: 100%;
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

export const ScrollBottom = styled.span`
  fill: var(--color-light-primary);
  color: var(--color-light-primary);
  width: 3.5rem;
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 3.5rem;
  transform: translateX(-55%);
  opacity: 0.5;
  animation: ${scrollBottomAnimation} 1s ease-in-out infinite alternate;
  cursor: pointer;

  &:hover {
    animation-play-state: paused;
  }
`;

export default StyledBanner;