import styled from "styled-components";

const StyledAbout = styled.div`
  color: var(--color-light-secondary);
`;

export const Content = styled.div`
  padding: 10rem 0;
`;

export const Row = styled.div`
  &:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const List = styled.div`
  width: 30%;
  list-style: none;

  li {
    margin-bottom: 4em;

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      margin-bottom: 0.75em;
      padding-bottom: 2rem;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 50%;
        height: 0.1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--color-beige);
        border-radius: var(--radius-primary);
      }
    }

    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 30%;

      h3 {
        font-size: clamp(2rem, 4vw, 2.2rem);
        margin-bottom: 0.35em;
        padding-bottom: 0.75em;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    order: 2;
    margin-top: 5rem;

    li {
      width: 100%;
    }
  }
`;

export const ImageWrapper = styled.div`
  border: 2.5rem solid rgba(50, 50, 50, 0.9);
  width: 25%;
  position: relative;
  overflow: hidden;

  @media (max-width: 1100px) {
    width: 40%;
  }

  @media (max-width: 700px) {
    width: 100%;
    order: 1;
  }
`;

export const Main = styled.div`
  width: 32.5%;

  h2 {
    font-size: 5.2rem;
    margin-bottom: 0.75em;

    @media (max-width: 1375px) {
      font-size: clamp(4rem, 4vw, 5.2rem);
      margin-bottom: 0.35em;
    }
  }

  p {
    margin-bottom: 2.5em;
  }

  [role="button"] {
    border: 0.2rem solid var(--color-light-secondary);
    padding: 1.25em 3em;

    &:hover {
      background: var(--color-dark-secondary);
    }
  }

  @media (max-width: 1100px) {
    width: 55%;
  }

  @media (max-width: 700px) {
    width: 100%;
    order: -1;
    margin-bottom: 5em;
  }
`;

export const CompanyName = styled.span`
  text-transform: capitalize;
  text-decoration: underline;
  font-weight: 500;
`;

export default StyledAbout;