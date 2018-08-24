import React, { Component } from 'react';
import Card from '../../ui/Card/Card.js';
import { withRouter } from 'react-router-dom';
import IconSection from './IconSection/IconSection.js';
import ButtonSection from './ButtonSection/ButtonSection.js';
import CurrentBalance from './CurrentBalance/CurrentBalance.js';

class VoteCard extends Component {
  render() {
    const { firstIcon, secondIcon, voteHandler, test, clashes } = this.props;

    const currentClashId = this.props.location.pathname.slice(6);
    const currentClash = clashes.filter(clash => clash.key === currentClashId);

    return (
      <Card>
        <h1>
          {currentClash[0].names.first}
          <span style={{ color: '#999' }}> vs </span>
          {currentClash[0].names.second}
        </h1>
        <IconSection firstIcon={firstIcon} secondIcon={secondIcon} />
        <ButtonSection
          first={currentClash[0].names.first}
          second={currentClash[0].names.second}
          voteHandler={voteHandler}
          test={test}
          clashId={currentClashId}
        />
        <CurrentBalance votes={currentClash[0].votes} />
      </Card>
    );
  }
}

export default withRouter(VoteCard);
