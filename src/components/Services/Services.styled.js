import styled from "styled-components";

const StyledServices = styled.div`
  color: var(--color-light-secondary);
`;
export const Content = styled.div`
  padding: 2rem 0;

  header {
    transform: translateY(-17.5%);
    margin-bottom: 17.5rem;

    h2 {
      font-size: 7.5rem;
      margin-bottom: 0.45em;
    }

    p {
      max-width: 75ch;
    }
  }
`;
export const ListOfServices = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
export const Service = styled.li`
  width: 28.5%;
  position: relative;
  transform: translateX(10%);

  img {
    width: 85%;
    top: 0;
    left: 50%;
    transform: translate(-70%, -35%);
    z-index: -1;
    position: absolute;
    box-shadow: 0 5px 30px rgba(35, 35, 35, 0.5);
  }

  .service-body {
    background: rgba(50, 50, 50, 0.95);
    padding: 2.5em 1.5em;
    border-radius: var(--radius-primary);
    box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.5);
    color: var(--color-light-primary);
    cursor: pointer;
    transition: 400ms ease-in-out;
    backface-visibility: hidden;
    position: relative;

    &__number {
      bottom: 0;
      right: 3rem;
      font-size: 17.5rem;
      position: absolute;
      opacity: 0.03;
    }

    &:hover::after {
      opacity: 1;
      transform: scale(1);
    }

    &::after {
      content: "";
      display: block;
      transition: 500ms ease-in-out;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.15);
      z-index: -1;
      transform: scale(0);
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
    }

    &:hover {
      background: rgba(200, 200, 200, 0.9);
      color: var(--color-dark-secondary);
      transform: scale(1.05) translateY(-3rem);
    }

    h3 {
      margin-bottom: 0.75em;
      font-size: 2.25rem;
      letter-spacing: 1px;
    }

    h3,
    .price {
      font-weight: 700;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 2.5em;
      max-width: 40ch;
    }

    .price-container {
      text-align: center;
      font-size: 3.2rem;
      margin-bottom: 1.25em;

      .price {
        font-size: 5.2rem;
        margin-left: 1.5rem;
      }
    }
  }
`;

export default StyledServices;
