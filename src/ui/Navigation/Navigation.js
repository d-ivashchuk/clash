import React, { Component } from 'react';
import styled from 'styled-components';

import { shadow } from '../../styles/utils/shadow.js';

const StyledNavi = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: white;
  z-index: 999;
  ${shadow};
  align-items: center;
`;

class Navigation extends Component {
  render() {
    return <StyledNavi />;
  }
}

export default Navigation;
