import React, { Component } from 'react';
import VoteCard from '../VoteCard/VoteCard.js';
import ResultCard from '../ResultCard/ResultCard.js';
import { withRouter } from 'react-router-dom';

class ClashCard extends Component {
  render() {
    const { clashes, firstIcon, secondIcon, test } = this.props;

    const currentClashId = this.props.location.pathname.slice(6);
    const currentClash = clashes.filter(clash => clash.key === currentClashId);
    const voteChoice = currentClash[0].voteChoice;
    return (
      <React.Fragment>
        {currentClash[0].voted === false ? (
          <VoteCard
            clashes={clashes}
            firstIcon={firstIcon}
            secondIcon={secondIcon}
            test={test}
          />
        ) : (
          <ResultCard
            clashes={clashes}
            firstIcon={firstIcon}
            secondIcon={secondIcon}
            test={test}
            clashId={currentClashId}
            voteChoice={voteChoice}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(ClashCard);
