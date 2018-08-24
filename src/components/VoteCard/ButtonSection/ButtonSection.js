import React, { Component } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase';
import { auth } from '../../../firebase';

import Button from '../../../ui/Button/Button.js';

const StyledButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class ButtonSection extends Component {
  increaseFirst = () => {
    db.doIncreaseOf('first', this.props.clashId);
    db.doIncreaseOf('total', this.props.clashId);
    this.props.test(this.props.clashId, 'first');
    // this.props.voteHandler('first');
    auth.doAnonymousSignIn();
  };
  increaseSecond = () => {
    db.doIncreaseOf('second', this.props.clashId);
    db.doIncreaseOf('total', this.props.clashId);
    this.props.test(this.props.clashId, 'second');
    // this.props.voteHandler('second');
    auth.doAnonymousSignIn();
  };
  increaseDraw = () => {
    db.doIncreaseOf('draw', this.props.clashId);
    db.doIncreaseOf('total', this.props.clashId);
    this.props.test(this.props.clashId, 'draw');
    // this.props.voteHandler('draw');
    auth.doAnonymousSignIn();
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
