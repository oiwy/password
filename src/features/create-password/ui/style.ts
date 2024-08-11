import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 8px;
  width: 384px;
  border: 1px solid gray;
  border-radius: 8px;

  @media (max-width: 500px) {
    margin: 12px;
    width: 100%;
  }
`;

export const Text = styled.span`
  font-size: 14px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 6px;
  width: max-content;
  cursor: pointer;
`;

export const Input = styled.input`
  &[type="checkbox"] {
    width: 15px;
    height: 15px;
    accent-color: gray;
    cursor: pointer;
  }

  &[type="number"] {
    padding: 2px 2px 2px 4px;
    width: 58px;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 14px;
  }
`;

export const Button = styled.button<{ size?: "base" | "sm" }>`
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
  background: none;
  transition: all 0.2s ease-in-out;
  color: black;
  cursor: pointer;

  &:hover {
    background: gray;
    color: white;
  }

  ${(props) =>
    props.size === "sm" &&
    `
      padding: 4px;
      font-size: 12px;
      background: gray;
      color: white;
    `}
`;
