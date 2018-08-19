import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../../../ui/Button/Button.js';

const StyledButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class ButtonSection extends Component {
  render() {
    return (
      <StyledButtonSection>
        <Button label={this.props.first} />
        <Button label="love both" />
        <Button label={this.props.second} />
      </StyledButtonSection>
    );
  }
}

export default ButtonSection;
