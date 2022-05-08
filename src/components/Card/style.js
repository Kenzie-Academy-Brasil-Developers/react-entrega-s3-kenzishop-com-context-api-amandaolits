import styled from "styled-components";

export const Li = styled.li`
  width: 350px;
  height: 230px;
  margin-bottom: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  figure {
    margin: 0;
    width: 100%;
    height: 170px;
  }

  img {
    width: 140px;
    max-height: 140px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 90%;
  }

  div > p {
    font-weight: 500;
    height: 50px;
    margin: 0;
  }

  div > span {
    font-weight: 700;
    font-size: 18px;
    margin: 0;
    margin-bottom: 10px;
  }

  button {
    border: none;
    border-radius: 4px;
    background-color: #e34981;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 50px;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 5px;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    margin-right: 0;
  }
`;
