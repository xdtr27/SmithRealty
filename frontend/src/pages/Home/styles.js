import styled from "styled-components";

export const Container = styled.section`
  padding: 8vh 10vw;

  // animation

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
export const TextHeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  color: white;
  background-color: var(--alt-color);

  font-size: 1.5rem;
  border-radius: 50%;
  gap: 0.3rem;
  transition: all 0.2s;

  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
    transform: scale(0.97);
  }
`;
export const Divisor = styled.hr`
  background-color: #d8d8c8;
  height: 1px;
  width: 100%;
  margin: 1rem 0;
  border: none;
`;

export const BoxCards = styled.div`
  display: grid;
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
