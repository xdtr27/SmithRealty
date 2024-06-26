import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  justify-content: center;

  padding: 5vh 5vw;

  dialog {
    &:open {
      display: flex;
    }
    flex-direction: column;
    text-align: center;

    left: 50%;
    top: 50%;

    transform: translateX(-50%) translateY(-100%);

    padding: 1rem 2rem;
    background: white;
    max-width: 400px;
    padding-top: 2rem;
    border-radius: 20px;
    border: 0;
    box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation: fadeIn 0.5s ease both;
    
    @media (max-width: 600px) {
      width: 70%;
      padding: 1rem;
      padding-top: 2.5rem;

      span {
        font-size: 0.5rem;
      }
    }

    &::backdrop {
      animation: fadeIn 1s ease both;
      background: rgb(255 255 255 / 40%);
      z-index: 2;
      backdrop-filter: blur(20px);
    }

    .x {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      transition: filter 0.1s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }

      color: var(--input-color);
    }
    h2 {
      font-weight: 500;
      font-size: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      display: flex;
    }
    span {
      color: black;
      text-decoration: underline;
      color: var(--alt-color);
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 4vh 5vw;
  }
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding: 3rem 10vw;
  border-radius: 15px;
  background-color: white;

  div {
    text-align: center;
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

  .err {
    color: red;
    font-size: 10px;
    margin-left: 10px;
    align-self: start;
  }

  .inputs {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;

    input {
      width: 100%;
      padding: 0.5rem;
      border-radius: 6px;
      border: 1px solid var(--input-color);
      transition: all 0.1s;

      outline: none;

      &:focus {
        border: 1px solid var(--alt-color);
      }
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 600;
    position: relative;

    &:after {
      content: "";
      width: 40px;
      height: 6px;
      border-radius: 50px;
      background-color: var(--alt-color);
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const TextArea = styled.textarea`
  resize: none;

  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--input-color);
  transition: all 0.1s;

  outline: none;

  &:focus {
    border: 1px solid var(--alt-color);
  }
`;
export const SubmitBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  button[type="submit"] {
    cursor: pointer;
    background-color: var(--alt-color);
    color: white;
    font-weight: 600;

    width: 100%;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid var(--input-color);
    transition: all 0.1s;

    outline: none;

    &:hover {
      filter: brightness(0.9);
      transform: scale(0.99);
    }
  }

  span {
    text-decoration: underline;
    color: gray;

    display: block;
    margin-top: 1rem;

    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.5);
    }
  }
`;

export const Modal = styled.dialog``;
