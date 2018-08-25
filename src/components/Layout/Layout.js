import React, { Component } from 'react';
import styled from 'styled-components';

// import Navigation from '../../ui/Navigation/Navigation.js';

const StyledLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background: ${props => props.theme.main};
  background: -webkit-linear-gradient(
    to right,
    ${props => props.theme.main},
    ${props => props.theme.secondary}
  );
  background: linear-gradient(
    to right,
    ${props => props.theme.main},
    ${props => props.theme.secondary}
  );

  @media (max-width: 500px) {
    align-content: stretch;
  }
`;

class Layout extends Component {
  render() {
    return <StyledLayout>{this.props.children}</StyledLayout>;
  }
}

export default Layout;
