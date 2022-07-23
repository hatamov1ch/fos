import styled from "styled-components";

export const StyledServices = styled.div`
  color: var(--color-light-secondary);
`;

export const Content = styled.div`
  padding: 5rem 0;
`;

export const Title = styled.h2`
  font-size: 7.2rem;
  margin-bottom: 0.5em;
`;

export const Description = styled.p`
  max-width: 75ch;
`;

export const List = styled.ul`
  margin-top: 7em;
  display: flex;
  justify-content: space-between;
  list-style: none;

  .service {
    width: 30%;
    padding: 1em;
    box-shadow: 0 5px 30px rgba(35, 35, 35, 0.75);
    border: 1px solid #333;
    border-radius: var(--radius-primary);
    text-align: center;

    img {
      height: 30rem;
      object-fit: cover;
    }

    h3 {
      margin: 1.25em 0 0.75em;
      font-size: 2.25rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export const Prices = styled.div`
  margin-top: 2em;

  h4 {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1em;
    text-align: center;

    &:hover ul {
      background: red;
    }
  }

  li {
    border-radius: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    border: 1px solid #555;
    padding: 0.75em 1em;
    background: rgba(35, 35, 35, 0.5);

    .strong {
      font-weight: 700;
      font-size: 1.75rem;
      margin-left: 0.5rem;
    }
  }
`;

export default StyledServices;
