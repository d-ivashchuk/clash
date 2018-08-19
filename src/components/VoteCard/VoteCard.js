import React, { Component } from 'react';
import styled from 'styled-components';

import IconSection from './IconSection/IconSection.js';
import ButtonSection from './ButtonSection/ButtonSection.js';
import CurrentBalance from './CurrentBalance/CurrentBalance.js';

import { shadow } from '../../styles/utils/shadow.js';
import { borderRadius } from '../../styles/utils/borderRadius.js';

const StyledVoteCard = styled.div`
  height: 100%;
  width: 100%;
  max-width: 350px;
  max-height: 300px;
  background: white;
  padding: 20px;
  ${shadow};
  ${borderRadius};
  h1 {
    text-align: center;
    color: #666;
    margin-bottom: 10px;
  }
`;
class VoteCard extends Component {
  render() {
    return (
      <StyledVoteCard>
        <h1>
          {this.props.first} vs {this.props.second}
        </h1>
        <IconSection
          firstIcon={this.props.firstIcon}
          secondIcon={this.props.secondIcon}
        />
        <ButtonSection first={this.props.first} second={this.props.second} />
        <CurrentBalance />
      </StyledVoteCard>
    );
  }
}

export default VoteCard;
