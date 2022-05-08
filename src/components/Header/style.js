import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const CustomHeader = styled.header`
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  border-bottom: 1px solid #f5f5dc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 115px;
  padding-right: 115px;
  margin-bottom: 70px;

  h1 {
    cursor: pointer;
    height: 100%;
    font-size: 24px;
    font-weight: 900;
    color: #e34981;
    display: flex;
    align-items: center;
  }

  button {
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
  }
  button > div {
    background-color: #e34981;
    font-weight: 700;
    color: #fff;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    position: relative;
    left: 25px;
    top: -8px;
  }
  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
    h1 {
      font-size: 18px;
      width: 400px;
    }
  }
`;

export const CustomAiOutlineShoppingCart = styled(AiOutlineShoppingCart)`
  cursor: pointer;
  margin-right: 10px;
`;
