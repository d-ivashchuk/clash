import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Card from '../../ui/Card/Card.js';
import Button from '../../ui/Button/Button.js';
import CurrentBalance from '../VoteCard/CurrentBalance/CurrentBalance.js';

import { db } from '../../firebase';

const StyledChoice = styled.p`
  color: ${props => props.theme.main}
  text-decoration: underline;
`;
const StyledPeers = styled.p`
  color: ${props => props.theme.secondary};
  font-weight: 200;
`;

class ResultCard extends Component {
  decrease = () => {
    db.doDecreaseOf(
      this.props.voteChoice,
      this.props.location.pathname.slice(6)
    );
    db.doDecreaseOf('total', this.props.location.pathname.slice(6));
    this.props.test(this.props.clashId);
  };

  render() {
    const { clashes } = this.props;

    const currentClashId = this.props.location.pathname.slice(6);
    const currentClash = clashes.filter(clash => clash.key === currentClashId);

    return (
      <Card>
        {currentClash[0].voteChoice === 'draw' ? (
          <h1>
            That's really nice of you to support both!
            <StyledPeers>
              {currentClash[0].votes[currentClash[0].voteChoice]}
            </StyledPeers>{' '}
            people did so!
          </h1>
        ) : (
          <h1>
            You and{' '}
            {
              <StyledPeers>
                {currentClash[0].votes[currentClash[0].voteChoice]}
              </StyledPeers>
            }{' '}
            others have chosen{' '}
            {
              <StyledChoice>
                {currentClash[0].names[currentClash[0].voteChoice]}
              </StyledChoice>
            }
          </h1>
        )}
        <React.Fragment>
          <CurrentBalance
            votes={currentClash[0].votes}
            active={currentClash[0].voteChoice}
            labeled
          />
          <Button clicked={this.decrease} label="redo" />
        </React.Fragment>
      </Card>
    );
  }
}

export default withRouter(ResultCard);
