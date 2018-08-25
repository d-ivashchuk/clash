import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: 5px;
  margin: 10px;
`;
const Logo = props => (
  <StyledLogo src={props.src} height={props.height} width={props.width} />
);

export default Logo;
