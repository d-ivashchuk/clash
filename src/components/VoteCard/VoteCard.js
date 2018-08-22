import React, { Component } from 'react';
import Card from '../../ui/Card/Card.js';

import { db } from '../../firebase';

import TextLoader from '../../ui/TextLoader/TextLoader.js';
import IconSection from './IconSection/IconSection.js';
import ButtonSection from './ButtonSection/ButtonSection.js';
import CurrentBalance from './CurrentBalance/CurrentBalance.js';

class VoteCard extends Component {
  state = {
    votes: null
  };

  componentDidMount() {
    db.onceGetVotes().then(snapshot =>
      this.setState(() => ({
        ...this.state,
        votes: snapshot.val().votes
      }))
    );
  }
  render() {
    const { first, second, firstIcon, secondIcon, voteHandler } = this.props;
    return (
      <Card>
        <h1>
          {first} <span style={{ color: '#999' }}>vs</span> {second}
        </h1>
        <IconSection firstIcon={firstIcon} secondIcon={secondIcon} />
        <ButtonSection
          first={first}
          second={second}
          voteHandler={voteHandler}
        />
        {this.state.votes ? (
          <CurrentBalance votes={this.state.votes} />
        ) : (
          <TextLoader height="20px" width="80%" lines="1" />
        )}
      </Card>
    );
  }
}

export default VoteCard;
