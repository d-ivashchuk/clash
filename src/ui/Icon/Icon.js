import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
  border: 2px solid #4e54c8;
  border-radius: 70px;
  padding: 5px;
  margin: 10px;
`;
const Icon = props => (
  <StyledIcon src={props.src} height={props.height} width={props.width} />
);

export default Icon;
