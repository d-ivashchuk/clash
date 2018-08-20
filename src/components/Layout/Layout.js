import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

class Layout extends Component {
  render() {
    return <StyledLayout>{this.props.children}</StyledLayout>;
  }
}

export default Layout;
