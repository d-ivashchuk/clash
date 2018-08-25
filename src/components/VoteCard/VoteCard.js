import React, { Component } from 'react';
import Card from '../../ui/Card/Card.js';
import { withRouter } from 'react-router-dom';
import IconSection from './IconSection/IconSection.js';
import ButtonSection from './ButtonSection/ButtonSection.js';
import CurrentBalance from './CurrentBalance/CurrentBalance.js';

import nike from '../../assets/nike.svg';
import adidas from '../../assets/adidas.svg';
import node from '../../assets/node.svg';
import firebase from '../../assets/firebase.svg';
import apple from '../../assets/apple.svg';
import samsung from '../../assets/samsung.svg';
import github from '../../assets/github.svg';
import gitlab from '../../assets/gitlab.svg';
import atom from '../../assets/atom.svg';
import sublime from '../../assets/sublime.svg';
import playstation from '../../assets/playstation.svg';
import xbox from '../../assets/xbox.svg';

class VoteCard extends Component {
  render() {
    const { voteHandler, handleVote, clashes } = this.props;

    const currentClashId = this.props.location.pathname.slice(6);
    const currentClash = clashes.filter(clash => clash.key === currentClashId);

    let firstIcon = null;
    let secondIcon = null;

    switch (currentClash[0].names.first.toLowerCase()) {
      case 'apple':
        firstIcon = apple;
        break;
      case 'firebase':
        firstIcon = firebase;
        break;
      case 'nike':
        firstIcon = nike;
        break;
      case 'github':
        firstIcon = github;
        break;
      case 'atom':
        firstIcon = atom;
        break;
      case 'playstation':
        firstIcon = playstation;
        break;

      default:
        break;
    }
    switch (currentClash[0].names.second.toLowerCase()) {
      case 'samsung':
        secondIcon = samsung;
        break;
      case 'node':
        secondIcon = node;
        break;
      case 'adidas':
        secondIcon = adidas;
        break;
      case 'gitlab':
        secondIcon = gitlab;
        break;
      case 'sublime':
        secondIcon = sublime;
        break;
      case 'xbox':
        secondIcon = xbox;
        break;

      default:
        break;
    }

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
          handleVote={handleVote}
          clashId={currentClashId}
        />
        <CurrentBalance votes={currentClash[0].votes} />
      </Card>
    );
  }
}

export default withRouter(VoteCard);
