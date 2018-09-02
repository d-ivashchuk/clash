import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  position: relative;
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
