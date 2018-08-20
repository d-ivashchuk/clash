import React, { Component } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase';

import Button from '../../../ui/Button/Button.js';

const StyledButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class ButtonSection extends Component {
  increaseFirst = () => {
    db.doIncreaseOf('first');
    db.doIncreaseOf('total');
    this.props.voteHandler('first');
  };
  increaseSecond = () => {
    db.doIncreaseOf('second');
    db.doIncreaseOf('total');
    this.props.voteHandler('second');
  };
  increaseDraw = () => {
    db.doIncreaseOf('draw');
    db.doIncreaseOf('total');
    this.props.voteHandler('draw');
  };

  render() {
    const { first, second } = this.props;
    return (
      <StyledButtonSection>
        <Button label={first} clicked={this.increaseFirst} />
        <Button label="love both" clicked={this.increaseDraw} />
        <Button label={second} clicked={this.increaseSecond} />
      </StyledButtonSection>
    );
  }
}

export default ButtonSection;
