import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid black;
  color: black;
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;
  cursor: pointer;
`;
