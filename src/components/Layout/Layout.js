import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4e54c8;
  background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);
  background: linear-gradient(to right, #8f94fb, #4e54c8);
`;

class Layout extends Component {
  render() {
    return <StyledLayout>{this.props.children}</StyledLayout>;
  }
}

export default Layout;
