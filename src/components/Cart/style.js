import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 100px;
  section {
    width: 25%;
    background-color: #fff;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 90px;
  }
  section > p,
  span {
    font-weight: 600;
  }
  section h3 {
    width: 100%;
    height: 30px;
  }
  p {
    width: 80%;
    margin: 0;
    display: flex;
    justify-content: space-around;
  }
  section > button {
    border: none;
    border-radius: 6px;
    background-color: #e34981;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 40px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
    section {
      width: 60%;
    }
  }
`;

export const DivTitulo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #fff;
  border-bottom: none;
  font-size: 20px;
  margin-bottom: 40px;

  p {
    font-weight: 700;
    width: 100px;
  }
  @media (max-width: 1024px) {
    span {
      display: none;
    }
    p {
      width: 100%;
    }
  }
`;

export const CartUl = styled.ul`
  width: 55%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 50px;

  li {
    box-sizing: border-box;
    justify-content: space-between;
    display: flex;
    width: 100%;
    align-items: center;
    padding-right: 10px;
    height: 120px;
  }

  li > h1 {
    margin: auto;
  }

  button {
    background-color: #e34981;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    cursor: pointer;
  }

  span {
    width: 100px;
  }
  p,
  span {
    font-weight: 700;
  }
  figure {
    margin: 0;
  }
  li img {
    width: 150px;
    max-height: 150px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    li {
      flex-direction: column;
      height: 230px;
      padding-top: 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
    li img {
      width: 120px;
    }
    p,
    span {
      font-size: 14px;
    }
  }
`;
