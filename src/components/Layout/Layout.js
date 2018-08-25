import React, { Component } from 'react';
import styled from 'styled-components';

// import Navigation from '../../ui/Navigation/Navigation.js';

// background: ${props => props.theme.main};
// background: -webkit-linear-gradient(
//   to right,
//   ${props => props.theme.main},
//   ${props => props.theme.secondary}
// );
// background: linear-gradient(
//   to right,
//   ${props => props.theme.main},
//   ${props => props.theme.secondary}
// );

const StyledLayout = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

class Layout extends Component {
  render() {
    return <StyledLayout>{this.props.children}</StyledLayout>;
  }
}

export default Layout;
