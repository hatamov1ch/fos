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
  padding: 5rem 0 10rem;
  justify-content: space-between;
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
`;

export const Main = styled.div`
  width: 45%;
  order: -1;

  h2 {
    font-size: 6.5rem;
    margin-bottom: 0.25em;
  }

  p {
    line-height: 1.4;
    font-size: 1.9rem;
    letter-spacing: 1px;
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
