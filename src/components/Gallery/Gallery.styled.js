import styled from "styled-components";

export const StyledGallery = styled.div``;

export const Content = styled.div`
  padding: 10rem 0;

  h2 {
    font-size: 7.5rem;
    font-size: clamp(3.75rem, 10vw, 7.5rem);
    color: var(--color-light-secondary);
    margin-bottom: 0.5em;
  }

  p {
    max-width: 65ch;
    color: var(--color-light-secondary);
  }

  @media (max-width: 1000px) {
    padding: 5rem 0;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -2.5rem;
  margin-top: 5rem;

  @media (max-width: 700px) {
    margin: 2.5rem 0;
  }
`;

export const ImageWrapper = styled.div`
  width: calc((100% / 3) - 5rem);
  height: 32.5rem;
  margin: 2.5rem;
  overflow: hidden;
  cursor: pointer;
  border: 1rem solid rgba(75, 75, 75, 0.75);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  &:hover img {
    transform: scale(1.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 500ms ease-in-out;
  }

  @media (max-width: 1000px) {
    width: calc((100% / 2) - 5rem);
  }

  @media (max-width: 700px) {
    width: 100%;
    margin: 2.5rem auto;
    min-height: 45rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default StyledGallery;