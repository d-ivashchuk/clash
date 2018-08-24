import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.div`
  color: #fff !important;
  text-transform: uppercase;
  text-align: center;
  background: ${props => props.theme.main};
  padding: 15px;
  border-radius: 5px;
  display: block;
  border: none;
  margin: auto;
  margin-top: 15px;
  cursor: pointer;
  width: 80px;
  transition: all 0.1s ease-in 0s;
  &:hover {
    background: #434343;
    letter-spacing: 1px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.1s ease-in 0s;
  }
`;

const StyledLinkWrapper = styled.div`
  > a {
    text-decoration: none;
    font-size: 11px;
  }
`;

const signUpLink = props => (
  <StyledLinkWrapper>
    <Link to={props.route}>
      <StyledLink>{props.label}</StyledLink>
    </Link>
  </StyledLinkWrapper>
);

export default signUpLink;
