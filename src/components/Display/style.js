import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  margin-top: 75px;
  list-style: none;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
