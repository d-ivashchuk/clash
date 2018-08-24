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
const StyledPeers = styled.span`
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
    this.props.voteHandler();
  };

  render() {
    const { voteChoice, clashes } = this.props;

    const currentClash = clashes.filter(
      clash => clash.key === this.props.location.pathname.slice(6)
    );

    return (
      <Card>
        {voteChoice === 'draw' ? (
          <h1>That's really nice of you to support both!</h1>
        ) : (
          <h1>
            You and{' '}
            {<StyledPeers>{currentClash[0].votes[voteChoice]}</StyledPeers>}{' '}
            others have chosen{' '}
            {<StyledChoice>{currentClash[0].names[voteChoice]}</StyledChoice>}
          </h1>
        )}
        <React.Fragment>
          <CurrentBalance
            votes={currentClash[0].votes}
            active={voteChoice}
            labeled
          />
          <Button clicked={this.decrease} label="redo" />
        </React.Fragment>
      </Card>
    );
  }
}

export default withRouter(ResultCard);
