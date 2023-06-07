import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: column;
  gap: 30px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bg};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  padding: 7px 15px;
  color: #fff;
  font-weight: bold;
`;
