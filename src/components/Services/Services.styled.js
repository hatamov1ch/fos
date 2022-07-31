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

      @media (max-width: 1375px) {
        font-size: clamp(3.75rem, 5vw, 7.5rem);
      }
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
  flex-wrap: wrap;
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
        font-size: clamp(3.5rem, 3vw, 5.2rem);
        margin-left: 1.5rem;
      }
    }
  }

  @media (max-width: 1500px) {
    transform: none;
    width: 29.5%;

    .service-body {
      padding: 2.2em 1em;

      h3 {
        font-size: clamp(1.75rem, 1.5vw, 2.1rem);
      }
    }
  }

  @media (max-width: 1050px) {
    width: 47.5%;

    img {
      object-fit: cover;
      transform: translateX(-50%) translateY(-50%);
    }

    .service-body {
      h3 {
        font-size: clamp(2rem, 2vw, 2.25rem);
      }
    }

    &:nth-of-type(1) {
      width: 100%;
      margin-bottom: 20rem;

      img {
        width: 80%;
        height: 100%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 25rem !important;

    .service-body {
      h3 {
        font-size: clamp(1.75rem, 5vw, 3.2rem);
      }
    }

    &:last-of-type {
      margin-bottom: 0 !important;
    }

    img {
      width: 80%;
      height: 100%;
      transform: translateX(-50%) translateY(-50%);
    }
  }
`;

export default StyledServices;