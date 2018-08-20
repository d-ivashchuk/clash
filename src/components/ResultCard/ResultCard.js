import React, { Component } from 'react';
import styled from 'styled-components';

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
  state = {
    votes: null,
    names: null
  };

  componentDidMount() {
    db.onceGetVotes().then(snapshot =>
      this.setState(() => ({
        ...this.state,
        votes: snapshot.val().votes,
        names: snapshot.val().names
      }))
    );
  }

  decrease = () => {
    db.doDecreaseOf(this.props.voteChoice);
    db.doDecreaseOf('total');
    this.props.voteHandler();
  };

  render() {
    const { votes, names } = this.state;
    const { voteChoice } = this.props;
    return (
      <Card>
        {votes ? (
          voteChoice === 'draw' ? (
            <h1>That's really nice of you to support both!</h1>
          ) : (
            <h1>
              You and {<StyledPeers>{votes[voteChoice] - 1}</StyledPeers>}{' '}
              others have chosen
              {<StyledChoice>{names[voteChoice]}</StyledChoice>}
            </h1>
          )
        ) : null}

        {votes ? (
          <React.Fragment>
            <CurrentBalance votes={votes} active={voteChoice} labeled />
            <Button clicked={this.decrease} label="redo" />
          </React.Fragment>
        ) : null}
      </Card>
    );
  }
}

export default ResultCard;
