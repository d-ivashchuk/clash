import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  background: ${props => (props.color ? props.color : props.theme.main)};
  padding: 15px;
  border-radius: 5px;
  display: block;
  border: none;
  margin: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in 0s;
  &:hover {
    background: #434343;
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.1s ease-in 0s;
  }
  &:disabled {
    background-color: #ccc;
    color: #777;
    cursor: not-allowed;
  }
`;

const Button = props => (
  <StyledButton
    onClick={props.clicked}
    color={props.color}
    disabled={props.disabled}
    type={props.type}>
    {props.label}
  </StyledButton>
);

export default Button;
