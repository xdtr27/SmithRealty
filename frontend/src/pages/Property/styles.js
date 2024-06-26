import styled from "styled-components";

export const PropertyBase = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;
export const PropertyCard = styled.section`
  padding: 2rem;

  background-color: white;
  width: 60vw;
  border-radius: 15px;

  @media (max-width: 1280px) {
    width: 80vw;
  }

  .imageText {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1280px) {
      grid-template-columns: 1fr;
    }
  }

  /// animation
  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  animation: appear 0.5s;
`;

export const PropertyImage = styled.div`
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const PropertyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 1280px) {
    align-items: flex-start;
    margin-top: 2rem;
  }

  h2 {
    font-weight: 600;
    font-size: 2rem;
  }
  h3 {
    font-weight: 400;
    font-size: 1.5rem;
  }

  small {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transform: translateY(-6px);
    color: gray;

    @media (max-width: 1280px) {
      justify-content: flex-start;
    }

    i {
      display: flex;
      align-items: center;
      color: var(--alt-color);
    }
  }
`;

export const PropertyButton = styled.a`
  display: block;
  text-align: center;

  color: white;
  background-color: var(--alt-color);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
    transform: scale(0.99);
  }
`;

export const PropertyDescription = styled.div`
  margin-top: 2rem;

  h2 {
    font-weight: 600;
  }

  .footerProperty {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2rem;
    

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      gap: .6rem;
    
    }
    span {
      color: gray;
      text-decoration: underline;
      font-weight: 500;
    }
    .telephone {
      color: gray;
      font-size: 0.8rem;
      i {
        color: var(--alt-color);
      }
    }
  }
`;
