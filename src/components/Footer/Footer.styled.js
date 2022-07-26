import styled from "styled-components";

const StyledFooter = styled.div`
  background: var(--color-dark-secondary);
  color: var(--color-light-secondary);

  a {
    text-decoration: none;
  }
`;

export const Content = styled.div`
  &.content-1 {
    padding: 5rem 0;
    display: flex;
    justify-content: space-between;

    h3 {
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 1em;
    }

    h3,
    .phones__item {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &.content-2 {
    padding: 1rem 0;
    background: var(--color-dark-primary);
    border-radius: 15rem 15rem 0 0;
    text-align: center;

    .copy {
      font-size: 1.4rem;
    }

    .dev-website {
      font-weight: 500;
      text-transform: uppercase;
      opacity: 0.5;
      transition: var(--transition-primary);
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Contacts = styled.div`
  width: 30%;

  address {
    font-size: 1.5rem;
    margin-bottom: 1.5em;
    line-height: 1.5;
  }

  .phones {
	  margin-bottom: 4.2rem;
	  
    &__item {
      margin-bottom: 1em;
      display: flex;
	    align-items; center;
	    

      svg {
        width: 2rem;
        height: 2rem;
	      margin-right: .5em;
	      fill: currentcolor;
      }
    }
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;

  svg {
    fill: var(--color-light-primary);
    width: 3rem;
    height: 3rem;
    margin-right: 0.75em;
  }
`;

export const Navigation = styled.div`
  width: 30%;
`;

export const Links = styled.div`
  span {
    font-size: 1.8rem;
    display: block;
    margin-bottom: 0.75em;
    letter-spacing: 1px;
  }
`;

export const Company = styled.div`
  width: 30%;
`;

export const Socials = styled.div`
  display: flex;
  margin-top: 1.5em;

  a {
    display: flex;
    align-items: center;
    color: var(--color-light-primary);
    fill: var(--color-light-primary);
    margin-right: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    transition: var(--transition-primary);

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      opacity: 0.75;
    }
  }
`;

export default StyledFooter;
