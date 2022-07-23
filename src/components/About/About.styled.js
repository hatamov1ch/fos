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
`;

export const ImageWrapper = styled.div`
  border: 2.5rem solid rgba(50, 50, 50, 0.9);
  width: 25%;
  position: relative;
  overflow: hidden;
`;

export const Main = styled.div`
  width: 40%;

  h2 {
    font-size: 5.2rem;
    margin-bottom: 0.75em;
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
`;

export const CompanyName = styled.span`
  text-transform: capitalize;
  text-decoration: underline;
  font-weight: 500;
`;

export default StyledAbout;
