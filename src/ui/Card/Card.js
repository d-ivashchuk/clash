import React, { Component } from 'react';
import styled from 'styled-components';

import { shadow } from '../../styles/utils/shadow.js';
import { borderRadius } from '../../styles/utils/borderRadius.js';

const StyledCard = styled.div`
  height: 100%;
  width: 100%;
  max-width: 350px;
  max-height: 300px;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${shadow};
  ${borderRadius};

  h1 {
    text-align: center;
    color: #666;
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    margin: 0 15px 0 15px;
  }
`;

class Card extends Component {
  render() {
    return <StyledCard>{this.props.children}</StyledCard>;
  }
}

export default Card;
