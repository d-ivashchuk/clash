import React from 'react';
import styled from 'styled-components';

const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: auto;
  }
`;

const LogoWrapper = props => (
  <StyledLogoWrapper>{props.children}</StyledLogoWrapper>
);

export default LogoWrapper;
