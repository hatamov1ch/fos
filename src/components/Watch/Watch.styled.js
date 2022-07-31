import styled, { keyframes } from "styled-components";

const StyledWatch = styled.div`
  color: var(--color-light-secondary);

  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const VideoContainer = styled.div`
  width: 50%;
  height: 40rem;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(50, 50, 50, 0.99);
    left: 0;
    top: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 35%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
    margin-top: 5rem;
  }
`;

export const Main = styled.div`
  width: 45%;
  order: -1;

  h2 {
    font-size: clamp(4.2rem, 5vw, 5.2rem);
    margin-bottom: 0.25em;
  }

  p {
    font-size: 1.6rem;
    max-width: 60ch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.extraLarge}) {
    font-size: clamp(3.5rem, 4vw, 4.2rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 65%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }
`;

const AnimatePlayIcon = keyframes`
  from {
	  opacity: .75;
    transform: scale(.9) translate(-50%, -70%);
  }

  to {
		opacity: 1;
    transform: scale(1.01) translate(-50%, -50%);
  }
`;

export const Icon = styled.i`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 7.5rem;
  height: 7.5rem;
  color: var(--color-light-primary);
  fill: var(--color-light-primary);
  animation: ${AnimatePlayIcon} 750ms ease-in-out infinite alternate;
  cursor: pointer;
  transition: var(--transition-primary);
  backface-visibility: hidden;
`;

export default StyledWatch;