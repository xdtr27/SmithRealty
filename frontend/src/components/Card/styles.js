import styled from "styled-components";

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  background-color: white;
  border-radius: 0 6px 6px 0;
  overflow: hidden;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const CardImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 250px;
  }

  @media (max-width: 900px) {
    height: 100%;
    
    img {
      width: 100%;
      border-radius: 6px 6px 0 0;
    }
  }
`;

export const CardTextContainer = styled.div`
  display: flex;

  width: 100%;
  padding: 1.5rem;
  justify-content: space-between;

  div small {
    display: flex;
    align-items: center;
    color: var(--input-color);

    i {
      display: flex;
      align-items: center;
      color: var(--alt-color);
    }
  }

  @media (max-width: 900px) {
    display: grid;
    gap: 1rem;
    padding: 1rem;

    div small {
      font-size: 0.7rem;
    }
  }
`;
export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 1.3rem;
`;
export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  h3 {
    font-weight: 600;
  }

  @media (max-width: 900px) {
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CardButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  background-color: var(--alt-color);
  color: white;

  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.2s;

  i {
    display: flex;
    align-items: center;
  }

  &:hover {
    filter: brightness(0.9);
    transform: scale(0.98);
  }
`;
